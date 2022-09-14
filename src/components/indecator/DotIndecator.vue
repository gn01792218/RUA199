<template>
    <div class="flex flex-col">
        <a class="indecate" :class="[{active : current === HomePageIndecator.SECTION1}]"
            href="#home-sction1"></a>
        <a class="indecate" :class="[{active : current === HomePageIndecator.SECTION2}]"
             href="#home-sction2"></a>
        <a class="indecate" :class="[{active : current === HomePageIndecator.SECTION3}]"
             href="#home-sction3"></a>
        <a class="indecate" :class="[{active : current === HomePageIndecator.SECTION4}]"
            href="#home-sction4"></a>
    </div>
</template>
  
<script setup lang="ts">
import { onMounted } from 'vue'
import { HomePageIndecator } from '@/types/gloable'
import useIndecator from '@/composable/indecator/useIndecator'
const { current, switchIndecator, regestScrollObserver } = useIndecator()
onMounted(() => {
    for(let i of Object.values(HomePageIndecator)){
        regestScrollObserver(document.getElementById(i.replace("#",'')) as HTMLElement,()=>switchIndecator(i))
    }
})


</script>