import { createStore } from "vuex";
import {getAllData} from "../api/api";

export default createStore({
  state: {
    all_operations: [],
    income: [],
    cost: [],
    current_currency: {
      'RUB': {
        name: "RUB",
        sign: "₽",
        country: "Россия",
      },
      'UAH': {
        name: "UAH",
        sign: "₴",
        country: "Украина",
      },
    }
  },
  mutations: {
    SET_OPERATIONS_TO_STATE: (state, payload) => {
      state[payload.stateName].push(payload.value)
    },
    SET_FORMDATA: (state, data) => {
      state.formData = data
    },
    ADD_NEW_CURRENCY: (state, currency) => {
      state.current_currency[currency.name] = currency
    }
  },
  actions: {
    async GET_ALL_JOURNAL_FOR_FIREBASE({commit}) {
      const operations = await getAllData()
      commit('SET_OPERATIONS_TO_STATE', {stateName: 'all_operations', value: operations.message})
    },
  },
  modules: {},
  getters: {
    GET_ALL_JOURNAL(state) {
      return state.all_operations
    },
    // TODO сделать геттер возврата всех доходов
    GET_LIST_INCOMES: state => findYear => {
      return state.all_operations.find(year => {
        return null
      })
    },
    // TODO сделать геттер возврата всех возвратов
    GET_LIST_COSTS(state, getters) {
      return getters.GET_ALL_JOURNAL
    },
    GET_CURRENCY: state => name => {
      name = name.toUpperCase()
      return state.current_currency[name]
    }
  }
});
