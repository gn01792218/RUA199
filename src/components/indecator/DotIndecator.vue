<template>
    <div class="flex flex-col">
        <a class="indecate" v-for="indecator in Object.values(HomePageIndecator)" :key="indecator" 
           :class="[{active : current === indecator}]"
           :href="indecator"></a>
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