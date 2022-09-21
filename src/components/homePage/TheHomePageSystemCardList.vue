<template>
    <div class="flex flex-wrap justify-center items-center mt-10 lg:flex-nowrap">
        <SystemCard 
          class="sm:mr-5 mb-10"
          :system-card-obj="{
          bgPath:'images/Artboard 1 1.png',
          logoPath:'images/apple-logo-transparent copy 1.png',
          systemName:$t('card.systemCard.IOS.systemName'),
          description:$t('card.systemCard.IOS.description'),
          description2:$t('card.systemCard.IOS.description2'),
          primaryBtnText:$t('card.systemCard.IOS.primaryBtnText'),
          secondaryBtnText:$t('card.systemCard.IOS.secondaryBtnText'),
        }" />
        <SystemCard 
          class="sm:mr-5 mb-10"
          :system-card-obj="{
          bgPath:'images/Artboard 1 2.png',
          logoPath:'images/Android-Logo-2014-2019 1.png',
          systemName:$t('card.systemCard.Android.systemName'),
          systemName2:$t('card.systemCard.Android.systemName2'),
          description:$t('card.systemCard.Android.description'),
          description2:$t('card.systemCard.Android.description2'),
          description3:$t('card.systemCard.Android.description3'),
          primaryBtnText:$t('card.systemCard.Android.primaryBtnText'),
          secondaryBtnText:$t('card.systemCard.Android.secondaryBtnText'),
          slogan:$t('card.systemCard.Android.slogan')
        }" />
        <SystemCard 
          class="sm:mr-0 sm:mr-5 md:mb-10 "
          :system-card-obj="{
          bgPath:'images/Artboard 1 3.png',
          logoPath:'images/pwa 1.png',
          systemName:$t('card.systemCard.PWA.systemName'),
          description:$t('card.systemCard.PWA.description'),
          description2:$t('card.systemCard.PWA.description2'),
          secondaryBtnText:$t('card.systemCard.PWA.secondaryBtnText'),
        }" />
      </div>
</template>
  
<script setup lang="ts">
import SystemCard from "@/components/card/SystemCard.vue"

</script>