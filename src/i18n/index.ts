import { createI18n } from "vue-i18n";
import zh from './zh.json'     
import en from './en.json'      
import th from './th.json'

const i18n = createI18n({
    legacy: false, //為了啟用vue3 compition API 模式
    locale: 'th',
    globalInjection: true,
    messages: {
      'zh': zh,
      'th': th,
      'en': en,
    },
  })
  
  export default i18n 