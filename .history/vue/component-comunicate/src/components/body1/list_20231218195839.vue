<template>
    <div class="body">
        <ul>
            <li v-for="(item, index) in lists" :key="index">{{ item }}</li>
        </ul>

        <button @click="changeProps">修改 props</button>
    </div>
</template>

<script>
export default {
    props:['lists']  //接受父组件传过来的值
    // data(){
    //     return {
    //         lists: ['html', 'css']
    //     }
    // }
}
</script>

<style scoped></style>