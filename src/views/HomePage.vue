<template>
  <DotIndecator class="fixed right-0 bottom-1/2 z-[2]" />
  <HomePageSection1/>
  <GradientDivider :to="Direction.RIGHT"/>
  <HomePageSection2/>
  <GradientDivider :to="Direction.LEFT"/>
  <HomePageSection3/>
  <GradientDivider :to="Direction.RIGHT"/>
  <HomePageSection4/>
  <GradientDivider :to="Direction.LEFT"/>
</template>
<script setup lang="ts">
import { Direction } from '@/types/gloable'
import HomePageSection1 from '@/components/homePage/HomePageSection1.vue'
import HomePageSection2 from '@/components/homePage/HomePageSection2.vue'
import HomePageSection3 from '@/components/homePage/HomePageSection3.vue'
import HomePageSection4 from '@/components/homePage/HomePageSection4.vue'
import DotIndecator from "@/components/indecator/DotIndecator.vue";
import GradientDivider from '@/components/GradientDivider.vue'
</script>
