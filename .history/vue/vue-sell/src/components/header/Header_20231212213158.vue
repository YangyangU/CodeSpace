<template>
    <!-- 图片放在当前文件夹方便取,而且只有这个地方用的上 -->
    <div class="header" @click="showDetail">
        <div class="content-wrapper">
            <div class="avatar">
                <!-- 图片装在div里面，防止图片变形 -->
                <img :src="seller.avatar" alt="">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
                <!-- 当有独立特性，成为组件 -->
                <div class="support" v-if="seller.supports">
                    <SupportIcon :size="1" :type="seller.supports[0].type"/>
                    <span class="text">{{seller.supports[0].description}}</span>
                    <!-- supports[0].description 报错 ，访问不存在的数组下标 ;解决：判断dom结构是否存在 v-if="seller.support"-->
                </div>
            </div>
            <div class="support-count" v-if="seller.supports">
                <span class="count">{{seller.supports.length}}个</span>
                <i class="iconfont icon-youjiantou"></i>
            </div>
        </div>
        <div class="bulletin-wrapper">
            <span class="bulletin-title"></span>
            <span class="bulletin-text">{{seller.bulletin}}</span>
            <i class="iconfont icon-youjiantou"></i>
        </div>
        
        <div class="bg" v-if="seller.avatar" :style="{backgroundImage: `url(${seller.avatar})`}"></div>
        <HeaderDetail v-show="detailShow" @hide="handle"/>
                            <!-- 看hide什么时候出现就什么时候触发 -->
    </div>
    <div class="body">

    </div>
</template>

<script>
// 组件引入
import SupportIcon from '@/components/support-icon/Support-icon.vue'
import HeaderDetail from '@/components/header-detail/Header-detail.vue'
export default {
    components:{//注册
        SupportIcon,
        HeaderDetail
    },
    props:{//用法跟数据源一致
        seller:{
            type:Object,
            default:()=>{
                return {}
            }//是对象，则写成箭头函数（官方建议），在箭头函数return一个对象
        }
    },
    data(){
        return{
            detailShow:false,
        }
    },
    methods:{
        showDetail(){
            this.detailShow = true
        },
        handle(val){
            console.log('子组件发布了一个hide',val);
            this.detailShow = val
        }
    }
}
</script>

<style lang="less" scoped>
@import '@/common/style/variable.less';
@import '@/common/style/mixin.less';
.header{
    background-color: @color-background-ss;
    position: relative;
    .content-wrapper{
        display: flex;
        padding: 24px 12px 18px 24px;
        position: relative;
        .avatar{
            width: 64px;
            height: 64px;
            img{
                width: 100%;
                border-radius: 2px;
            }
        }
        .content{
            flex:1;
            margin-left: 16px;
            color: @color-white;
            .title{
                display: flex;
                align-items: center;
                margin-bottom: 8px;
                .brand{
                    width: 30px;
                    height: 18px;
                    // background-image: url('./brand@2x.png');
                    .bg-image('./brand');
                    background-size: cover;
                }

                .name{
                    margin-left: 6px;
                    font-size: @fontsize-large;
                    font-weight: bold;
                }
            }
            .description{
                font-size: @fontsize-small;
                margin-bottom: 8px;
            }
            .support{
                display: flex;
                align-items: center;
                .text{
                    font-size: @fontsize-small-s;
                    margin-left: 4px;
                }
            }
        }
        .support-count{
            position: absolute;
            right: 12px;
            bottom: 14px;
            padding: 0 8px;
            height: 24px;
            // line-height: 24px;
            text-align: center;
            background: @color-background-sss;
            border-radius: 14px;
            display: flex;
            align-items: center;//y轴居中
            color: @color-white;
        }
        .count{
            font-size: @fontsize-small-s;
        }
        .iconfont{
            font-size: @fontsize-small-s;
            margin-left: 2px;
        }
    }
    
    .bulletin-wrapper{
        display: flex;
        height: 28px;
        padding: 0 8px;
        background-color: @color-background-sss;
        align-items: center;
        color: @color-white;

        .bulletin-title{
            // width: 22px;//被挤了，没有用
            flex:0 0 22px;//放大比 缩小比 当不放大不缩小的时候的大小
            height: 12px;
            .bg-image('bulletin');
            background-size: 100% 100%;
        }

        .bulletin-text{
            flex: 1;
            margin-left: 4px;
            font-size: @fontsize-small-s;
            white-space: nowrap;//强制单行显示
            overflow: hidden;//超出即隐藏
            text-overflow: ellipsis;//超出即打省略号
        }
        .icon-youjiantou{
            flex: 0 0 10px;
            font-size: @fontsize-small-s;
        }
    }
    .bg{

        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-size: 100% 100%;
        z-index: -1;//层级下移
        filter: blur(10px);//虚化
    }
}
</style>