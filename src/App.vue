<template>
  <div class="bg-black text-white" ref="app" @touchmove.prevent @scroll.prevent>
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
import useHeader from '@/composable/header/useHeader'
import { onMounted,computed,watch } from 'vue'
// import { useI18n } from 'vue-i18n'
// const { t } = useI18n()
// const test = computed(()=>t('card.systemCard.Android.description3'))
// watch(test,()=>{
//   console.log(test.value)
// })
const { registryScroll } = useHeader()
onMounted(() => {
  registryScroll()
})
</script>
