<template>
  <div id="EChart" style="width: 300px; height: 300px;"></div>
</template>

<script setup>
import { onMounted } from "vue";
onMounted(()=>{
  getRenderer()
});

const getRenderer=()=> {
      console.log(this.$echarts);
      // 基于准备好的dom，初始化echarts实例
      let EChart = this.$echarts.init(document.getElementById("EChart"));
      // 配置参数
      let config = {
        title: { text: "悲伤日记" },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      };
      // 设置参数
    EChart.setOption(config);
}
</script>

<style lang="scss" scoped>

</style>