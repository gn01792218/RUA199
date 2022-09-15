<template>
  <div class="bg-black text-white">
    <TheHeader class="fixed" />
    <TheHeaderForMobile/>
    <router-view />
    <TheFooter/>
    <div class="w-screen fixed top-0 h-screen flex flex-col justify-end">
      <TheFooterPanel/>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheHeaderForMobile from '@/components/TheHeaderForMobile.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheFooterPanel from '@/components/TheFooterPanel.vue'
</script>
