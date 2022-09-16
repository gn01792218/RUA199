<template>
    <div class="w-[300px] h-[289px] md:h-[420px] relative flex flex-col justify-end pb-10">
        <div class="w-full h-full overflow-hidden absolute z-[-1] left-0 top-0">
            <img class="w-full" :src="getAssetsFileURL(systemCardObj.bgPath)" :alt="systemCardObj.systemName">
        </div>
        <img class="absolute top-[-30px] absolute-x-center" :class="[{'top-[-10px]':systemCardObj.systemName.includes('Browser')}]" :src="getAssetsFileURL(systemCardObj.logoPath)" :alt="systemCardObj.systemName">
        <div class="flex-xy-center">
            <div class="w-[116px] h-[116px] flex justify-center items-center rounded-full bg-black opacity-70 sm:mb-3  md:w-[90px] md:h-[90px] lg:w-[116px] lg:h-[116px]">
                <p class="text-white text-center font-[700]">
                    {{systemCardObj.systemName}}
                </p>
            </div>
            <div class="flex flex-col">
                <div class="h-[40px] flex items-center">
                    <p class="description text-center">{{systemCardObj.description}}</p>
                </div>
                <div class="flex justify-center mt-5">
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