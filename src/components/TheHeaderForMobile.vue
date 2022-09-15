<template>
    <div class="sm:hidden w-full py-10 z-[2] relative flex flex-xy-center">
        <TheLogo />
        <div class="w-[25px] h-[11px] border-y-2 absolute right-[10%]" @click="handleHeaderPanel"></div>
        <transition name="headerFade">
            <HeaderPanel class="absolute top-0" :show="show" />
        </transition>
    </div>
</template>
  
<script setup lang="ts">
import TheLogo from '@/components/TheLogo.vue'
import HeaderPanel from '@/components/TheHeaderPanel.vue'
import useHeaderPanel from '@/composable/header/useHeaderPanel'
const { show, handleHeaderPanel } = useHeaderPanel()
</script>