<template>
        <div class="text-white bg-[#000000cc] w-full h-screen flex flex-col items-center py-20" v-show="show" @touchmove.prevent @scroll.prevent>
            <div class="relative w-[85%] px-10">
                <CloseButtonX class="right-[-100%]" :closeHandler="handleHeaderPanel" />
            </div>
            <ul class="h-[350px] flex flex-col justify-between text-center mb-12">
                <li @click="handleHeaderPanel">
                    <router-link to="/HowToPage">{{$t('header.howToUse')}}</router-link>
                </li>
                <li @click="handleHeaderPanel">
                    <router-link to="/DownloadPage">{{$t('header.download')}}</router-link>
                </li>
                <li @click="handleHeaderPanel">
                    <router-link to="/PromotionsPage">{{$t('header.promotion')}}</router-link>
                </li>
                <li @click="handleHeaderPanel">
                    <router-link to="/VipPage">{{$t('header.VIP')}}</router-link>
                </li>
                <li @click="handleHeaderPanel">
                    <router-link to="/QAPage">{{$t('header.commonProblem')}}</router-link>
                </li>
                <li @click="handleHeaderPanel">
                    <router-link to="/ContactPage">{{$t('header.support')}}</router-link>
                </li>
            </ul>
            <RouteToHome :img-path="getAssetsFileURL('images/header-logo 1.png')" @click="handleHeaderPanel" />
            <TheLangSelector/>
        </div>
</template>
  
<script setup lang="ts">
import RouteToHome from '@/components/RouteToHome.vue'
import TheLangSelector from '@/components/TheLangSelector.vue'
import CloseButtonX from '@/components/CloseButtonX.vue'
import useHeaderPanel from '@/composable/header/useHeaderPanel'
import useutil from '@/composable/util/useUtil';
const { getAssetsFileURL } = useutil()
const { show, handleHeaderPanel } = useHeaderPanel()

</script>