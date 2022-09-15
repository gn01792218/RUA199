<template>
    <div class="sm:hidden w-screen h-[85px] relative bg-gradient-2 bg-black text-white rounded-tl-[40px] rounded-tr-[40px]">
        <ul class="w-[85%] h-full mx-auto flex justify-around items-center">
            <li><RouteToHome
                    :img-path="getAssetsFileURL('images/homeIcon.png')"
                /></li>
            <li><img :src="getAssetsFileURL('images/calender.png')" alt="homeIcon"></li>
            <li><img :src="getAssetsFileURL('images/downloadIcon.png')" alt="homeIcon"></li>
            <li><img :src="getAssetsFileURL('images/line@.png')" alt="homeIcon"></li>
        </ul>
    </div>
</template>
  
<script setup lang="ts">
    import RouteToHome from '@/components/RouteToHome.vue'
    import useutil from '@/composable/util/useUtil';
    const { getAssetsFileURL } = useutil()
</script>