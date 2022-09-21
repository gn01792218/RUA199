<template>
    <section id="home-sction1" class="home-scetion1-wrap">
        <div class="home-section1-container">
            <h1 class="home-section1-title">{{$t('homePage.section1.title')}}</h1>
            <TheHomePageSystemCardList class="sm:pt-14"/>
        </div>
        <img class="home-section1-bg pc-bg" :src="getAssetsFileURL('images/lobby-bg 1.png')" alt="PC背景圖">
        <img class="home-section1-bg mobile-bg" :src="getAssetsFileURL('images/lobby-mbg 3.png')" alt="手機背景圖">
        <img class="home-ox" :src="getAssetsFileURL('images/fortune-ox_4 1.png')"
            alt="fortune-ox">
        <img class="home-lady"
            :src="getAssetsFileURL('images/dream-of-macau_casino lady4 1.png')" alt="casino lady">
        <div class="home-section1-arror-wrap">
            <ArrowIndecator class="home-section1-arror"
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