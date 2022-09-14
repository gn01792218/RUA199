<template>
    <div class="text-white bg-slate-600 w-full h-screen" v-show="show">
        <div @click="handleHeaderPanel">X</div>
    </div>
</template>
  
<script setup lang="ts">
import useHeaderPanel from '@/composable/header/useHeaderPanel'
const { show, handleHeaderPanel } = useHeaderPanel()

</script>