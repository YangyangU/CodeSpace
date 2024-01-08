<template>
    <div class="project-qq">
        <div class="qq-head">
            <router-link to="../self">
                <div class="showhead">
                    <span class="headtext"></span>
                </div>
            </router-link>

            <div class="showname">Aidan</div>
            <div class="showadd">

                <el-dropdown class="el-dropdown">
                    <span class="el-dropdown-link">
                        <i class="iconfont icon-jiahao"></i>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu class="el-dropdown-menu" style="height: 160px;">
                            <el-dropdown-item class="iconfont"><i class="iconfont icon-chuangjianqunliao" style="font-size: 19px;margin-bottom: 10px;"> 创建群聊</i></el-dropdown-item>
                            <el-dropdown-item class="iconfont"><i class="iconfont icon-saoyisao" style="font-size: 19px;margin-bottom: 10px;"> 扫一扫</i></el-dropdown-item>
                            <el-dropdown-item class="iconfont"><i class="iconfont icon-24gl-paperPlane" style="font-size: 19px;margin-bottom: 10px;"> 面对面快传</i></el-dropdown-item>
                            <el-dropdown-item class="iconfont"><i class="iconfont icon-shoukuan" style="font-size: 19px;margin-bottom: 20px;"> 群收款</i></el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>

            </div>
        </div>

        <router-view></router-view>


        <div class="qq-foot">
            <router-link to="./homeBody" @click="toone">
                <div class="foot-info foot-chil" :class="{ workon: isone() }">
                    <i class="iconfont icon-xiaoxi-zhihui"></i>
                    <div class="inof-text ">消息</div>
                </div>
            </router-link>

            <router-link to="./homeContact" @click="totwo">
                <div class="foot-contact foot-chil" :class="{ workon: istwo() }">
                    <i class="iconfont icon-lianxiren"></i>
                    <div class="inof-text ">联系人</div>
                </div>
            </router-link>

            <router-link to="./homeZore" @click="tothree">
                <div class="foot-zone foot-chil" :class="{ workon: isthree() }">
                    <i class="iconfont icon-dongtai"></i>
                    <div class="inof-text ">动态</div>
                </div>
            </router-link>


        </div>

    </div>
</template>

<script>
import { isVNode } from 'vue';
export default {
    data() {
        return {
            jud: 1,

        }
    },
    methods: {
        toone() {
            this.jud = 1
        },
        totwo() {
            this.jud = 2
        },
        tothree() {
            this.jud = 3
        },
        isone() {
            if (this.jud == 1) return true
            return false
        },
        istwo() {
            if (this.jud == 2) return true
            return false
        },
        isthree() {
            if (this.jud == 3) return true
            return false
        }
    }
}
</script>

<style scoped>
* {
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
}



.project-qq {
    height: 100vh;
    display: hidden;
}

.qq-head {
    /* position: fixed; */
    /* width: 100vh; */
    border-radius: 5px;
    height: 10%;
    background-color: #37cdfb;
    display: flex;
    align-items: center;

    .showhead {
        background: url('../public/vue.jpg') no-repeat;
        background-size: 100% 100%;
        display: flex;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        /* background-color: rgb(249, 17, 17); */
        margin-left: 5px;

    }

    .showname {
        margin-left: 5px;
    }

    .showadd {
        display: flex;
        margin-left: auto;
        margin-right: 5px;
        .el-dropdown {
        .el-dropdown-link {
            cursor: pointer;
            color: var(--el-color-primary);
            display: flex;
            align-items: center;

            .icon-jiahao {
                font-size: 24px;
                color: #0c0c0c;
           
            }
        }
        .el-dropdown-menu{
            
            .iconfont{
                color: red;
            }
        }
    }



    }
}


.qq-foot {

    position: fixed;
    height: 10%;
    background-color: #fff;
    opacity: 0.9;
    border-radius: 5px;
    width: 100vw;
    /* margin-left: 10%;
    margin-right: 10%; */
    padding-top: 4.2%;
    display: flex;
    justify-content: space-between;
    .foot-info{
        margin-left: 40px;
    }
    .foot-zone{
        margin-right: 40px;
    }

    .foot-chil {
        color: #0c0c0c;
        text-align: center;

        .iconfont {
            width: 355px;
            font-size: 30px;
        }

        .inof-text {
            font-size: 15px;
        }
    }

    .workon {
        color: #37cdfb;
    }
}
</style>