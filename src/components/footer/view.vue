<template>
  <div class="view flex">
    <div class="ul" v-for="item in arr">
      <div class="title">{{ item.title }}</div>
      <p v-for="items in item.child">{{ items.text }}</p>
    </div>
  </div>
  <div class="copyright mar_b">
    Copyright © 2018-2023 深圳市诺希实业有限公司 All Rights Reserved.
    <a href="http://beian.miit.gov.cn/" target="_blank">
      粤ICP备2023113811号-2</a
    >
  </div>
</template>
<style lang="scss" scoped>
@import "./view.scss";
</style>
<script setup lang="ts">
import { ref } from "vue";

let arr = ref([
  {
    title: "NOHON诺希",
    push: "/",
    child: [
      {
        text: "诺希简介",
        push: "/",
      },
      {
        text: "恭王府服饰秀新闻发布会",
        push: "/",
      },
      {
        text: "2023巴黎中法时装周",
        push: "/",
      },
      {
        text: "品牌快讯",
        push: "/",
      },
    ],
  },
  {
    title: "产品中心",
    push: "/",
    child: [
      {
        text: "诺希电池",
        push: "/",
      },
      {
        text: "充电全系列",
        push: "/",
      },
      {
        text: "品牌联名",
        push: "/",
      },
      {
        text: "车载系列",
        push: "/",
      },
      {
        text: "电竞系列",
        push: "/",
      },
      {
        text: "其它产品",
        push: "/",
      },
    ],
  },
  {
    title: "服务中心",
    push: "/",
    child: [
      {
        text: "在线反馈",
        push: "/",
      },
      {
        text: "联系我们",
        push: "/",
      },
      {
        text: "招商加盟",
        push: "/",
      },
    ],
  },
  {
    title: "安装教程",
    push: "/",
    child: [
      {
        text: "手机电池安装教程",
        push: "/",
      },
      {
        text: "iPad&平板电池安装教程",
        push: "/",
      },
    ],
  },
]);
</script>
