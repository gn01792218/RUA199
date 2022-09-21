import { ref, onMounted } from 'vue'
import { Lang } from '@/types/lang'
import { useI18n } from 'vue-i18n'
const currentLang = ref<Lang>(Lang.th)

export default function useLang() {
    const { locale } = useI18n({ useScope: 'global' })

    function switchLang(lang: Lang) {
        currentLang.value = lang
        localStorage.setItem('lang', JSON.stringify(lang))
        locale.value = lang
    }
    function getLocalLang() {
        const locaLang = localStorage.getItem('lang')?.replaceAll('"', "")
        switch (locaLang) {
            case "en":
                currentLang.value = Lang.en
                break;
            case "zh":
                currentLang.value = Lang.zh
                break;
        }
            locale.value = currentLang.value
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