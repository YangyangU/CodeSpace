<template>
    <div class="project-qq">
        <div class="qq-head">
            <router-link to="../self">
                <div class="showhead">
                    <span class="headtext"></span>
                </div>
            </router-link>

            <div class="showname">Aidan</div>
            <div class="showadd">+</div>
        </div>

        <router-view></router-view>


        <div class="qq-foot">

            <router-link to="./homeBody" @click="toone">

                <div class="foot-info foot-chil" :class="{workon:isone()}">
                    <i class="iconfont icon-xiaoxi-zhihui"></i>
                    <div class="inof-text ">消息</div>
                </div>
            </router-link>

            <router-link to="./homeContact" @click="totwo">
                <div class="foot-contact foot-chil" :class="{workon:istwo()}">
                    <i class="iconfont icon-lianxiren"></i>
                    <div class="inof-text ">联系人</div>
                </div>
            </router-link>

            <router-link to="./homeZore" @click="tothree">
                <div class="foot-zone foot-chil" :class="{workon:isthree()}">
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
        toone(){
            this.jud = 1
        },
        totwo(){
            this.jud = 2
        },
        tothree(){
            this.jud = 3
        },
        isone(){
            if(this.jud == 1)return true
            return false
        },
        istwo(){
            if(this.jud == 2)return true
            return false
        },
        isthree(){
            if(this.jud==3)return true
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
        margin-left: auto;
        margin-right: 5px;
        font-size: 30px;

    }
}


.qq-foot {

    
    position: fixed;
    bottom: 0;
    /* .foot-info {
         color: rgb(0, 98, 255); 
    } */

    height: 10%;
    background-color: #fff;
    opacity: 0.9;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    
    .foot-chil {
        color: #0c0c0c;
        margin-top: 10px;
        padding: 0 45px 0 45px;
        text-align: center;

        .iconfont {

            font-size: 30px;
        }

        .inof-text {
            font-size: 15px;
        }
    }
   .workon{
    color: #37cdfb;
   }
}
</style>