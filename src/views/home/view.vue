<template>
  <div class="block text-center" m="t-4">
    <el-carousel trigger="click">
      <el-carousel-item v-for="item in arr" :key="item">
        <img :src="item" alt="" class="carousel-image" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<style lang="scss" scoped>
@import "./view.scss";
</style>
<script lang="ts" setup>
import { ref } from "vue";
let arr = ref([
  "https://www.nohon.cn/static/upload/image/20240702/1719909107223359.jpg",
  "https://www.nohon.cn/static/upload/image/20230814/1692001291647253.jpg",
]);
</script>
<style scoped>
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 100vh;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.carousel-image {
  width: 100vw;
}
</style>
