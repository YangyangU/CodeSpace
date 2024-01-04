<template>
    <div class="goods">
        <div class="goods-content">
            <div class="menu-wrapper">
                <ul>
                    <li class="menu-item" v-for="(item,index) in goods" :key="index">
                        <span class="text">
                            <SupportIcon size="3" :type="item.type" v-if="item.type>=0"/>
                            {{item.name}}
                        </span>
                    </li>
                </ul>
            </div>
                右侧菜品
            <div class="foods-wrapper">

            </div>
        </div>

        <div class="cart-wrapper">
            购物车
        </div>
    </div>
</template>

<script>
import { getGoods } from '@/api';
import SupportIcon from '@/components/support-icon/Support-icon.vue';
    export default {
        components:{
            SupportIcon
        },
        data(){
            return{
                goods:[]
            }
        },
        //获取商品信息
        created(){
            getGoods().then(res=>{
                console.log(res);
                this.goods = res
            })
        }
    }
</script>

<style lang="less" scoped>
@import '@/common/style/variable.less';
.goods{
    position: absolute;
    width: 100%;
    bottom: 46px;
    top: 177px;
    &-content{
        display: flex;
        .menu-wrapper{
            // width: 80px;
            flex:0 0 80px;//无法撼动
            background-color: @color-background-ssss;
            .menu-item{
                padding: 0 14px;
                font-size: @fontsize-small;
                height: 54px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
        .food-wrapper{
            flex:1;
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