<template>
    <div class="flex flex-col">
        <a class="indecate" :class="[{active : current === HomePageIndecator.SECTION1}]" @click="switchIndecator(HomePageIndecator.SECTION1)" href="#home-sction1"></a>
        <a class="indecate" :class="[{active : current === HomePageIndecator.SECTION2}]" @click="switchIndecator(HomePageIndecator.SECTION2)" href="#home-sction2"></a>
        <a class="indecate" :class="[{active : current === HomePageIndecator.SECTION3}]" @click="switchIndecator(HomePageIndecator.SECTION3)" href="#home-sction3"></a>
        <a class="indecate" :class="[{active : current === HomePageIndecator.SECTION4}]" @click="switchIndecator(HomePageIndecator.SECTION4)" href="#home-sction4"></a>
    </div>
        
</template>
  
<script setup lang="ts">
    import { HomePageIndecator } from '@/types/gloable'
    import useIndecator from '@/composable/indecator/useIndecator'
    const { current, switchIndecator} = useIndecator()
</script>