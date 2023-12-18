<template>
    <div class="body">
        <ul>
            <li v-for="(item, index) in lists" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['lists'],  //接受父组件传过来的值
    methods:{
        changeProps(){
            this.lists[0] = 'HTML';  //vue2 会报警告
        }
    }
}
</script>

<style scoped></style>