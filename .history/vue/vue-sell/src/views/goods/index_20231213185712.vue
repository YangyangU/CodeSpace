<template>
    <div class="goods">
        <div class="goods -content">
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
    export default {
        
    }
</script>

<style lang="less" scoped>
.goods{
    position: absolute;
    width: 100%;
    bottom: 46px;
    top: 177px;
    &-content{
        display: flex;
        .menu-wrapper{
            width: 80px;
        }
    }
    .cart-wrapper{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 48px;
        background-color: #aaa;
    }
    
}
</style>