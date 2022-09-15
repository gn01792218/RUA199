<template>
  <div class="bg-black text-white">
    <TheHeader class="fixed" />
    <TheHeaderForMobile/>
    <router-view />
    <TheFooter/>
    <div class="w-screen fixed top-0 h-screen flex flex-col justify-end">
      <TheMobilePanel/>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheHeaderForMobile from '@/components/TheHeaderForMobile.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheMobilePanel from '@/components/TheMobilePanel.vue'
</script>
