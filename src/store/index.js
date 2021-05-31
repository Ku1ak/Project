import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        recipes:[],
        apiUrl:'https//api.edamam.com/search'
    },
    mutations: {
        setRecipes(state, payload){
            state.recipes = payload;
        }
    },
    actions: {
        async getRecipes ({ state, commit}, plan){
            try {
                let response = await axios.get(`${state.apiUrl}`,{
                    params: {
                        q:plan,
                        app_id: '<f894f9af>',
                        app_key: '<2742f5e7c88c27c6be7d1252a2255956>',
                        from: 0,
                        to: 9
                    }
                });
                commit('setRecipes', response.data.hits)
            } catch (error){
                commit('setRecipes', []);
            }
        }
    },
    modules: {},
});
