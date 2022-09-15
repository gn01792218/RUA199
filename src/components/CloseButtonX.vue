<template>
    <div class="relative
                before:absolute before:w-[32px] before:h-[3px] before:rounded-lg before:bg-white before:rotate-45 
                after:absolute after:w-[32px] after:h-[3px] after:rounded-lg after:bg-white after:rotate-[-45deg]"
        @click="closeHandler()"></div>
</template>
  
<script setup lang="ts">
defineProps<{
    closeHandler: Function
}>()
</script>