<template >
  <div>
    <header>
      <h1>Echarts的使用</h1>
    </header>
    <!-- 容器部分 -->
    <section class="container">
      <!-- 左容器 -->
      <section class="itemLeft">
        <itemPage><ItemOne /></itemPage>
        <itemPage><ItemTwo /></itemPage>
      </section>
      <!-- 中间容器 -->
      <section class="itemCenter">
        <MapPage/>
      </section>
      <!-- 右容器 -->
      <section class="itemRight">
        <itemPage><ItemThree /></itemPage>
        <itemPage><ItemFour /></itemPage>
      </section>
    </section>
  </div>
</template>
<script>
// 引入插槽组件
import ItemPage from "../components/itemPage.vue";
import ItemOne from "../components/itemOne.vue";
import ItemTwo from "../components/itemTwo.vue";
import ItemThree from "../components/itemThree.vue";
import ItemFour from "../components/itemFour.vue";
import MapPage from "../components/mapPage.vue";
export default {
  components: {
    ItemPage,
    ItemOne,
    ItemTwo,
    ItemThree,
    ItemFour,
    MapPage
  },
  setup() {
  }
};
</script>
<style lang="less" scoped>
// 头部样式
header {
  height: 1rem;
  width: 100%;
  // 设置一个颜色
  background-color: rgba(0, 0, 255, 0.2);
  // 标题文字样式
  h1 {
    font-size: 0.375rem;
    color: #000;
    text-align: center;
    line-height: 1rem;
  }
}
// 容器样式
.container {
  min-width: 1200px;
  max-width: 2048px;
  margin: 0 auto;
  padding: 0.125rem 0.125rem 0;
  height: 500px;
  display: flex;
  .itemLeft,
  .itemRight {
    flex: 3;
  }
  .itemCenter {
    flex: 5;
    height: 10.5rem;
    border: 1px solid blue;
    padding: 0.125rem;
    margin: 0.25rem;
  }
}
</style>