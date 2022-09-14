<template>
   <div v-if="to === Direction.RIGHT" class="divider-line-to-right hidden sm:block"></div>
   <div v-else class="divider-line-to-left hidden sm:block"></div>
</template>
  
<script setup lang="ts">
    import { Direction } from '@/types/gloable'
    defineProps<{
        to:Direction
    }>()
</script>