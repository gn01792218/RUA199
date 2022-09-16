<template>
    <section id="home-sction3" class="flex-xy-center py-20 md:px-11 lg:px-20 relative">
        <div class="max-w-[960px]">
            <article class="w-full lg:mt-36 mb-20 flex flex-col sm:flex-row items-center">
                <img class="w-[310px] translate-y-[10%] sm:w-[350px] md:w-[430px] lg:w-auto sm:translate-y-[-10%]"
                    :src="getAssetsFileURL('images/amazing-games 1.png')" alt="amazing-game">
                <div class="sm:h-[143px] sm:w-[600px] sm:ml-[-5%] bg-gradient-1 rounded-[5px] flex-xy-center py-6">
                    <div class="w-[50%] text-center sm:text-left">
                        <h1 class="title-tertiary">{{$t('homePage.section3.title')}}</h1>
                        <p class="description">{{$t('homePage.section3.description')}}</p>
                    </div>
                </div>
            </article>
            <article class="w-full relative">
                <p class="title-secondary hidden md:block">Over <span class="text-[50px]">2,000+</span>Games</p>
                <div class="flex bg-gradient-1 rounded-[5px] p-10 md:p-5 lg:pb-6 lg:px-10 md:h-[143px]">
                    <div class="flex flex-col justify-start items-center mt-10 md:mt-0 sm:flex-row md:pr-24 lg:pr-32">
                        <p class="w-full description mb-5 md:mb-0 sm:mr-2 sm:max-w-[355px]">{{$t('homePage.section3.description1')}}</p>
                        <p class="w-full description sm:max-w-[355px]">{{$t('homePage.section3.description2')}}</p>
                    </div>
                </div>
                <img class="absolute w-[125px] bottom-[80%] right-[50%] translate-x-[50%] sm:bottom-[70%]  md:w-auto md:right-[8%] md:bottom-[10%]"
                    :src="getAssetsFileURL('images/caishen-a2 1.png')" alt="money-god">
            </article>
        </div>
        <ArrowIndecator class="mt-5"
            :indecate-to="HomePageIndecator.SECTION4" />
    </section>
</template>
  
<script setup lang="ts">
import ArrowIndecator from '@/components/indecator/ArrowIndecator.vue'
import { HomePageIndecator } from '@/types/gloable'
import useUtil from '@/composable/util/useUtil'
const { getAssetsFileURL } = useUtil()
</script>