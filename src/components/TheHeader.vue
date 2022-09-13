<template>
    <nav class="w-full py-4 z-[2]">
        <ul class="the-header">
            <li><router-link to="/HowToPage">{{$t('header.howToUse')}}</router-link></li>
            <li><router-link to="/DownloadPage">{{$t('header.download')}}</router-link></li>
            <li><router-link to="/PromotionsPage">{{$t('header.promotion')}}</router-link></li>
            <li>
                <router-link to="/"><img :src="getAssetsFileURL('images/header-logo 1.png')" alt="RUAI99"></router-link>
            </li>
            <li><router-link to="/VipPage">{{$t('header.VIP')}}</router-link></li>
            <li><router-link to="/QAPage">{{$t('header.commonProblem')}}</router-link></li>
            <li><router-link to="/ContactPage">{{$t('header.support')}}</router-link></li>
        </ul>
    </nav>
</template>
  
<script setup lang="ts">
import useUtil from '@/composable/util/useUtil' 
const { getAssetsFileURL } = useUtil()

</script>