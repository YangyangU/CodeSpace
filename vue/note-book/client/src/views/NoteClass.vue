<template>
  <div class="note-class-wrapper">
    <div class="note-class" :class="{ 'hide': state.isMenuShow }">
      <header>
        <div @click="() => { state.isMenuShow = true }"><van-icon name="list-switch" /></div>
        <div>
          <van-icon name="edit" />
          <van-icon name="like-o" />
          <van-icon name="search" />
        </div>
      </header>
      <section>
        <div class="note-item" @click="goNoteList(item.title)" v-for="(item, index) in noteClassList" :key="index"
          :style="{ backgroundColor: item.bgColor }">
          <span class="title">{{ item.title }}</span>
        </div>
      </section>
    </div>
    <Menu class="menu" :class="{ 'active': state.isMenuShow }" @hidden="hideMenu"></Menu>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Menu from '../components/Menu.vue'
import { useRouter } from 'vue-router' //也就是抛出来的router vue封装方便找

const router = useRouter()
const hideMenu = (e) => {
  state.isMenuShow = e
}
const state = reactive({
  isMenuShow: false
})
const noteClassList = [
  { bgColor: '#ffa946', title: '美食' },
  { bgColor: '#43b941', title: '旅行' },
  { bgColor: '#ee8282', title: '恋爱' },
  { bgColor: '#2fbfcc', title: '学习' },
  { bgColor: '#4e4e4e', title: '吵架' },
]
const goNoteList = (title) => {
  router.push({path:'/noteList',query:{'title':title}})
}
</script>

<style lang="less" scoped>
body {
  background-color: #f5f5f5;
}

.note-class-wrapper {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  .note-class {
    position: absolute;
    transform: translateX(0);
    width: 100%;
    height: 100%;
    padding: 0 0.5866rem;
    box-sizing: border-box;
    overflow-y: scroll;
    transition: transform 0.3s;

    &.hide {
      transform: translateX(100%);
    }

    header {
      display: flex;
      justify-content: space-between;
      height: 1.2rem;
      line-height: 1.2rem;
      margin: 10px 0;

      .van-icon {
        margin-left: 10px;
      }
    }

    section {
      width: 100%;

      .note-item {
        height: 3.2rem;
        border-radius: 0.3rem;
        margin-bottom: 0.64rem;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        box-shadow: 0 0 10px 2px #ccc;
        overflow: hidden;

        .title {
          color: #fff;
          font-size: 0.5333rem;
          text-align: center;
          display: block;
          margin-top: 0.5333rem;
        }
      }
    }
  }

  .menu {
    width: 100%;
    height: 100vh;
    position: absolute;
    transform: translateX(-100%);
    transition: transform 0.3s;

    &.active {
      transform: translateX(0%);
    }
  }

}</style>