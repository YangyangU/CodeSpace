<template>
    <div>
        <!-- <div class="head">
        <input type="text" v-model="message">
        <button @click="submit">确认</button>
      </div> -->
        <!-- 想单独成为组件 -->
        <Head @add="handle"/> <!-- 订阅 -->
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
    data() {
        return {
            lists: ['徐阳阳是大帅哥', '江雅欣是大美女'],
            // message: ''
        }
    },
    // methods: {
    //     submit() {
    //         if (this.message) {
    //             this.lists.push(this.message)
    //             this.message = ''
    //         }
    //     }
    // }
    methods:{
        handle(val){
            this.lists.push(val)
            console.log(val);
        }
    }
}
</script>
  
<style scoped></style>
  