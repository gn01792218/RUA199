<template>
  <div class="bg-black text-white">
    <TheHeader class="fixed" />
    <TheHeaderForMobile />
    <router-view />
    <TheFooter />
    <TheMobilePanel class="fixed top-0" />
  </div>
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheHeaderForMobile from '@/components/TheHeaderForMobile.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheMobilePanel from '@/components/TheMobilePanel.vue'
</script>
