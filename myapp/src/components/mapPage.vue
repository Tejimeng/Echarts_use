<template >
  <div ref="map" class="map">map</div>
</template>
<script>
import { getCurrentInstance, onMounted } from "vue";
import mapData from "../../public/map/china";
export default {
  setup() {
    const { proxy } = getCurrentInstance();
    onMounted(() => {
      proxy.$echarts.registerMap("china", mapData);
      let chart = proxy.$echarts.init(proxy.$refs.map);
      chart.setOption({
        // 设置地图摆放的位置
        layoutCenter: ["50%", "60%"], //位置
        layoutSize: "100%", //大小
        title: {
          text: "全国城市销售量",
          left: "40%",
          textStyle: {
            color: "#000",
            fontSize: 20,
            textShadowBlur: 10, //文字本身的阴影长度。
            // textShadowColor: "#33ffff",
          },
        },
        geo: {
          map: "china",
          roam: true, //是否开启鼠标缩放和平移漫游
          zoom: 1, //当前视角的缩放比例
          lable: {
            show: true,
            color: "#ff6600",
            fontSize: 10,
          },
          itemStyle: {
            areaColor: "rgba(0,0,0, 0.8)", //地图区域的颜色。
            borderColor: "#fff", //图形的描边颜色。
            //   shadowColor: "rgba(255,255,255, 0.2)",
            shadowBlur: 30, //图形阴影的模糊大小
            //  选中后的地图样式
            emphasis: {
              //高亮状态下的多边形和标签样式。
              focus: "self", //在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果self'self' 只聚焦（不淡出）当前高亮的数据的图形。
              areaColor: "rgba(255,255,255, 0.8)",
            },
          },
        },
        series: [
          {
            type: "scatter", //类型散点图
            itemStyle: {
              color: "red",
            },
            name: "所在城市销售额",
            coordinateSystem: "geo", //该系列使用的坐标系 geo使用地理坐标系
            data: [
              { name: "北京", value: [116.46, 39.92, 4367] },
              { name: "上海", value: [121.48, 31.22, 8675] },
              { name: "深圳", value: [114.07, 22.62, 2461] },
              { name: "广州", value: [113.23, 23.16, 187] },
              { name: "西安", value: [108.45, 34, 3421] },
            ],
          },
        ],
        tooltip: {
          trigger: "item",
        },
        visualMap: {
          type: "continuous", // 连续型
          min: 100, // 值域最小值，必须参数
          max: 5000, // 值域最大值，必须参数
          calculable: true, // 是否启用滑动空间
          inRange: {
            color: ["#50a3ba", "#eac736", "#d94e5d"], // 指定数值从低到高时的颜色变化,
          },
          textStyle: {
            color: "#000", // 值域控件的文本颜色
          },
          text: ["高", "低"],
        },
      });
    });
  },
};
</script>
<style lang="less">
.map {
  width: 100%;
  height: 100%;
}
</style>