<template>
  <div>
    <div class="head">
      <input type="text" v-model="message">
      <button @click="submit">确认</button>
    </div>
    <List :lists="lists"/>   <!-- 将lists传给子组件--> 
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
      lists: ['徐阳阳是大帅哥', '江雅欣是大美女'], //数据源在父组件 v-bind绑定
      message: ''
    }
  },
  watch:{
    lists(newVal){
      console.log(newVal);
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
  