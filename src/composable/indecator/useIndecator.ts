import { ref } from 'vue'
export default function useIndecator() {
    const current = ref(1)
    function switchIndecator(num:number) {
        current.value = num
    }
    return {
        //data
        current,
        //methods
        switchIndecator,
    }
}

