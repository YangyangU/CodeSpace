<template>
    <div class="qq-body">
            <ul class="body-info">
                <li v-for="(item, index) in communication" :key="index">
                    <div class="oneinfo">
                        <div class="body-showhead">
                            <img :src='item.img' alt="" class="oneimg">
                        </div>

                        <div class="body-showname">

                            <div class="body-name">
                                {{ item.name }}
                            </div>
                            <div class="lastinfo">
                                {{ item.lastinfo }}
                            </div>
                        </div>
                        <div class="lastdata">
                            {{ item.time }}
                        </div>
                    </div>
                </li>
            </ul>
        </div>
</template>

<script>
    export default {
        data() {
        return {
            communication: [
                {
                    img: '../public/vue.jpg',
                    name: '小小',
                    time: '昨天20:01',
                    lastinfo: '小下：我们截个图顶顶顶顶顶顶顶顶地对地导读得懂大大大大弹'
                },
                {
                    img: '../public/vue2.jpg',
                    name: '班级群',
                    time: '昨天20:01',
                    lastinfo: '小下：我们截个图'
                },
                {
                    img: '../public/vue3.jpg',
                    name: '幸福的一家人',
                    time: '昨天20:01',
                    lastinfo: '小下：我们截个图'
                },
                {
                    img: '../public/vue4.jpg',
                    name: '同学群',
                    time: '昨天21:00',
                    lastinfo: '班长：明天不要迟到'
                },
                {
                    img: '../public/vue5.jpg',
                    name: '小明同学',
                    time: '昨天21:00',
                    lastinfo: '小明同学：吃饭了嘛'
                }, {
                    img: '../public/vue.jpg',
                    name: '小小',
                    time: '昨天20:01',
                    lastinfo: '小下：我们截个图'
                },
                {
                    img: '../public/vue2.jpg',
                    name: '班级群',
                    time: '昨天20:01',
                    lastinfo: '小下：我们截个图'
                },
                {
                    img: '../public/vue3.jpg',
                    name: '幸福的一家人',
                    time: '昨天20:01',
                    lastinfo: '小下：我们截个图'
                },
                {
                    img: '../public/vue4.jpg',
                    name: '同学群',
                    time: '昨天21:00',
                    lastinfo: '班长：明天不要迟到'
                },
                {
                    img: '../public/vue5.jpg',
                    name: '小明同学',
                    time: '昨天21:00',
                    lastinfo: '小明同学：吃饭了嘛'
                }, {
                    img: '../public/vue.jpg',
                    name: '小小',
                    time: '昨天20:01',
                    lastinfo: '小下：我们截个图'
                },
                {
                    img: '../public/vue2.jpg',
                    name: '班级群',
                    time: '昨天20:01',
                    lastinfo: '小下：我们截个图'
                },
                {
                    img: '../public/vue3.jpg',
                    name: '幸福的一家人',
                    time: '昨天20:01',
                    lastinfo: '小下：我们截个图'
                },
                {
                    img: '../public/vue4.jpg',
                    name: '同学群',
                    time: '昨天21:00',
                    lastinfo: '班长：明天不要迟到'
                },
                {
                    img: '../public/vue5.jpg',
                    name: '小明同学',
                    time: '昨天21:00',
                    lastinfo: '小明同学：吃饭了嘛'
                }, {
                    img: '../public/vue.jpg',
                    name: '小小',
                    time: '昨天20:01',
                    lastinfo: '小下：我们截个图'
                },
                {
                    img: '../public/vue2.jpg',
                    name: '班级群',
                    time: '昨天20:01',
                    lastinfo: '小下：我们截个图'
                },
                {
                    img: '../public/vue3.jpg',
                    name: '幸福的一家人',
                    time: '昨天20:01',
                    lastinfo: '小下：我们截个图'
                },
                {
                    img: '../public/vue4.jpg',
                    name: '同学群',
                    time: '昨天21:00',
                    lastinfo: '班长：明天不要迟到'
                },
                {
                    img: '../public/vue5.jpg',
                    name: '小明同学',
                    time: '昨天21:00',
                    lastinfo: '小明同学：吃饭了嘛'
                }, {
                    img: '../public/vue.jpg',
                    name: '小小',
                    time: '昨天20:01',
                    lastinfo: '小下：我们截个图'
                },
                {
                    img: '../public/vue2.jpg',
                    name: '班级群',
                    time: '昨天20:01',
                    lastinfo: '小下：我们截个图'
                },
                {
                    img: '../public/vue3.jpg',
                    name: '幸福的一家人',
                    time: '昨天20:01',
                    lastinfo: '小下：我们截个图'
                },
                {
                    img: '../public/vue4.jpg',
                    name: '同学群',
                    time: '昨天21:00',
                    lastinfo: '班长：明天不要迟到'
                },
                {
                    img: '../public/vue5.jpg',
                    name: '小明同学',
                    time: '昨天21:00',
                    lastinfo: '小明同学：吃饭了嘛'
                }, {
                    img: '../public/vue.jpg',
                    name: '小小',
                    time: '昨天20:01',
                    lastinfo: '小下：我们截个图'
                },
                {
                    img: '../public/vue2.jpg',
                    name: '班级群',
                    time: '昨天20:01',
                    lastinfo: '小下：我们截个图'
                },
                {
                    img: '../public/vue3.jpg',
                    name: '幸福的一家人',
                    time: '昨天20:01',
                    lastinfo: '小下：我们截个图'
                },
                {
                    img: '../public/vue4.jpg',
                    name: '同学群',
                    time: '昨天21:00',
                    lastinfo: '班长：明天不要迟到'
                },
                {
                    img: '../public/vue5.jpg',
                    name: '小明同学',
                    time: '昨天21:00',
                    lastinfo: '小明同学：吃饭了嘛'
                },

            ]
        }
    }

}
    
</script>

<style scoped>
.qq-body {
    height: 80%;
    overflow: auto;

    .body-info {
        list-style: none;

        .oneinfo {
            margin-top: 5px;
            height: 60px;
            background-color: white;
            display: flex;
            align-items: center;

            .body-showhead {
                height: 50px;
                width: 50px;
                border-radius: 50%;
                background-color: #fff;
                margin-left: 2px;
                overflow: hidden;

                .oneimg {
                    width: 100%;
                    height: 100%;
                }
            }

            /* 这里是文本内容 */
            .body-showname {
                margin-left: 5px;
                width: 68%;

                .lastinfo {
                    font-size: 12px;
                    color: grey;
                    /* 限制为一行，超出用...代替 */
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }

            .lastdata {
                font-size: 12px;
                color: grey;
                margin-bottom: auto;
                margin-top: 15px;

            }
        }

    }

}

</style>