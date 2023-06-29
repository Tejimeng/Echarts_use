<template>
  <div>
    <h2>商品占比表</h2>
    <div class="chart" ref="chartDom">容纳后期的图表</div>
  </div>
</template>
<script>
import { getCurrentInstance, onMounted, reactive } from "vue";
export default {
  setup() {
    const { proxy } = getCurrentInstance();
    let data = reactive({});
    // 请求数据的函数
    async function getData() {
      data = await proxy.$axios({ url: "/three/data" });
    }
    // 加载完毕后进行数据的展示
    onMounted(() => {
      getData().then(() => {
        let mychart = proxy.$echarts.init(proxy.$refs.chartDom);
        mychart.setOption({
          tooltip: {
            show: true,
          },
          legend: {
            top: "bottom",
          },
          series: [
            {
              type: "pie",
              radius: [10, 100],
              center: ["50%", "45%"],
              roseType: "area",
              itemStyle: {
                borderRadius: 10,
              },
              data: data.data.data.chartData,
            },
          ],
        });
        // 动态修改图表的大小
        window.onresize = function () {
          mychart.resize();
        };
      });
    });
  },
};
</script>
<style lang="less" scoped>
h2 {
  height: 0.6rem;
  color: #000;
  line-height: 0.6rem;
  text-align: center;
  font-size: 0.25rem;
}
.chart {
  height: 4.5rem;
  // background-color: gray;
}
</style>