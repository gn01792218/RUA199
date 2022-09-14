<template>
    <div class="flex flex-wrap mt-10">
        <SystemCard 
          class="mr-5"
          :system-card-obj="{
          bgPath:'images/Artboard 1 1.png',
          logoPath:'images/apple-logo-transparent copy 1.png',
          systemName:'iOS',
          description:`ผู้เล่นที่ใช้ระบบiOS สามารถโหลดแอปได้ง่ายๆ 
                        ฝากถอนเรวดเร็ว รองรับ iOS 11.0 ขึ้นไป`,
          primaryBtnText:$t('card.systemCard.IOS.primaryBtnText'),
          secondaryBtnText:$t('card.systemCard.IOS.secondaryBtnText'),
        }" />
        <SystemCard 
          class="mr-5"
          :system-card-obj="{
          bgPath:'images/Artboard 1 2.png',
          logoPath:'images/Android-Logo-2014-2019 1.png',
          systemName:`Native
                    (Android)`,
          description:`ผู้เล่นที่ใช้ระบบแอนดรอยด์ 
                      สามารถโหลดแอปได้ง่ายๆ ฝากถอนรวดเร็ว 
                      รองรับ Android 5.1 ขึ้นไป`,
          primaryBtnText:$t('card.systemCard.Android.primaryBtnText'),
          secondaryBtnText:$t('card.systemCard.Android.secondaryBtnText'),
          slogan:$t('card.systemCard.Android.slogan')
        }" />
        <SystemCard 
          :system-card-obj="{
          bgPath:'images/Artboard 1 3.png',
          logoPath:'images/pwa 1.png',
          systemName:`Browser
                    Version`,
          description:`เล่นผ่านคอมพิวเตอร์ได้ไม่มีสะดุด 
                      สัมผัสกับกราฟิกที่น่าทึ่ง`,
          secondaryBtnText:$t('card.systemCard.PWA.secondaryBtnText'),
        }" />
      </div>
</template>
  
<script setup lang="ts">
import SystemCard from "@/components/card/SystemCard.vue"

</script>