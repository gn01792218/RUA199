<template>
    <select class="rounded-md bg-gradient-1 text-yellow-500 font-[700]" name="" id="" v-model="currentLang"
        @change="switchLang(currentLang)">
        <option v-for="lang in Lang" :key="lang" :value="lang">{{lang}}</option>
    </select>
</template>
  
<script setup lang="ts">
import { Lang } from '@/types/lang'
import useLang from '@/composable/lang/useLang'
const { currentLang, switchLang } = useLang()
</script>