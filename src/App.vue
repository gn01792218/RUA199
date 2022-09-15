<template>
  <div class="bg-black text-white">
    <TheHeader class="fixed" />
    <TheHeaderForMobile />
    <router-view />
    <TheFooter />
    <div class="fixed bottom-0 z-[2]">
      <TheMobilePanel />
    </div>
  </div>
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheHeaderForMobile from '@/components/TheHeaderForMobile.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheMobilePanel from '@/components/TheMobilePanel.vue'
</script>
