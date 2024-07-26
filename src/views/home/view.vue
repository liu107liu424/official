<template>
  <div class="block text-center" m="t-4">
    <el-carousel trigger="click" height="calc(100vw / 2.3)">
      <el-carousel-item v-for="item in arr" :key="item">
        <img :src="item.url" alt="" class="carousel-image" />
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="Recommend view">
    <h1 class="title">推荐产品 | Recommend</h1>
    <div class="flex Recommend_view">
      <div
        v-for="item in recommendArr"
        class="item pad"
        @click="goodsInfo(item.goodsId)"
      >
        <img :src="item.coverImg" alt="" class="item_img" />
        <p>{{ item.goodsName }}</p>
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
import Api from "@/Api/api";
import { useRouter } from "vue-router";

const router = useRouter();
let arr = ref([{ url: "", goodsId: "" }]);
let recommendArr = ref([
  {
    coverImg: "",
    goodsName: "",
    goodsId: "",
    type: "",
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
maxImg();
getGoods();
function maxImg() {
  Api.maxImg().then((res: any) => {
    arr.value = res.data;
  });
}
function getGoods() {
  const obj = { size: 4, page: 0 };
  Api.getGoods(obj).then((res) => (recommendArr.value = res.data));
  console.log(recommendArr.value);
}
function goodsInfo(val: string) {
  router.push({ path: "/goodsInfo", query: { id: val } });
}
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
