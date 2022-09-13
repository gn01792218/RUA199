<template>
    <!-- <ul class="flex flex-col">
        <li class="indecate" :class="[{active : current === 1}]" @click="switchIndecator(1)"><a href="#home-sction1"></a></li>
        <li class="indecate" :class="[{active : current === 2}]" @click="switchIndecator(2)"><a href="#home-sction2"></a></li>
        <li class="indecate" :class="[{active : current === 3}]" @click="switchIndecator(3)"><a href="#home-sction3"></a></li>
        <li class="indecate" :class="[{active : current === 4}]" @click="switchIndecator(4)"><a  href="#home-sction4"></a></li>
    </ul> -->
    <div class="flex flex-col">
        <a class="indecate" :class="[{active : current === 1}]" @click="switchIndecator(1)" href="#home-sction1"></a>
        <a class="indecate" :class="[{active : current === 2}]" @click="switchIndecator(2)" href="#home-sction2"></a>
        <a class="indecate" :class="[{active : current === 3}]" @click="switchIndecator(3)" href="#home-sction3"></a>
        <a class="indecate" :class="[{active : current === 4}]" @click="switchIndecator(4)" href="#home-sction4"></a>
    </div>
        
</template>
  
<script setup lang="ts">
    import useIndecator from '@/composable/indecator/useIndecator'
    const { current, switchIndecator} = useIndecator()
</script>