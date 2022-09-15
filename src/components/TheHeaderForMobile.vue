<template>
    <div class="md:hidden w-full py-10 z-[2] relative flex flex-xy-center">
        <RouteToHome :img-path="getAssetsFileURL('images/header-logo 1.png')" />
        <div class="w-[25px] h-[11px] border-y-2 absolute right-[10%]" @click="handleHeaderPanel"></div>
        <transition name="headerFade">
            <HeaderPanel class="absolute top-0" :show="show" />
        </transition>
    </div>
</template>
  
<script setup lang="ts">
import RouteToHome from '@/components/RouteToHome.vue'
import HeaderPanel from '@/components/TheHeaderPanel.vue'
import useHeaderPanel from '@/composable/header/useHeaderPanel'
import useutil from '@/composable/util/useUtil';
const { getAssetsFileURL } = useutil()
const { show, handleHeaderPanel } = useHeaderPanel()
</script>