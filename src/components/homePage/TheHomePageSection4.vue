<template>
    <section id="home-sction4" class="flex-xy-center p-10 sm:p-20 overflow-hidden lg:h-screen">
        <div class="max-w-[960px] relative mt-10">
            <p class="title-small xxs:title-tertiary mb-5 sm:title-secondary w-[167px] sm:w-auto"><span
                    class="block sm:inline text-[35px]">500,000+</span>Downloaded</p>
            <div class="divider-line-blue w-screen"></div>
            <img class="absolute w-[150px] 2xs:w-[200px] top-[-3%] right-[-25%] xs:right-[5%] md:w-[330px] sm:top-[25%] sm:right-0 lg:w-auto"
                :src="getAssetsFileURL('images/ia_100000469 1.png')" alt="game">
            <article class="w-full sm:w-1/2 py-10">
                <p class="description pb-5">{{$t('homePage.section4.description1')}}</p>
                <p class="description text-primary pb-10 cursor-pointer">{{$t('homePage.section4.acent')}}</p>
                <p class="description">{{$t('homePage.section4.description2')}}</p>
            </article>
            <div class="w-full sm:w-[58%]">
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