<template>
  <div class="bg-black text-white">
    <TheHeader class="fixed" />
    <TheHeaderForMobile/>
    <router-view />
    <TheFooter/>
  </div>
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheHeaderForMobile from '@/components/TheHeaderForMobile.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>
