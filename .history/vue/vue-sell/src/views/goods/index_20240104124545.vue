<template>
    <div class="goods">
      <div class="goods-content">
        <div class="menu-wrapper" ref="menuWrapper">
          <ul>
            <li 
              class="menu-item" 
              :class="{'current' : currentIndex === index}"
              v-for="(item, index) in goods" 
              :key="index"
              @click="selectMenu(index)"
            >
              <span class="text">
                <SupportIcon size="3" :type="item.type" v-if="item.type >= 0"/>
                {{item.name}}
              </span>
            </li>
          </ul>
        </div>  
        <div class="foods-wrapper" ref="foodsWrapper">
          <ul>
            <!-- 一个菜系 -->
            <li class="food-list" v-for="(item,index) in goods" :key="index" ref="foodList">
              <h1 class="title">{{item.name}}</h1>
              <!-- 一道道菜 -->
              <ul>
                <li class="food-item" v-for="(food,index) in item.foods" :key="index">
                  <div class="pic">
                    <img :src="food.image" alt="">
                  </div>
                  <div class="content">
                    <h2 class="name">{{food.name}}</h2>
                    <p class="desc">{{ food.description }}</p>
                    <div class="extra">
                      <span class="count">月售{{food.sellCount}}</span>
                      <span>好评率{{ food.rating }}%</span>
                    </div>
                    <div class="price">
                      <span class="now">￥{{ food.price }}</span>
                      <span class="old" v-if="food.oldPrice">￥{{ food.oldPrice }}</span>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="cart-wrapper">购物车</div>
    </div>
  </template>
  
  <script>
  import { getGoods } from '@/api'
  import SupportIcon from '@/components/support-icon/Support-icon.vue'
  import BScroll from '@better-scroll/core'
  
  export default {
    components: {
      SupportIcon
    },
    data() {
      return {
        goods: [],
        // currentIndex: 0,//用计算属性来操作变化
        foodsScroll:{}, //被BScroll修饰后的容器
        scrollY: 0,
        foodList: [],
        listHeight:[], //所有菜系DOM的高度
        
      }
    },
    created() {
      // 获取商品数据
      getGoods().then(res => {
        console.log(res);
        this.goods = res
        
        this.$nextTick(() => { // $nextTick里面的回调会在页面加载完毕之后才执行
          this.betterScroll()
          this._calulateHeight()
        })
      })
    },
    methods: {
      betterScroll() {
        // 获取到menu-wrapper的dom结构
        new BScroll(this.$refs.menuWrapper, {
          click: true //点击事件可以生效
        })
        this.foodsScroll = new BScroll(this.$refs.foodsWrapper,{
          click: true, //点击事件可以生效
          scrollY: true, //放开纵向滚动
          probeType: 3, //手指放上一直出发滚动事件
        })
  
        this.foodList = this.$refs.foodList
  
        //监听滚动事件，当右边滚动的时候，左边菜单对应滚动
        this.foodsScroll.on('scroll',pos=>{
          // console.log(pos);//给右侧容器监听上了滚动事件
          // console.log(Math.round(Math.abs(pos.y)));//只需要y轴的坐标
          this.scrollY = Math.round(Math.abs(pos.y))
        })
      },
      selectMenu(i) {
        // console.log(i);
        this.currentIndex = i
        // console.log(this.$refs.foodList);//已数组形式输出9个菜系
        this.foodsScroll.scrollToElement(this.$refs.foodList[i],300)//scrollToElement移到最顶部,第二个参数延时
        
      },
      _calulateHeight(){
        //计算每一个菜系DOM结构的高度
        let height = 0
        this.listHeight.push(height)
        this.foodList.forEach(li =>{
          height += li.clientHeight
          this.listHeight.push(height)
        })
        console.log(this.listHeight);
      }
    },
    computed:{
      currentIndex(){
        //随着右侧的滚动this.scrollY返回不同的下标
        for(let i = 0; i < this.listHeight.length; i++){
          const h1 = this.listHeight[i]
          const h2 = this.listHeight[i + 1]
          if(!h2 ||(this.scrollY >= h1 && this.scrollY < h2)){
            return i //如果坐标在h1和h2之间，则返回 i
          }
        }
        return 0
      }
    },
  }
  </script>
  
  <style lang="less" scoped>
  @import '@/common/style/variable.less';
  .goods{
    position: absolute;
    width: 100%;
    bottom: 46px;
    top: 177px;
    overflow: hidden;
    &-content{
      display: flex;
      height: 100%;
      .menu-wrapper{
        flex: 0 0 80px;
        background: @color-background-ssss;
        .menu-item{
          padding: 0 14px;
          font-size: @fontsize-small;
          height: 54px;
          display: flex;
          justify-content: center;
          align-items: center;
          &.current{
            background: #fff;
            font-weight: 700;
          }
        }
      }
      .foods-wrapper{
        flex: 1;
        .title{
          height: 26px;
          line-height: 26px;
          font-size: @fontsize-small;
          color:rgb(147,153,159);
          background: @color-background-ssss;
          padding-left: 14px;
          border-left: 2px solid #d9dde1;
        }
  
        .food-item{
          display: flex;
          padding: 18px;
          .pic{
            flex:0 0 57px;
            margin-right: 10px;
            img{
              width: 100%;
            }
          }
          .content{
            flex: 1;
            .name{
              font-size: @fontsize-medium;
              color:rgb(7,17,27);
              margin: 2px 0 8px 0;
            }
            .desc,.extra{//同时选中两个类名
              font-size: @fontsize-small-s;
              color:rgb(147,153,159);
              margin-bottom: 8px;
              line-height: 10px;
              .count{
              margin-right: 12px;
              }
            }
            .price{
              font-weight: 700;
              line-height: 10px;
              .now{
                font-size: @fontsize-medium;
                color:@color-red;
                margin-right: 8px;
              }
              .old{
                font-size: @fontsize-small-s;
                color:rgb(147,153,159);
                text-decoration: line-through;
              }
            }
            
          }
        }
      }
    }
  
    .cart-wrapper{
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 48px;
      background: #aaa;
    }
  }
  </style>