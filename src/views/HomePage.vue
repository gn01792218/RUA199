<template>
  <DotIndecator class="fixed right-[5%] bottom-1/2 z-[2]" />
  <TheHomePageSection1/>
  <GradientDivider :to="Direction.RIGHT"/>
  <TheHomePageSection2/>
  <GradientDivider :to="Direction.LEFT"/>
  <TheHomePageSection3/>
  <GradientDivider :to="Direction.RIGHT"/>
  <TheHomePageSection4/>
  <GradientDivider :to="Direction.LEFT"/>
</template>
<script setup lang="ts">
import { Direction } from '@/types/gloable'
import TheHomePageSection1 from '@/components/homePage/TheHomePageSection1.vue'
import TheHomePageSection2 from '@/components/homePage/TheHomePageSection2.vue'
import TheHomePageSection3 from '@/components/homePage/TheHomePageSection3.vue'
import TheHomePageSection4 from '@/components/homePage/TheHomePageSection4.vue'
import DotIndecator from "@/components/indecator/DotIndecator.vue";
import GradientDivider from '@/components/GradientDivider.vue'
</script>
