import { Lang } from '@/types/lang'
interface State {
  lang:Lang,
}
export const state : State = {
    lang:Lang.th,
  };
  export const actions = {}
  
  export const mutations = {
    setLang(state:State, payload:Lang) {
      state.lang=payload
      console.log("vuex更新使用者選擇的語系",state.lang)
    },
  };
  export const getters = {}
  
  export default {
    state,
    actions,
    mutations,
    getters,
    namespaced: true,
  };