<template>
  123
  <div v-for="item in infoImg">
    <img :src="item" alt="" />
  </div>
  456
</template>
<style lang="scss" scoped>
@import "./view.scss";
</style>
<script setup lang="ts">
import { ref } from "vue";
import Api from "@/Api/api";
import { useRoute } from "vue-router";
const route = useRoute();

let id = route.query.id as string;
let infoImg = ref([
  "https://nohon.cn/static/upload/image/20230919/1695088282269323.jpg",
]);
goodsInfo();
function goodsInfo() {
  Api.goodsInfo(id).then((res) => {
    console.log(typeof infoImg.value);
    infoImg.value = JSON.parse(res.data[0].infoimg);
    console.log(typeof infoImg.value);
  });
}
</script>
