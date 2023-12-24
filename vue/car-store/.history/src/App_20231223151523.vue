<template>
  <div>
    <RouterLink/>
  </div>
</template>
<router-view/>
<script>
import { RouterLink } from 'vue-router';

  export default {
    components: { RouterLink }
}
</script>

<style lang="less" scoped>

</style>
