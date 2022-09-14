<template>
  <section id="home-sction1" class="w-full h-[900px] relative">
    <div class="absolute absolute-x-center absolute-y-center z-[1] flex-xy-center">
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
    <img class="w-[475px] h-[476px] absolute bottom-0 right-0" :src="getAssetsFileURL('images/dream-of-macau_casino lady4 1.png')" alt="casino lady">
    <DotIndecator class="fixed right-0 bottom-1/2 z-[2]"/>
    <ArrowIndecator class="absolute bottom-[5%] left-1/2 translate-x-[-50%]"
      :indecate-to = "HomePageIndecator.SECTION2"
    />
  </section>
  <div class="divider-line-to-right"></div>
  <section id="home-sction2" class="flex-xy-center py-40 relative">
    <h1 class="title-primary">{{$t('homePage.section2.title')}}</h1>
    <img :src="getAssetsFileURL('images/welcome 1.png')" alt="welcome">
    <span class="w-[360px] text-center mt-20">{{$t('homePage.section2.description')}}</span>
    <ArrowIndecator class="absolute bottom-[5%] left-1/2 translate-x-[-50%]"
      :indecate-to = "HomePageIndecator.SECTION3"
    />
  </section>
  <div class="divider-line-to-left"></div>
  <section id="home-sction3" class="flex-xy-center py-48 relative">
    <div class="w-[960px]">
      <article class="w-full relative mb-20">
        <img class="absolute left-0 bottom-[-25%]" :src="getAssetsFileURL('images/amazing-games 1.png')" alt="amazing-game">
        <div class="h-[143px] w-[60%] ml-auto bg-gradient-1 rounded-[5px] flex-xy-center">
          <h1 class="title-tertiary text-center">{{$t('homePage.section3.title')}}</h1>
          <p class="w-1/2 description text-left">{{$t('homePage.section3.description')}}</p>
        </div>
      </article>
      <article class="w-full relative">
        <p class="title-secondary">Over <span class="text-[50px]">2,000+</span>Games</p>
        <div class="h-[143px] bg-gradient-1 rounded-[5px] flex justify-start items-center px-10">
          <p class="max-w-[355px] description mr-2">{{$t('homePage.section3.description1')}}</p>
          <p class="max-w-[355px] description">{{$t('homePage.section3.description2')}}</p>
        </div>
        <img class="absolute right-0 top-0" :src="getAssetsFileURL('images/caishen-a2 1.png')" alt="money-god">
      </article>
    </div>
    <ArrowIndecator class="absolute bottom-[5%] left-1/2 translate-x-[-50%]"
      :indecate-to = "HomePageIndecator.SECTION4"
    />
  </section>
  <div class="divider-line-to-right"></div>
  <section id="home-sction4" class="flex-xy-center p-20">
    <p class="title-secondary"><span class="text-[50px]">500,000+</span>Downloaded</p>
    <div class="w-[960px] relative mt-10">
      <div class="divider-line-blue"></div>
      <img class="absolute absolute-y-center right-0" :src="getAssetsFileURL('images/ia_100000469 1.png')" alt="game">
      <article class="w-1/2 py-10">
        <p class="description pb-5">{{$t('homePage.section4.description1')}}</p>
        <p class="description text-primary pb-10">{{$t('homePage.section4.acent')}}</p>
        <p class="description">{{$t('homePage.section4.description2')}}</p>
      </article>
      <div class="w-[58%]"><div class="divider-line-blue"></div></div>
      <article class="w-1/2 py-10">
        <h1 class="title-tertiary pb-5">{{$t('homePage.section4.title')}}</h1>
        <p class="description">{{$t('homePage.section4.description3')}}</p>
      </article>
      <div class="divider-line-blue"></div>
    </div>
  </section>
  <div class="divider-line-to-left"></div>
</template>
<script setup lang="ts">
import { HomePageIndecator } from '@/types/gloable'
import SystemCard from "@/components/card/SystemCard.vue"
import DotIndecator from "@/components/indecator/DotIndecator.vue";
import ArrowIndecator from "@/components/indecator/ArrowIndecator.vue"
import useUtil from '@/composable/util/useUtil'
const { getAssetsFileURL } = useUtil()

</script>
