<template>
  <div class="view back_blue flex">
    <div class="logo">N</div>
    <div class="title flex">
      <div class="li" @click="skip('/Home')">首页</div>
      <div class="li" @click="skip('/news')">NOHON诺希</div>
      <div class="li" @click="skip('/product')">产品中心</div>
      <div class="li" @click="skip('/news')">安装教程</div>
      <div class="li" @click="skip('/serve')">服务中心</div>
    </div>
    <div class="icon-dianpu"></div>
  </div>
</template>
<style lang="scss" scoped>
@import "./view.scss";
</style>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
function skip(val: string) {
  router.push(val);
}
</script>
