<template>
    <div class="sm:hidden w-full py-10 z-[2] relative flex flex-xy-center">
        <TheLogo />
        <div class="w-[25px] h-[11px] border-y-2 absolute right-[10%]" @click="handleHeaderPanel"></div>
        <transition name="headerFade">
            <HeaderPanel class="absolute right-0 top-0" :show="show" />
        </transition>
        <!-- <li>
                <router-link to="/HowToPage">{{$t('header.howToUse')}}</router-link>
            </li>
            <li>
                <router-link to="/DownloadPage">{{$t('header.download')}}</router-link>
            </li>
            <li>
                <router-link to="/PromotionsPage">{{$t('header.promotion')}}</router-link>
            </li>
            <li>
                <router-link to="/VipPage">{{$t('header.VIP')}}</router-link>
            </li>
            <li>
                <router-link to="/QAPage">{{$t('header.commonProblem')}}</router-link>
            </li>
            <li>
                <router-link to="/ContactPage">{{$t('header.support')}}</router-link>
            </li> -->
    </div>
</template>
  
<script setup lang="ts">
import TheLogo from '@/components/TheLogo.vue'
import HeaderPanel from '@/components/TheHeaderPanel.vue'
import useHeaderPanel from '@/composable/header/useHeaderPanel'
const { show, handleHeaderPanel } = useHeaderPanel()
</script>