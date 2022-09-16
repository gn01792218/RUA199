import { ref } from 'vue'
import { HomePageIndecator } from '@/types/gloable'
const current = ref<HomePageIndecator>(HomePageIndecator.SECTION1)
export default function useIndecator() {
    function switchIndecator(indecator:HomePageIndecator) {
        current.value = indecator
    }
    function regestScrollObserver(target:HTMLElement,callBack:Function) {
        const section2Observer = new IntersectionObserver((entryies) => {
            entryies.forEach((entry) => {
                if (entry.isIntersecting) {
                    callBack()
                }
            })
        },{
            threshold:0.4,
        })
        section2Observer.observe(target)
    }
    return {
        //data
        current,
        //methods
        switchIndecator,
        regestScrollObserver,
    }
}

