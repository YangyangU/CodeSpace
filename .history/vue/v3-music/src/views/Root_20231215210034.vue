<template>
    <!-- <div class="w-56 h-56 bg-green-500"></div> -->
  <!-- 原子性 -->
  <div class="w-screen h-screen flex item-stretch overflow-hidden">
    <div class="w-56 h-screen flex-shrink-0">
      <Menu/>
    </div>
    <div class="flex-1 flex flex-col">
      <div class="h-14">
        <Header/>
      </div>
      <div>
        <div class="flex-1 overflow-hidden">

        </div>
            <ElScrollbar>
              <div class="container max-auto">
                <Discover />
              </div>
            </ElScrollbar>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>