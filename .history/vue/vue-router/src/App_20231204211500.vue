<template>
  <nav>
    <!-- <span>首页</span>
    <span>|</span>
    <span>关于</span> -->
    <router-link to="/home">home</router-link>|
    <router-link>|</router-link>
    <router-link to="/about">about</router-link>
  </nav>

  <!-- vue和vue-router配合 tme里面的内容相当于搬到这里面展示 -->

  <router-view>


  </router-view>
</template>

<style>
  #app{
    text-align: center;
    font-size: 40px;
  }
</style>
