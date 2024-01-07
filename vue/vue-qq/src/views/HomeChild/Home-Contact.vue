<template>
    <div class="allConnect">
        <input type="text" class="search" placeholder="搜索">
        <div class="message">
            <div class="newFriend">
                <span class="newFriendText">新朋友</span>
                <span class="rightArrow">></span>
            </div>
            <div class="groupMessage">
                <span class="groupMessageText">群通知</span>
                <span class="rightArrow">></span>
            </div>
        </div>
        <div class="contactList">
            <div class="blank"></div>
            <div class="contactMenu">
                <ul class="classify">
                    <li class="friendclass"><span class="friendspan">好友</span></li>
                    <li class="friendclass"><span class="friendspan">分组</span></li>
                    <li class="friendclass"><span class="friendspan">群聊</span></li>
                    <li class="friendclass"><span class="friendspan">设备</span></li>
                    <li class="friendclass"><span class="friendspan">通讯录</span></li>
                    <li class="friendclass"><span class="friendspan">订阅号</span></li>
                </ul>
            </div>

            <div>
                <ul>
                    <li v-for=" item in communication" :key="item.name">
                        <div>>{{ item.group }}</div>
                    </li>
                </ul>
            </div>



        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            communication: [
                {
                group:'家人' ,
                member:[
                    {
                        img: '../public/vue.jpg',
                        name: '小小',
                        time: '昨天20:01',
                        lastinfo: '小小：吃饭了吗？'
                    },
                ]
                },
                {
                group:'兄弟' ,
                member:[
                    {
                        img: '../public/vue.jpg',
                        name: '小小',
                        time: '昨天20:01',
                        lastinfo: '小小：吃饭了吗？'
                    },
                ]
                },
                {
                group:'同学' ,
                member:[
                    {
                        img: '../public/vue.jpg',
                        name: '小小',
                        time: '昨天20:01',
                        lastinfo: '小小：吃饭了吗？'
                    },
                ]
                },
                ]
        }
    }
}
</script>

<style scoped>
.allConnect {
    width: 100vw;
    height: 80%;
    bottom: 0;
    overflow: auto;

    .search {
        text-align: center;
        width: 88vw;
        position: absolute;
        top: 76.73px;
        left: 0;
        padding: 6px 0;
        margin: 0 20px;
        background: #DCDCDC;
        border: 1px solid #DCDCDC;
        border-radius: 6px;
    }

    .message {
        margin-top: 13px;
        width: 100vw;
        height: 80px;
        position: absolute;
        top: 106px;
        left: 0;

        .newFriend {
            height: 40px;
            line-height: 40px;

            .newFriendText {
                margin-left: 20px;
                float: left;
            }

            .rightArrow {
                margin-right: 20px;
                float: right;
            }
        }

        .groupMessage {
            height: 40px;
            line-height: 40px;

            .groupMessageText {
                margin-left: 20px;
                float: left;
            }

            .rightArrow {
                margin-right: 20px;
                float: right;
            }
        }
    }

    .contactList {
        position: absolute;
        top: 196px;
        left: 0;

        .blank {
            width: 100vw;
            height: 10px;
            background: #DCDCDC;
        }

        .contactMenu {
            .classify {
                height: 35px;
                margin: 0;
                padding: 0;
                list-style: none;
                display: flex;
                align-items: center;

                .friendclass {

                    .friendspan {
                        padding: 2px 5.4px;
                        margin: 1.5px 7.2px;
                    }
                }
            }
        }

    }
}
</style>