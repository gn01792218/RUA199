<template>
    <div class="w-full flex-xy-center py-10">
        <div class="w-[950px] flex items-center">
            <div class="flex items-center">
                <TheLogo class="mr-5"/>
                <article class="w-[265px]">
                    <h1 class="title-small pb-3">{{$t('footer.title')}}</h1>
                    <p class="description">{{$t('footer.description')}}</p>
                </article>
            </div>
            <div class="flex ml-auto">
                <img class="h-[26px] mr-4" :src="getAssetsFileURL('images/fb.png')" alt="FB">
                <img class="h-[26px] mr-4" :src="getAssetsFileURL('images/youtube.png')" alt="youtube">
                <img class="h-[26px] mr-4" :src="getAssetsFileURL('images/line.png')" alt="line">
                <img class="h-[26px] mr-4" :src="getAssetsFileURL('images/pinterest.png')" alt="pinterest">
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
    import TheLogo from '@/components/TheLogo.vue'
    import useUtil from '@/composable/util/useUtil'
    const { getAssetsFileURL } = useUtil()
</script>
  
<style>

</style>