<template>
  <section id="home-sction1" class="w-full h-[900px] relative">
    <div class="absolute absolute-x-center absolute-y-center z-[1] flex-xy-center">
      <h1 class="title-primary drop-shadow-title">{{$t('homePage.section1.title')}}</h1>
      <TheHomePageSystemCardList/>
    </div>
    <img class="w-full h-full absolute top-0 left-0" :src="getAssetsFileURL('images/lobby-bg 1.png')" alt="背景圖">
    <img class="max-w-[475px] h-[476px] absolute bottom-0" :src="getAssetsFileURL('images/fortune-ox_4 1.png')"
      alt="fortune-ox">
    <img class="max-w-[475px] h-[476px] absolute bottom-0 right-0" :src="getAssetsFileURL('images/dream-of-macau_casino lady4 1.png')" alt="casino lady">
    <DotIndecator class="fixed right-0 bottom-1/2 z-[2]"/>
    <ArrowIndecator class="absolute bottom-[5%] left-1/2 translate-x-[-50%]"
      :indecate-to = "HomePageIndecator.SECTION2"
    />
  </section>
  <GradientDivider :to="Direction.RIGHT"/>
  <section id="home-sction2" class="flex-xy-center py-40 relative">
    <h1 class="title-tertiary w-[300px] text-center sm:w-auto sm:text-left drop-shadow-title sm:title-primary ">{{$t('homePage.section2.title')}}</h1>
    <img class="w-[330px] sm:w-auto" :src="getAssetsFileURL('images/welcome 1.png')" alt="welcome">
    <span class="w-[330px] sm:max-w-[360px] text-center mt-20">{{$t('homePage.section2.description')}}</span>
    <ArrowIndecator class="absolute bottom-[5%] left-1/2 translate-x-[-50%]"
      :indecate-to = "HomePageIndecator.SECTION3"
    />
  </section>
  <GradientDivider :to="Direction.LEFT"/>
  <section id="home-sction3" class="flex-xy-center py-48 relative">
    <div class="max-w-[960px]">
      <article class="w-full relative mb-20">
        <img class="absolute absolute-x-center w-[310px] top-[-120%] sm:w-auto sm:translate-x-[0px] sm:left-0 bottom-[-25%] z-[1]" :src="getAssetsFileURL('images/amazing-games 1.png')" alt="amazing-game">
        <div class="sm:h-[143px] sm:w-[60%] ml-auto bg-gradient-1 rounded-[5px] flex-xy-center py-6">
          <h1 class="title-tertiary text-center">{{$t('homePage.section3.title')}}</h1>
          <p class="w-1/2 description text-left">{{$t('homePage.section3.description')}}</p>
        </div>
      </article>
      <article class="w-full relative">
        <p class="title-secondary hidden sm:block">Over <span class="text-[50px]">2,000+</span>Games</p>
        <div class="sm:h-[143px] bg-gradient-1 rounded-[5px] pt-20 pb-6 px-10 sm:pt-6">
          <div class="flex justify-start items-center sm:pr-32">
            <p class="max-w-[355px] description mr-2">{{$t('homePage.section3.description1')}}</p>
            <p class="max-w-[355px] description">{{$t('homePage.section3.description2')}}</p>
          </div>
        </div>
        <img class="absolute w-[125px] bottom-[85%] right-[50%] translate-x-[50%] sm:w-auto sm:right-[8%] sm:bottom-[10%]" :src="getAssetsFileURL('images/caishen-a2 1.png')" alt="money-god">
      </article>
    </div>
    <ArrowIndecator class="absolute bottom-[5%] left-1/2 translate-x-[-50%]"
      :indecate-to = "HomePageIndecator.SECTION4"
    />
  </section>
  <GradientDivider :to="Direction.RIGHT"/>
  <section id="home-sction4" class="flex-xy-center p-10 sm:p-20">
    <div class="max-w-[960px] relative mt-10">
      <p class="title-tertiary mb-5 sm:title-secondary w-[167px] sm:w-auto"><span class="block text-[35px] sm:inline sm:text-[50px]">500,000+</span>Downloaded</p>
      <div class="divider-line-blue"></div>
      <img class="absolute w-[200px] top-[-3%] right-[-20%] sm:w-auto sm:top-[25%] sm:right-0" :src="getAssetsFileURL('images/ia_100000469 1.png')" alt="game">
      <article class="w-full sm:w-1/2 py-10">
        <p class="description pb-5">{{$t('homePage.section4.description1')}}</p>
        <p class="description text-primary pb-10">{{$t('homePage.section4.acent')}}</p>
        <p class="description">{{$t('homePage.section4.description2')}}</p>
      </article>
      <div class="w-full sm:w-[58%]"><div class="divider-line-blue"></div></div>
      <article class="w-full sm:w-1/2 py-10">
        <h1 class="title-tertiary pb-5">{{$t('homePage.section4.title')}}</h1>
        <p class="description">{{$t('homePage.section4.description3')}}</p>
      </article>
      <div class="divider-line-blue hidden sm:block"></div>
    </div>
  </section>
  <GradientDivider :to="Direction.LEFT"/>
</template>
<script setup lang="ts">
import { HomePageIndecator, Direction } from '@/types/gloable'
import TheHomePageSystemCardList from '@/components/TheHomePageSystemCardList.vue'
import DotIndecator from "@/components/indecator/DotIndecator.vue";
import ArrowIndecator from "@/components/indecator/ArrowIndecator.vue"
import GradientDivider from '@/components/GradientDivider.vue'
import useUtil from '@/composable/util/useUtil'
const { getAssetsFileURL } = useUtil()

</script>
