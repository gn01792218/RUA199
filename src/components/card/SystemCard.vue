<template>
    <div class="w-[300px] h-[289px] sm:h-[420px] relative flex flex-col justify-end pb-10">
        <div class="wh-full overflow-hidden absolute z-[-1] left-0 top-0 rounded-md">
            <img class="w-full" :src="getAssetsFileURL(systemCardObj.bgPath)" :alt="systemCardObj.systemName">
        </div>
        <img class="absolute top-[-30px] absolute-x-center" :class="[{'top-[-10px]':systemCardObj.systemName.includes('Browser')}]" :src="getAssetsFileURL(systemCardObj.logoPath)" :alt="systemCardObj.systemName">
        <div class="flex-xy-center">
            <div class="w-[116px] h-[116px] text-center flex flex-col justify-center items-center rounded-full bg-black opacity-70 mt-20 sm:mb-3">
                <p class="text-[24px] font-[900]">{{systemCardObj.systemName}}</p>
                <p v-if="systemCardObj.systemName2" class="text-[18px] font-light">{{systemCardObj.systemName2}}</p>
            </div>
            <div class="flex flex-col">
                <div class="h-[35px] leading-[14.06px] mt-3 flex flex-col justify-end items-center">
                    <p class="description text-center">{{systemCardObj.description}}</p>
                    <p v-if="systemCardObj.description2" class="description text-center">{{systemCardObj.description2}}</p>
                    <p v-if="systemCardObj.description3" class="description text-center">{{systemCardObj.description3}}</p>
                </div>
                <div class="flex justify-center mt-3">
                    <button v-if="systemCardObj.primaryBtnText" class="max-w-[136px] primary-btn mr-3">{{systemCardObj.primaryBtnText}}</button>
                    <button v-if="systemCardObj.secondaryBtnText" class="secondary-btn">{{systemCardObj.secondaryBtnText}}</button>
                </div>
            </div>
        </div>
        <span class="absolute description absolute-x-center bottom-[3%]" v-if="systemCardObj.slogan">{{systemCardObj.slogan}}</span>
    </div>
</template>
  
<script setup lang="ts">
    import { SystemCardObj } from '@/types/gloable'
    import useUtil from '@/composable/util/useUtil'
    defineProps<{ systemCardObj:SystemCardObj }>();
    const { getAssetsFileURL } = useUtil()
</script>