import { ref } from 'vue'
import { HomePageIndecator } from '@/types/gloable'
const current = ref<HomePageIndecator>(HomePageIndecator.SECTION1)
export default function useIndecator() {
    function switchIndecator(indecator:HomePageIndecator) {
        current.value = indecator
    }
    return {
        //data
        current,
        //methods
        switchIndecator,
    }
}

