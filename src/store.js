import Vue from 'vue'
import Vuex from 'vuex';

import authentication from './components/Authentication/store'

Vue.use(Vuex)

const modules = {
    authentication
}

const defaultState = {

}

const mutations = {

}

const actions = {

}

const getters = {

}

export const store = new Vuex.Store({
    modules,
    mutations,
    actions,
    getters,
    state: defaultState,  
})