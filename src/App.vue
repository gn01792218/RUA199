<template>
  <div class="bg-black text-white">
    <TheHeader class="fixed" />
    <router-view />
    <TheFooter/>
  </div>
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<style>

</style>
