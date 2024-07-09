<template>
  <div class="block text-center" m="t-4">
    <el-carousel trigger="click" height="calc(100vw / 2.3)">
      <el-carousel-item v-for="item in arr" :key="item">
        <img :src="item" alt="" class="carousel-image" />
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="Recommend view">
    <h1 class="title">推荐产品 | Recommend</h1>
    <div class="flex Recommend_view">
      <div v-for="item in recommendArr" class="item pad">
        <img :src="item.url" alt="" class="item_img" />
        <p>{{ item.name }}</p>
        <p>{{ item.type }}</p>
      </div>
    </div>
  </div>
  <div class="Product view">
    <h1 class="title">产品中心 | Product center</h1>
    <div class="flex productArr_view">
      <div v-for="item in productArr" class="item">
        <img :src="item.url" alt="" class="item_img" />
        <div class="ul">
          <div class="li" v-for="items in item.list">
            <p>{{ items }}</p>
          </div>
        </div>
      </div>
    </div>
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
let recommendArr = ref([
  {
    url: "https://www.nohon.cn/static/upload/image/20230804/1691138194541108.png",
    name: "NX-P22充电宝",
    type: "NX-P22",
  },
  {
    url: "https://www.nohon.cn/static/upload/image/20230804/1691138194541108.png",
    name: "NX-P22充电宝",
    type: "NX-P22",
  },
  {
    url: "https://www.nohon.cn/static/upload/image/20230804/1691138194541108.png",
    name: "NX-P22充电宝",
    type: "NX-P22",
  },
  {
    url: "https://www.nohon.cn/static/upload/image/20230804/1691138194541108.png",
    name: "NX-P22充电宝",
    type: "NX-P22",
  },
]);
let productArr = ref([
  {
    url: "https://nohon.cn/template/default/images/47.jpg",
    list: ["电池系列", "手机电池", "手机电池", "手机电池", "手机电池"],
  },
  {
    url: "https://nohon.cn/template/default/images/47.jpg",
    list: ["手机电池", "手机电池", "手机电池", "手机电池", "手机电池"],
  },
  {
    url: "https://nohon.cn/template/default/images/47.jpg",
    list: ["手机电池", "手机电池", "手机电池", "手机电池", "手机电池"],
  },
  {
    url: "https://nohon.cn/template/default/images/47.jpg",
    list: ["手机电池", "手机电池", "手机电池", "手机电池", "手机电池"],
  },
  {
    url: "https://www.nohon.cn/template/default/images/47.jpg",
    list: ["手机电池", "手机电池", "手机电池", "手机电池", "手机电池"],
  },
  {
    url: "https://www.nohon.cn/template/default/images/47.jpg",
    list: ["手机电池", "手机电池", "手机电池", "手机电池", "手机电池"],
  },
]);
</script>
<style scoped>
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
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
