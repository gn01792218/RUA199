import { ref } from 'vue'
const show = ref(false)
export default function useHeaderPanel() {
    
function handleHeaderPanel() {
    show.value = !show.value
    let mo = function(e:Event) {e.preventDefault()}
    let app = document.getElementById("app") as HTMLElement
    if(show.value) {
        document.body.style.overflow = 'hidden'
        app.style.overflow = 'hidden'
        // document.addEventListener("touchmove",mo,false)
    }else {
        document.body.style.overflow = 'auto'
        app.style.overflow = 'auto'
        // document.removeEventListener("touchmove",mo,false)
    }
}
    return {
        //data
        show,
        //methods
        handleHeaderPanel,
    }
}