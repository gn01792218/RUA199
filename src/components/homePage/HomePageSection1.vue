<template>
    <section id="home-sction1" class="w-full h-[900px] relative">
        <div class="absolute absolute-x-center absolute-y-center z-[1] flex-xy-center">
            <h1 class="title-primary drop-shadow-title">{{$t('homePage.section1.title')}}</h1>
            <TheHomePageSystemCardList />
        </div>
        <img class="w-full h-full absolute top-0 left-0" :src="getAssetsFileURL('images/lobby-bg 1.png')" alt="背景圖">
        <img class="max-w-[475px] h-[476px] absolute bottom-0" :src="getAssetsFileURL('images/fortune-ox_4 1.png')"
            alt="fortune-ox">
        <img class="max-w-[475px] h-[476px] absolute bottom-0 right-0"
            :src="getAssetsFileURL('images/dream-of-macau_casino lady4 1.png')" alt="casino lady">
        <ArrowIndecator class="absolute bottom-[5%] left-1/2 translate-x-[-50%]"
            :indecate-to="HomePageIndecator.SECTION2" />
    </section>
</template>
    
<script setup lang="ts">
import TheHomePageSystemCardList from '@/components/TheHomePageSystemCardList.vue' //可以拿掉
import { HomePageIndecator } from '@/types/gloable'
import useUtil from '@/composable/util/useUtil'
const { getAssetsFileURL } = useUtil()
</script>