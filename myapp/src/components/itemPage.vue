<template>
  <div class="item">
    <!-- 设置插槽 -->
    <slot />
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
.item {
  /* 高度410px */
  height: 5.125rem;
  border: 1px solid blue;

  /* 外边距20px */
  margin: 0.25rem;
  // background-color: rgba(0, 0, 0, 0.8);
}
</style>