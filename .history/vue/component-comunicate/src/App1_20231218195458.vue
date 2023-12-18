<template>
  <div>
    <div class="head">
      <input type="text" v-model="message">
      <button @click="submit">确认</button>
    </div>
    <!-- <List :lists="lists"/>   将lists传给子组件--> 
    <List :lists="lists"/>
    <!-- 想单独成为组件 -->
    <!-- <div class="body">
        <ul>
          <li v-for="(item,index) in lists" :key="index">{{ item }}</li>
        </ul>
      </div> -->
  </div>
</template>
  
<script>
import List from "@/components/body1/List.vue";
export default {
  components:{
    List
  },
  data() {
    return {
      // lists: ['html', 'css'], //数据源在父组件 v-bind绑定
      message: ''
    }
  },
  methods: {
    submit() {
      if (this.message) {
        this.lists.push(this.message)
        this.message = ''
      }
    }
  }
}
</script>
  
<style scoped></style>
  