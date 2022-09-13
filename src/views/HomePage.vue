<template>
  <section id="home-sction1" class="w-full h-[900px] relative">
    <div class="absolute absolute-x-center absolute-y-center z-[1] flex flex-col justify-center items-center">
      <h1 class="title-primary">{{$t('homePage.section1.title')}}</h1>
      <div class="flex mt-10">
        <SystemCard 
          :system-card-obj="{
          bgPath:'images/Artboard 1 1.png',
          logoPath:'images/apple-logo-transparent copy 1.png',
          systemName:'iOS',
          description:`ผู้เล่นที่ใช้ระบบiOS สามารถโหลดแอปได้ง่ายๆ 
                        ฝากถอนเรวดเร็ว รองรับ iOS 11.0 ขึ้นไป`,
          primaryBtnText:$t('card.systemCard.IOS.primaryBtnText'),
          secondaryBtnText:$t('card.systemCard.IOS.secondaryBtnText'),
        }" />
        <SystemCard 
          :system-card-obj="{
          bgPath:'images/Artboard 1 2.png',
          logoPath:'images/Android-Logo-2014-2019 1.png',
          systemName:`Native
                    (Android)`,
          description:`ผู้เล่นที่ใช้ระบบแอนดรอยด์ 
                      สามารถโหลดแอปได้ง่ายๆ ฝากถอนรวดเร็ว 
                      รองรับ Android 5.1 ขึ้นไป`,
          primaryBtnText:$t('card.systemCard.Android.primaryBtnText'),
          secondaryBtnText:$t('card.systemCard.Android.secondaryBtnText'),
          slogan:$t('card.systemCard.Android.slogan')
        }" />
        <SystemCard 
          :system-card-obj="{
          bgPath:'images/Artboard 1 3.png',
          logoPath:'images/pwa 1.png',
          systemName:`Browser
                    Version`,
          description:`เล่นผ่านคอมพิวเตอร์ได้ไม่มีสะดุด 
                      สัมผัสกับกราฟิกที่น่าทึ่ง`,
          secondaryBtnText:$t('card.systemCard.PWA.secondaryBtnText'),
        }" />
      </div>
    </div>
    <img class="w-full h-full absolute top-0 left-0" :src="getAssetsFileURL('images/lobby-bg 1.png')" alt="背景圖">
    <img class="w-[475px] h-[476px] absolute bottom-0" :src="getAssetsFileURL('images/fortune-ox_4 1.png')"
      alt="fortune-ox">
    <img class="w-[475px] h-[476px] absolute bottom-0 right-0"
      :src="getAssetsFileURL('images/dream-of-macau_casino lady4 1.png')" alt="casino lady">
    <HomeIndecator class="fixed right-0 bottom-1/2"/>
  </section>
  <div class="divider-line-to-right"></div>
  <section id="home-sction2" class="h-[500px] bg-black text-white">
    
  </section>
  <div class="divider-line-to-left"></div>
  <section id="home-sction3" class="h-[1000px] bg-black text-white">
    
  </section>
  <div class="divider-line-to-right"></div>
  <section id="home-sction4" class="h-[1000px] bg-black text-white">
    
  </section>
  <div class="divider-line-to-left"></div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import SystemCard from "@/components/card/SystemCard.vue"
import HomeIndecator from "@/components/indecator/HomeIndecator.vue";
import useUtil from '@/composable/util/useUtil'
const { getAssetsFileURL } = useUtil()

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<style scoped>

</style>
