<template>
    <div>
        <ul>
    <li v-for="personalized in personalizedMv" :key="personalized.id">
      <img :src="personalized.picUrl">
    </li>
  </ul>
    </div>
</template>

<script setup>
import { onMounted,toRefs } from 'vue';
import {usePersonalizedStore} from './store/personalized';

const {personalizedMv} = toRefs(usePersonalizedStore())
const {getPersonalized} = usePersonalizedStore()

onMounted(async ()=>{
  await getPersonalized()
})

</script>

<style scoped>

</style>