<template>
    <router-link to="/"><img :src="imgPath" :alt="imgPath"></router-link>
</template>
  
<script setup lang="ts">
defineProps<{
    imgPath:string
}>()
</script>