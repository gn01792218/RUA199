<template>
    <section id="home-sction1" class="w-full relative md:min-h-[900px] flex flex-col justify-center">
        <div class="flex-xy-center relative z-[1]">
            <h1 class="w-[300px] md:mt-40 lg:mt-0 text-center title-tertiary drop-shadow-title sm:w-auto sm:title-primary">{{$t('homePage.section1.title')}}</h1>
            <TheHomePageSystemCardList/>
        </div>
        <img class="hidden sm:block w-full h-full absolute top-0 left-0" :src="getAssetsFileURL('images/lobby-bg 1.png')" alt="PC背景圖">
        <img class="w-full h-full absolute top-0 left-0 sm:hidden" :src="getAssetsFileURL('images/lobby-mbg 3.png')" alt="手機背景圖">
        <img class="hidden sm:block max-w-[475px] absolute bottom-0" :src="getAssetsFileURL('images/fortune-ox_4 1.png')"
            alt="fortune-ox">
        <img class="hidden sm:block max-w-[475px] absolute bottom-0 right-0"
            :src="getAssetsFileURL('images/dream-of-macau_casino lady4 1.png')" alt="casino lady">
        <div class="w-full relative my-10">
            <ArrowIndecator class="absolute absolute-x-center absolute-y-center"
            :indecate-to="HomePageIndecator.SECTION2"/>
        </div>
    </section>
</template>
    
<script setup lang="ts">
import TheHomePageSystemCardList from '@/components/homePage/TheHomePageSystemCardList.vue'
import ArrowIndecator from '@/components/indecator/ArrowIndecator.vue'
import { HomePageIndecator } from '@/types/gloable'
import useUtil from '@/composable/util/useUtil'
const { getAssetsFileURL } = useUtil()
</script>