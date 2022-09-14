<template>
    <section id="home-sction2" class="flex-xy-center py-40 relative">
        <h1 class="title-tertiary w-[300px] text-center sm:w-auto sm:text-left drop-shadow-title sm:title-primary ">
            {{$t('homePage.section2.title')}}</h1>
        <img class="w-[330px] sm:w-auto" :src="getAssetsFileURL('images/welcome 1.png')" alt="welcome">
        <span class="w-[330px] sm:max-w-[360px] text-center mt-20">{{$t('homePage.section2.description')}}</span>
        <ArrowIndecator class="absolute bottom-[5%] left-1/2 translate-x-[-50%]"
            :indecate-to="HomePageIndecator.SECTION3" />
    </section>
</template>
    
<script setup lang="ts">
import { HomePageIndecator } from '@/types/gloable'
import useUtil from '@/composable/util/useUtil'
const { getAssetsFileURL } = useUtil()
</script>