<template>
    <section id="home-sction3" class="flex-xy-center py-48 relative">
        <div class="max-w-[960px]">
            <article class="w-full relative mb-20">
                <img class="absolute absolute-x-center w-[310px] top-[-120%] sm:w-auto sm:translate-x-[0px] sm:left-0 bottom-[-25%] z-[1]"
                    :src="getAssetsFileURL('images/amazing-games 1.png')" alt="amazing-game">
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
                <img class="absolute w-[125px] bottom-[85%] right-[50%] translate-x-[50%] sm:w-auto sm:right-[8%] sm:bottom-[10%]"
                    :src="getAssetsFileURL('images/caishen-a2 1.png')" alt="money-god">
            </article>
        </div>
        <ArrowIndecator class="absolute bottom-[5%] left-1/2 translate-x-[-50%]"
            :indecate-to="HomePageIndecator.SECTION4" />
    </section>
</template>
  
<script setup lang="ts">
    import ArrowIndecator from '@/components/indecator/ArrowIndecator.vue'
import { HomePageIndecator } from '@/types/gloable'
import useUtil from '@/composable/util/useUtil'
const { getAssetsFileURL } = useUtil()
</script>