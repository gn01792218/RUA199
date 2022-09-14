<template>
    <div>
        <a class="w-[20px] h-[11px] block cursor-pointer" v-if="indecateTo === HomePageIndecator.SECTION1" :href="HomePageIndecator.SECTION1">
            <img class="w-full" :src="getAssetsFileURL('images/Polygon 1.png')" alt="arrow">
        </a>
        <a class="w-[20px] h-[11px] block cursor-pointer" v-if="indecateTo === HomePageIndecator.SECTION2" :href="HomePageIndecator.SECTION2">
            <img class="w-full" :src="getAssetsFileURL('images/Polygon 1.png')" alt="arrow">
        </a>
        <a class="w-[20px] h-[11px] block cursor-pointer" v-if="indecateTo === HomePageIndecator.SECTION3" :href="HomePageIndecator.SECTION3">
            <img class="w-full" :src="getAssetsFileURL('images/Polygon 1.png')" alt="arrow">
        </a>
        <a class="w-[20px] h-[11px] block cursor-pointer" v-if="indecateTo === HomePageIndecator.SECTION4" :href="HomePageIndecator.SECTION4">
            <img class="w-full" :src="getAssetsFileURL('images/Polygon 1.png')" alt="arrow">
        </a>
    </div>
        
</template>
  
<script setup lang="ts">
import { HomePageIndecator } from '@/types/gloable'
import useutil from '@/composable/util/useUtil';
const { getAssetsFileURL } = useutil()
defineProps<{ indecateTo: HomePageIndecator }>();
</script>