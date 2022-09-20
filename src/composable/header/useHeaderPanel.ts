import { ref } from 'vue'
const show = ref(false)
export default function useHeaderPanel() {
    
function handleHeaderPanel() {
    show.value = !show.value
    let mo = function(e:Event) {e.preventDefault()}
    if(show.value) {
        document.body.style.overflow = 'hidden'
        document.addEventListener("touchmove",mo,false)
    }else {
        document.body.style.overflow = 'auto'
        document.removeEventListener("touchmove",mo,false)
    }
}
    return {
        //data
        show,
        //methods
        handleHeaderPanel,
    }
}