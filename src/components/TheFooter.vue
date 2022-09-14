<template>
    <div class="w-full flex-xy-center py-10">
        <div class="w-[320px] sm:w-[640px] lg:w-[950px] flex flex-col sm:flex-row items-center">
            <div class="flex flex-col sm:flex-row items-center">
                <TheLogo class="mr-5 mb-5 sm:mb-0"/>
                <article class="text-center sm:text-left max-w-[265px]">
                    <h1 class="title-small pb-3">{{$t('footer.title')}}</h1>
                    <p class="description">{{$t('footer.description')}}</p>
                </article>
            </div>
            <div class="flex  mt-10 sm:mt-0 sm:ml-auto">
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