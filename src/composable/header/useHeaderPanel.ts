import { ref } from 'vue'
const show = ref(false)
export default function useHeaderPanel() {
    
function handleHeaderPanel() {
    show.value = !show.value
}
    return {
        //data
        show,
        //methods
        handleHeaderPanel,
    }
}