import { ref } from 'vue'
const show = ref(false)
export default function useHeaderPanel() {
    
function handleHeaderPanel() {
    show.value = !show.value
    let app = document.getElementById("app") as HTMLElement
    if(show.value) {
        document.body.style.overflow = 'hidden'
        app.style.overflow = 'hidden'
    }else {
        document.body.style.overflow = 'auto'
        app.style.overflow = 'auto'
    }
}
    return {
        //data
        show,
        //methods
        handleHeaderPanel,
    }
}