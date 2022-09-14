<template>
    <router-link to="/"><img :src="getAssetsFileURL('images/header-logo 1.png')" alt="RUAI99"></router-link>
</template>
  
<script setup lang="ts">
import useUtil from '@/composable/util/useUtil' 
const { getAssetsFileURL } = useUtil()
</script>