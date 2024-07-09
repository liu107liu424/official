<template>
  <div class="head" :hidden="show">
    <HeadView></HeadView>
  </div>
  <RouterView />
  <Footer></Footer>
</template>
<script lang="ts" setup>
import HeadView from "@/components/hendView/view.vue";
import Footer from "@/components/footer/view.vue";
import { ref } from "vue";
let show = ref(true);
let lastScrollTop = ref(0);

window.addEventListener("scroll", function () {
  let currentScrollTop =
    window.pageYOffset || document.documentElement.scrollTop;
  show.value = currentScrollTop > lastScrollTop.value ? true : false;
  lastScrollTop.value = currentScrollTop <= 0 ? 0 : currentScrollTop;
});
</script>
<style>
.head {
  position: fixed;
  opacity: 0.6;
  top: 0;
  z-index: 9;
  width: 100vw;
  transition: opacity 0.3s ease-out;
}
.head:hover {
  opacity: 1;
  transition: opacity 0.3s ease-out;
}
</style>
