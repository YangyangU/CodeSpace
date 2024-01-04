<template>
    <div class="goods">
        <div class="goods-content">
            <div class="menu-wrapper">
                <ul>
                    <li>菜单一</li>
                    <li>菜单二</li>
                    <li>菜单三</li>
                    <li>菜单四</li>
                    <li>菜单五</li>
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
    export default {
        data(){
            return{

            }
        },
        created(){
            
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