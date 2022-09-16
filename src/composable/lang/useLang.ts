import { ref, onMounted } from 'vue'
import { Lang } from '@/types/lang'
import i18n from "@/i18n/index";
const currentLang = ref<Lang>(Lang.th)

export default function useLang() {
    function switchLang(lang: Lang) {
        currentLang.value = lang
        localStorage.setItem('lang', JSON.stringify(lang))
        i18n.global.locale = lang
    }
    function getLocalLang() {
        const locaLang = localStorage.getItem('lang')?.replaceAll('"', "")
        switch (locaLang) {
            case "en":
                currentLang.value = Lang.en
                break;
            case "zh":
                console.log('zh')
                currentLang.value = Lang.zh
                break;
        }
            i18n.global.locale =  currentLang.value
    }
    onMounted(() => {
        getLocalLang()
    })
    return {
        //data
        currentLang,
        //methods
        switchLang,
    }
}