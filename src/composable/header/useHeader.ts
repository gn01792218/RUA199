import { ref } from 'vue'

const headerEle = ref<HTMLElement | null>(null)
const headerColor = ref<string>('bg-transparent')

export default function useHeaderPanel() {

    function registryScroll() {
        window.addEventListener('scroll',handleHeaderColor)
    }

    function handleHeaderColor() {
        let h = window.scrollY
        if(h > 1) {
            headerColor.value = 'bg-black bg-gradient-to-t from-black to-[#072C41]'
        }else if(h === 0){
            headerColor.value = 'bg-transparent'
        }
    }
    return {
        //data
        headerEle,
        headerColor,
        //methods
        registryScroll,
    }
}