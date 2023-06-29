<template>
  <div>
    <h2>商品类别表</h2>
    <div ref="chartDom" class="chart">容纳后期的图表</div>
  </div>
</template>
<script>
import { getCurrentInstance, onMounted, reactive } from "vue";
export default {
  setup() {
    const { proxy } = getCurrentInstance();
    // 请求数据的函数
    async function getData() {
      data = await proxy.$axios({ url: "/one/data" });
    }
    // 对接受的数据进行处理
    let data = reactive({}); //总体数据
    let xdata = reactive([]); //X轴数据
    let ydata = reactive([]); //Y轴数据
    // 数据处理函数
    function setData() {
      xdata = data.data.data.chartData.map((v) => v.title);
      ydata = data.data.data.chartData.map((v) => v.num);
      console.log("x", xdata);
      console.log("y", ydata);
    }
    onMounted(() => {
      getData().then(() => {
        setData();
        let mychart = proxy.$echarts.init(proxy.$refs.chartDom);
        mychart.setOption({
          xAxis: {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#000",
              },
            },
          },
          yAxis: {
            type: "category",
            data: xdata,
            axisLine: {
              lineStyle: {
                color: "#000",
              },
            },
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          //   配置图标中的文字
          grid: {
            top:"3%",
            left: "1%",
            right: "5%",
            bottom: "3%",
            containLabel: true, //包含坐标轴中的文字
          },
          series: [
            {
              type: "bar",
              data: ydata,
              //  设置柱状图的区域的样式
                itemStyle: {
                  normal: {
                    barBorderRadius: [0, 20, 20, 0],
                    color: new proxy.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                      { offset: 0, color: "#005eaa" },
                      { offset: 0.5, color: "#339ca8" },
                      { offset: 1, color: "#cda819" },
                    ]),
                  },
                },
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
  height: 4.3rem;
  //   background-color: gray;
}
</style>