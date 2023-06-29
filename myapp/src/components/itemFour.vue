<template>
  <div>
    <h2>产品库存统计</h2>
    <div ref="chartDom" class="chart">容纳后期的图表</div>
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
      data = await proxy.$axios({ url: "/four/data" });
    }
    // 加载完毕后进行数据的展示
    onMounted(() => {
      getData().then(() => {
        let mychart = proxy.$echarts.init(proxy.$refs.chartDom);
        mychart.setOption({
          xAxis: {
            // 设置坐标轴上文字颜色
            axisLine: {
              lineStyle: {
               color: "#000",
              },
            },
            type: "category",
            data: data.data.data.chartData.day,
          },
          yAxis: {
            // 设置坐标轴上文字颜色
            axisLine: {
              lineStyle: {
                color: "#000",
              },
            },
            type: "value",
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              //设置鼠标选中样式为阴影
              type: "shadow",
            },
          },
          legend: {}, //图例
          grid: {
            //位置
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true, //设置包含坐标轴
          },
          series: [
            {
              name: "服饰",
              type: "bar",
              data: data.data.data.chartData.num.Chemicals,
              stack: "total",
              label: {
                //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。
                show: true,
              },
              emphasis: {
                //高亮的图形样式和标签样式。
                focus: "series", //聚焦当前高亮的数据所在的系列的所有图形。
              },
            },
            {
              name: "数码",
              type: "bar",
              data: data.data.data.chartData.num.Clothes,
              stack: "total",
              label: {
                //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。
                show: true,
              },
              emphasis: {
                //高亮的图形样式和标签样式。
                focus: "series", //聚焦当前高亮的数据所在的系列的所有图形。
              },
            },
            {
              name: "家电",
              type: "bar",
              data: data.data.data.chartData.num.Electrical,
              stack: "total",
              label: {
                //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。
                show: true,
              },
              emphasis: {
                //高亮的图形样式和标签样式。
                focus: "series", //聚焦当前高亮的数据所在的系列的所有图形。
              },
            },
            {
              name: "家居",
              type: "bar",
              data: data.data.data.chartData.num.digit,
              stack: "total",
              label: {
                //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。
                show: true,
              },
              emphasis: {
                //高亮的图形样式和标签样式。
                focus: "series", //聚焦当前高亮的数据所在的系列的所有图形。
              },
            },
            {
              name: "日化",
              type: "bar",
              data: data.data.data.chartData.num.gear,
              stack: "total",
              label: {
                //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。
                show: true,
              },
              emphasis: {
                //高亮的图形样式和标签样式。
                focus: "series", //聚焦当前高亮的数据所在的系列的所有图形。
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
  height: 4.5rem;
//   background-color: gray;
}
</style>