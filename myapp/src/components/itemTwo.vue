<template>
  <div>
    <h2>商品周销表</h2>
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
      data = await proxy.$axios({ url: "/two/data" });
    }
    // 加载完毕后进行数据的展示
    onMounted(() => {
      getData().then(() => {
        let mychart = proxy.$echarts.init(proxy.$refs.chartDom);
        mychart.setOption({
          legend: {
            data: ["服饰", "数码", "家电", "家居", "日化"],
            axisLine: {
              lineStyle: {
               color: "#000",
              },
            },
          },
          tooltip: {
            //提示框组件
            trigger: "axis", //触发类型。坐标轴触发
            axisPointer: {
              //坐标轴指示器配置项
              type: "cross", //指示器类型 十字准星指示器
              label: {
                //坐标轴指示器的文本标签
                backgroundColor: "#e6b600", //文本标签的背景颜色就是x轴y轴上的内容
              },
            },
          },
          grid: {
            //组件离容器的距离
            left: "1%",
            right: "4%",
            bottom: "3%",
            containLabel: true, //grid 区域是否包含坐标轴的刻度标签
          },
          xAxis: [
            {
              type: "category",
              boundaryGap: false,
              data: data.data.data.chartData.day,
              axisLine: {
                lineStyle: {
                  color: "#000",
                },
              },
            },
          ],
          yAxis: [
            {
              type: "value",
              axisLine: {
                lineStyle: {
                  color: "#000",
                },
              },
            },
          ],
          series: [
            {
              name: "服饰",
              type: "line",
              data: data.data.data.chartData.num.Chemicals,
              stack: "Total", //数据堆叠
              smooth: true, //折线图平滑效果 变成曲线图
              showSymbol: false, // 隐藏所有数据点
              areaStyle: {
                //设置填充区域的样式
                opacity: 0.8,
                color: new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgb(128, 255, 165)",
                  },
                  {
                    offset: 1,
                    color: "rgb(1, 191, 236)",
                  },
                ]),
              },
              lineStyle: {
                // 设置线段样式
                width: 0,
              },
              emphasis: {
                //设置高亮的图形样式和标签样式
                focus: "series", //只显示选中的内容高亮
              },
            },
            {
              name: "数码",
              type: "line",
              data: data.data.data.chartData.num.Clothes,
              stack: "Total", //数据堆叠
              smooth: true, //折线图平滑效果 变成曲线图
              showSymbol: false, // 隐藏所有数据点
              areaStyle: {
                opacity: 0.8,
                color: new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgb(0, 221, 255)",
                  },
                  {
                    offset: 1,
                    color: "rgb(77, 119, 255)",
                  },
                ]),
              },
              lineStyle: {
                // 设置线段样式
                width: 0,
              },
              emphasis: {
                //设置高亮的图形样式和标签样式
                focus: "series", //只显示选中的内容高亮
              },
            },
            {
              name: "家电",
              type: "line",
              data: data.data.data.chartData.num.Electrical,
              stack: "Total", //数据堆叠
              smooth: true, //折线图平滑效果 变成曲线图
              showSymbol: false, // 隐藏所有数据点
              areaStyle: {
                opacity: 0.8,
                color: new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgb(55, 162, 255)",
                  },
                  {
                    offset: 1,
                    color: "rgb(116, 21, 219)",
                  },
                ]),
              },
              lineStyle: {
                // 设置线段样式
                width: 0,
              },
              emphasis: {
                //设置高亮的图形样式和标签样式
                focus: "series", //只显示选中的内容高亮
              },
            },
            {
              name: "家居",
              type: "line",
              data: data.data.data.chartData.num.digit,
              stack: "Total", //数据堆叠
              smooth: true, //折线图平滑效果 变成曲线图
              showSymbol: false, // 隐藏所有数据点
              areaStyle: {
                opacity: 0.8,
                color: new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgb(255, 0, 135)",
                  },
                  {
                    offset: 1,
                    color: "rgb(135, 0, 157)",
                  },
                ]),
              },
              lineStyle: {
                // 设置线段样式
                width: 0,
              },
              emphasis: {
                //设置高亮的图形样式和标签样式
                focus: "series", //只显示选中的内容高亮
              },
            },
            {
              name: "日化",
              type: "line",
              data: data.data.data.chartData.num.gear,
              stack: "Total", //数据堆叠
              smooth: true, //折线图平滑效果 变成曲线图
              showSymbol: false, // 隐藏所有数据点
              areaStyle: {
                opacity: 0.8,
                color: new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgb(255, 191, 0)",
                  },
                  {
                    offset: 1,
                    color: "rgb(224, 62, 76)",
                  },
                ]),
              },
              lineStyle: {
                // 设置线段样式
                width: 0,
              },
              emphasis: {
                //设置高亮的图形样式和标签样式
                focus: "series", //只显示选中的内容高亮
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