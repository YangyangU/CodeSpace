<template>
    <div>
    
    </div>
  </template>
  
  <script>
    export default {
      data(){
        return {
          lists:['徐阳阳是大帅哥', '江雅欣是大美女'],
          message:''
        }
      },
      methods:{
        submit(){
          if (this.message) {
            this.lists.push(this.message)
            this.message = ''
          }
        }
      }
    }
  </script>
  
  <style scoped>
  
  </style>
  