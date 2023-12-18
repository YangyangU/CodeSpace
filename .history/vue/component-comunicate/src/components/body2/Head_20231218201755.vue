<template>
    <div class="head">
        <input type="text" v-model="message">
        <button @click="submit">确认</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message:''
        }
    },
    methods: {
        submit() {
            if (this.message) {
                // this.lists.push(this.message)
                // 将message传给父组件使用
                this.$emit('add',this.message)//接收两个参数，事件名称，抛出来的参数
                this.message = ''
            }
        }
    }
}
</script>

<style scoped></style>