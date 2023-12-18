<template>
    <div>
        <!-- <div class="head">
        <input type="text" v-model="message">
        <button @click="submit">确认</button>
      </div> -->
        <!-- 想单独成为组件 -->
        <Head @add=""/>
        <div class="body">
            <ul>
                <li v-for="(item, index) in lists" :key="index">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>
  
<script>
import Head from '@/components/body2/Head.vue';
export default {
    components:{
        Head
    },
    // data() {
    //     return {
    //         lists: ['html', 'css'],
    //         message: ''
    //     }
    // },
    // methods: {
    //     submit() {
    //         if (this.message) {
    //             this.lists.push(this.message)
    //             this.message = ''
    //         }
    //     }
    // }
}
</script>
  
<style scoped></style>
  