<!-- 首页和答题页面的结构相似，用组件可复用 -->
<template>
    <section><!-- h5标签 -->
        <header class="top_tips">
            <span class="num_tip" v-if="parentComponent==='home'">第一周</span>
            <span class="num_tip" v-if="parentComponent==='item'">题目1</span>
        </header>

        <!-- home -->

        <div v-if="parentComponent==='home'">
            <div class="home_logo item_container_style">

            </div>
            <router-link to="/item" class="start button_style"></router-link>
        </div>

        <!-- item -->
        <div v-if="parentComponent==='item'">
            <div class="item_back item_container_style">
                <div class="item_list_container">
                    <header class="item_title">{{ questionList[itemNum-1].topic_name }}</header>
                    <ul>
                        <li class="item_list" v-for="(item,index) in questionList[itemNum-1].topic_name.topic_answer" :key="index">
                            <span class="option_style">{{ item.topic_name}}</span>
                            <span class="option_detail">答案一</span>
                        </li>
                    </ul>
                </div>
            </div>
            <span class="next_item button_style"></span>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';
    export default {
        props:['parentComponent',],
        computed: mapState(['questionList','itemNum'])
    }
</script>

<style lang="less" scoped>

.top_tips {
    position: absolute;
    height: 7.35rem;
    width: 3.25rem;
    top: -1.3rem;
    right: 1.6rem;
    background: url('@/assets/images/WechatIMG2.png') no-repeat;
    background-size: 100% 100%;
    z-index: 10;

    .num_tip {
    position: absolute;
    left: 0.48rem;
    bottom: 1.1rem;
    height: 0.7rem;
    width: 2.5rem;
    font-size: 0.6rem;
    font-family: '黑体';
    font-weight: 600;
    color: #a57c50;
    text-align: center;
    }

}

.item_container_style{
    height: 11.625rem;
    width: 13.15rem;
    background-repeat: no-repeat;
    position: absolute;
    top: 4.1rem;
    left: 1rem;
}
.home_logo{
    background: url(../assets/images/1-2.png);
    background-size: 13.142rem 100%;
    background-position: right center;//x轴靠右，y轴居中
}

.button_style{
    display: block;
    height: 2.1rem;
    width: 4.35rem;
    background-size: 100% 100%;
    position: absolute;
    top: 16.5rem;
    left: 50%;
    margin-left: -2.175rem;
    background-repeat: no-repeat;
}

.start{
    background-image: url(../assets/images/1-4.png);
}

.item_back{
    background-image: url(../assets/images/2-1.png);
    background-size: 100% 100%;
}
.item_list_container{
    position: absolute;
    width: 8rem;
    height: 7rem;
    top: 2.4rem;
    left: 3rem;
    .item_title{
        font-size: 0.65rem;
        color: #fff;
        line-height: 0.7rem;
    }
    .item_list{
        margin-top: 0.4rem;
        span{
            display: inline-block;
            font-size: 0.6rem;
            color: #fff;
        }
        .option_style{
            width: 0.725rem;
            height: 0.725rem;
            border: 1px solid #fff;
            border-radius: 50%;//圆圈
            line-height: 0.725rem;
            text-align: center;
            margin-right: 0.3rem;
            font-size: 0.5rem;
            font-family: Arial;
        }
    }
}

.next_item{
    background-image: url(../assets/images/2-2.png);
}
</style>