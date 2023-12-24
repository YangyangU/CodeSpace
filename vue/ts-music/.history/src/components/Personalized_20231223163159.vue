<template>
    <div>

    </div>
</template>

<script>
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