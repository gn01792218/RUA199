<template>
    <section id="home-sction4" class="flex-xy-center p-10 overflow-hidden relative sm:p-20 lg:h-screen">
        <div class="max-w-[960px] relative mt-10">
            <p class="title-small xxs:title-tertiary mb-5 sm:title-secondary w-[167px] sm:w-auto"><span
                    class="block sm:inline text-[35px]">500,000+</span>Downloaded</p>
            <div class="divider-line-blue w-[600px] absolute left-[-50%] sm:w-full sm:static"></div>
            <img class="absolute w-[100px] top-[-4%] right-[-30%] 2xs:w-[200px] xs:right-[5%] sm:top-[25%] sm:right-0 md:w-[330px] lg:w-[442px] lg:right-0"
                :src="getAssetsFileURL('images/ia_100000469 1.png')" alt="game">
            <article class="w-full sm:w-1/2 py-10">
                <p class="description pb-5">{{$t('homePage.section4.description1')}}</p>
                <p class="description text-primary pb-10 cursor-pointer">{{$t('homePage.section4.acent')}}</p>
                <p class="description">{{$t('homePage.section4.description2')}}</p>
            </article>
            <div class="w-[500px] absolute left-[-20%] sm:w-[58%] sm:static">
                <div class="divider-line-blue"></div>
            </div>
            <article class="w-full sm:w-1/2 py-10">
                <h1 class="title-tertiary pb-5">{{$t('homePage.section4.title')}}</h1>
                <p class="description">{{$t('homePage.section4.description3')}}</p>
            </article>
            <div class="divider-line-blue hidden sm:block"></div>
        </div>
    </section>

</template>
  
<script setup lang="ts">
import useUtil from '@/composable/util/useUtil'
const { getAssetsFileURL } = useUtil()
</script>