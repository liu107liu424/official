<template>
  <div class="view back_blue flex">
    <div class="logo">N</div>
    <div class="title flex">
      <div
        v-for="(item, index) in arr"
        class="li"
        :class="sele == index ? 'sele' : ''"
        @click="skip(item.push, index)"
      >
        <div class="item_title">
          {{ item.title }}
        </div>
        <div class="item_block">
          <p>{{ item.title }}</p>
        </div>
      </div>
    </div>
    <div class="icon-dianpu"></div>
  </div>
</template>
<style lang="scss" scoped>
@import "./view.scss";
</style>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
let sele = ref(0);
function skip(val: string, index: number) {
  sele.value = index;
  router.push(val);
}

let arr = ref([
  {
    title: "首页",
    push: "/Home",
  },
  {
    title: "NOHON诺希",
    push: "/news",
    text: "探索NOHON诺希，共同开启精彩的在线之旅",
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
    push: "/product",
    text: "探索NOHON诺希，共同开启精彩的在线之旅",
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
    push: "/serve",
    text: "探索NOHON诺希，共同开启精彩的在线之旅",
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
    text: "探索NOHON诺希，共同开启精彩的在线之旅",
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
