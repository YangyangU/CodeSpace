<template>
    <div class="body">
        <ul>
            <li v-for="(item, index) in lists" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        msg:{
            type: String,
            default: "",
        }
    },
    data() {
        return {
            lists: ['徐阳阳是大帅哥', '江雅欣是大美女'],
        }
    },

    watch:{
        msg(newVal){
            this.lists.push(newVal);
        }
    }

}
</script>

<style scoped></style>