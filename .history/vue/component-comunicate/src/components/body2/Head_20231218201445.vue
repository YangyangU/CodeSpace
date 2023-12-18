<template>
    <div class="head">
        <input type="text" v-model="message">
        <button @click="submit">确认</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
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