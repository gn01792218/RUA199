<template>
    <div class="w-full flex-xy-center py-5">
        <div class="w-[320px] pb-20 flex flex-col items-center sm:w-[640px] sm:flex-row sm:pb-0 lg:w-[950px] ">
            <div class="flex flex-col sm:flex-row items-center">
                <RouteToHome class="mr-5 mb-5 sm:mb-0"
                    :img-path="getAssetsFileURL('images/header-logo 1.png')"
                 />
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
    import RouteToHome from '@/components/RouteToHome.vue'
    import useUtil from '@/composable/util/useUtil'
    const { getAssetsFileURL } = useUtil()
</script>
  
<style>

</style>