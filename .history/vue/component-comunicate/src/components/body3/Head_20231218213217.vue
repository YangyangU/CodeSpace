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
            message: ''
        }
    },
    methods: {
        submit() {
            //把数据放进store
            
        }
    }
}
</script>

<style scoped></style>