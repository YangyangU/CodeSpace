<template>
    <div>
        {{ count }}
        {{ nickname }}
    </div>
</template>

<script setup>
import {ref,watch} from 'vue'
const count = ref(0)
const nickname = ref('张三')

</script>
