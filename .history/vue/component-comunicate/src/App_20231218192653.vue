<template>
  <div>
    <div class="head">
      <input type="text" v-model="message">
      <button @click="submit">确认</button>
    </div>
    <div class="body">
      <ul>
        <li>html</li>
        <li>css</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        list:['html', 'css'],
      }
    },
    methods:{

    }
  }
</script>

<style scoped>

</style>
