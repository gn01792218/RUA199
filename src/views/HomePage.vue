<template>
  <section class="w-full h-[900px]">
    <img class="w-full h-full" :src="getAssetsFileURL('images/lobby-bg 1.png')" alt="背景圖">
  </section>
  <section>
    <img class="w-full" :src="getAssetsFileURL('images/lobby-bg 1.png')" alt="背景圖">
  </section>
  <section></section>
  <section></section>
</template>
<script setup lang="ts">
import { ref } from "vue";

import useUtil from '@/composable/util/useUtil' 
const { getAssetsFileURL } = useUtil()

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<style scoped></style>
