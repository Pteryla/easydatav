import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

import { TodoState } from './modules/todo'
import todo from './modules/todo'

export type State = {
  count: number,
  todo?: TodoState // 这里必须是可选，不然state会报错
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    todo
  }
})

