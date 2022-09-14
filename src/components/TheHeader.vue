<template>
    <nav class="w-full py-4 z-[2]">
        <ul class="the-header">
            <li class="hidden sm:block"><router-link to="/HowToPage">{{$t('header.howToUse')}}</router-link></li>
            <li class="hidden sm:block"><router-link to="/DownloadPage">{{$t('header.download')}}</router-link></li>
            <li class="hidden sm:block"><router-link to="/PromotionsPage">{{$t('header.promotion')}}</router-link></li>
            <li><TheLogo/></li>
            <li class="hidden sm:block"><router-link to="/VipPage">{{$t('header.VIP')}}</router-link></li>
            <li class="hidden sm:block"><router-link to="/QAPage">{{$t('header.commonProblem')}}</router-link></li>
            <li class="hidden sm:block"><router-link to="/ContactPage">{{$t('header.support')}}</router-link></li>
        </ul>
    </nav>
</template>
  
<script setup lang="ts">
    import TheLogo from '@/components/TheLogo.vue'
    import useUtil from '@/composable/util/useUtil' 
    const { getAssetsFileURL } = useUtil()

</script>