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