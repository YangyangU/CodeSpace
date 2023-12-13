<template>
    <!-- 页面过度动画 -->
    <!-- transition只能包含一个子容器 -->
    <transition name="fade">
        <div class="header-detail" v-show="detailShow"><!-- 被transition动态添加类名 -->
            <div class="detail-wrapper">
                <div class="detail-main">
                    <h1 class="name">{{seller.name}}</h1>
                </div>
                <div class="star-wrapper">
                    <div class="star">
                        <span class="star-item"></span>
                        <span class="star-item"></span>
                        <span class="star-item"></span>
                        <span class="star-item"></span>
                        <span class="star-item"></span>
                    </div>
                </div>
                <div class="title">
                    <div class="line"></div>
                    <div class="text">优惠信息</div>
                    <div class="line"></div>
                </div>
                <ul class="supports">
                    <li class="support-item"  v-for="(item,index) in supports" :key="index">
                        <SupportIcon :size="1" :type="seller.supports[index].type"/>
                        <span class="text"></span>
                    </li>
                </ul>
                <div class="title">
                    <div class="line"></div>
                    <div class="text">商家公告</div>
                    <div class="line"></div>
                </div>
                <div class="bulletin">
                    <p class="content">{{seller.bulletin}}</p>
                </div>
            </div>
            <div class="detail-close" @click.stop="hideDetail"> <!-- .stop阻止事件冒泡 -->
                X<i iconfont icon-cuocha_kuai></i>
            </div>
        </div>
    </transition>
</template>

<script>
import SupportIcon from '@/components/support-icon/Support-icon.vue'
    export default {
        components:{
            SupportIcon,
        },
        data(){
            return{
                
            }
        },
        methods:{
            hideDetail(){ //拿不到detailShow？//子父组件通讯 子组件负责抛出
                this.$emit('hide',false); //事件名,值    子组件负责发散，父组件负责接收
            }               //创建一个hide事件
        },
        props:{
            seller:{
                type:Object,
                default:()=>{
                    return {}
                }
            }
        },
    }
</script>

<style lang="less" scoped>
@import '@/common/style/variable.less';

.header-detail{
    position:fixed;//相对于窗口定位
    left: 0;//扯大
    right: 0;
    top: 0;
    bottom: 0;
    background-color: @color-background-s;
    color: @color-white;
    backdrop-filter: blur(10px);//被盖在下面的虚化掉
    &.fade-enter-from,&.fade-leave-to{//被transition动态添加的类名
        opacity: 0;//全透明
        background: @color-background;
    }
    &.fade-enter-active,&.fade-leave-active{
        transition: all 0.5 ease;//从不透明到全透明花0.5秒
    }
    .detail-wrapper{
        .detail-main{
            margin-top: 64px;
            padding-bottom: 64px;
            .name{
                font-size: @fontsize-large;
                font-weight: 700;
                line-height: 16px;
                text-align: center;
            }
        }
        .star-wrapper{
            margin-top: 18px;
            padding: 2px 0;
            text-align: center;
        }
        .supports{
            margin: 0 auto;
            width: 80%;
        }
        .title{
            display: flex;
            margin: 28px auto 24px;
            width: 80%;
            .line{
                border-bottom: 1px solid hsla(0,0%,100%,.2);
                flex: 1;
                position: relative;
                top: -6px;
            }
            .text{
                font-size: 14px;
                font-weight: 700;
                padding: 0 12px;
            }
        }
        .bulletin{
            margin: 0 auto;
            width: 80%;
            .content{
                font-size: @fontsize-small;
                line-height: 24px;
                padding: 0 12px;
            }
        }
    }
    .detail-close{
        width: 30px;
        height: 30px;
        position: fixed;
        bottom: 30px;
        left: 50%;
        margin-left: -15px;//往左移自身一半才居中// translate: (-50%);同理        
        text-align: center;
        // align-items: center;//不是弹性容器不能用
        line-height: 30px;
    }
}
</style>