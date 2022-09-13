<template>
    <div class="system-card relative">
        <img class="absolute z-[-1] left-0 top-0" :src="getAssetsFileURL(systemCardObj.bgPath)" :alt="systemCardObj.systemName">
        <img class="absolute top-[-30px] absolute-x-center" :class="[{'top-[-10px]':systemCardObj.systemName.includes('Browser')}]" :src="getAssetsFileURL(systemCardObj.logoPath)" :alt="systemCardObj.systemName">
        <div class="absolute absolute-x-center absolute-y-center w-[116px] h-[116px] flex justify-center items-center rounded-full bg-black opacity-70">
            <p class="text-white text-center font-[700]">
                {{systemCardObj.systemName}}
            </p>
        </div>
        <div class="absolute flex flex-col absolute-x-center bottom-[10%]">
            <span class="text-white text-xs text-center">{{systemCardObj.description}}</span>
            <div class="flex mt-5">
                <button v-if="systemCardObj.primaryBtnText" class="primary-btn mr-3">{{systemCardObj.primaryBtnText}}</button>
                <button v-if="systemCardObj.secondaryBtnText" class="secondary-btn">{{systemCardObj.secondaryBtnText}}</button>
            </div>
        </div>
        <span class="absolute absolute-x-center text-white text-xs bottom-[3%]" v-if="systemCardObj.slogan">{{systemCardObj.slogan}}</span>
    </div>
</template>
  
<script setup lang="ts">
    import { SystemCardObj } from '@/types/gloable'
    import useUtil from '@/composable/util/useUtil'
    defineProps<{ systemCardObj:SystemCardObj }>();
    const { getAssetsFileURL } = useUtil()
</script>