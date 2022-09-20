<template>
    <nav class="the-header" :class="[headerColor]" ref="headerEle">
        <ul class="the-header-ul">
            <li>
                <router-link to="/HowToPage">{{$t('header.howToUse')}}</router-link>
            </li>
            <li>
                <router-link to="/DownloadPage">{{$t('header.download')}}</router-link>
            </li>
            <li class="hidden sm:block">
                <router-link to="/PromotionsPage">{{$t('header.promotion')}}</router-link>
            </li>
            <li class="flex flex-col items-center">
                <RouteToHome 
                :img-path="getAssetsFileURL('images/header-logo 1.png')"
                />
                <TheLangSelector/>
            </li>
            <li>
                <router-link to="/VipPage">{{$t('header.VIP')}}</router-link>
            </li>
            <li>
                <router-link to="/QAPage">{{$t('header.commonProblem')}}</router-link>
            </li>
            <li>
                <router-link to="/ContactPage">{{$t('header.support')}}</router-link>
            </li>
        </ul>
    </nav>
</template>
  
<script setup lang="ts">
import RouteToHome from '@/components/RouteToHome.vue'
import TheLangSelector from '@/components/TheLangSelector.vue'
import useutil from '@/composable/util/useUtil';
import useHeader from '@/composable/header/useHeader'
const { getAssetsFileURL } = useutil()
const { headerColor, headerEle } = useHeader()
</script>