<template>
    <div>
        <a class="w-[20px] h-[11px] block cursor-pointer" :href="indecateTo">
            <img class="w-full" :src="getAssetsFileURL('images/Polygon 1.png')" alt="arrow">
        </a>
    </div>
</template>
  
<script setup lang="ts">
import useutil from '@/composable/util/useUtil';
const { getAssetsFileURL } = useutil()
defineProps<{ indecateTo: string }>();
</script>