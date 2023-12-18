<template>
  <div>
    <div class="head">
      <input type="text" v-model="message">
      <button @click="submit">确认</button>
    </div>
    <div class="body">
      <ul>
        <li v-for="item in lists">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        list:['html', 'css'],
        message:''
      }
    },
    methods:{
      submit(){
        this.lists.push(this.message)
      }
    }
  }
</script>

<style scoped>

</style>
