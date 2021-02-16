import axios from 'axios'
import {authHeader} from "~/helper/auth-header";

export const state = () => ({
  auth: {
    loggedIn: false,
    user: null
  },
  apipath:'http://13.228.120.202:3000/api/v1/',
  //apipath: 'http://localhost:9000/api/v1/',//'http://13.228.120.202:80/api/v1/',
  bearer: '',
  expandsidebar: true,
  partners: [],
  userlogin: [],
  transfers: [],
  wallets: [],
  activities: [],
  token: "",
  alertmodal: ""
})

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },
  loggedInUser(state) {
    return state.auth.user
  }
}

export const mutations = {
  SET_EXPANDMENU(state) {
    state.expandsidebar = !state.expandsidebar
  },
  SET_TOKEN: function (state, data) {
    localStorage.setItem("token", data.token)
    let d = new Date();
    let expire = d.getTime() + (60 * 60 * 1000)
    localStorage.setItem("TokenExpired", expire.toString())
    state.bearer = 'Bearer '.concat(data.token)
  },
  SET_USER(state, data) {
    state.userlogin = data
    state.bearer = 'Bearer '.concat(data.token)
  },
  SET_ALERT(state, data) {
    state.alertmodal = data
  },
  LOGOUT_USER(state) {
    state.userlogin = []
  },
  SET_PARTNERS (state, data) {
    state.partners = data
  },
  SET_TRANSFERS (state, data) {
    state.transfers = data
  }
  ,
  SET_WALLETS (state, data) {
    state.wallets = data
  },
  SET_ACTIVITIES (state ,data) {
    state.activities = data
  }
}


export const actions = {
  async get_partners({ commit, state }) {
    await axios.get(state.apipath + 'partners', { headers: authHeader() })
      .then(response => {
        commit('SET_PARTNERS', response.data.data.result)
      }).catch(error => {
      })
  },
  async get_transfers({ commit, state }) {
    await axios.get(state.apipath + 'transfers', { headers: authHeader() })
      .then(response => {
        commit('SET_TRANSFERS', response.data.data.result)
      }).catch(error => {
      })
  },
  async get_wallets({ commit, state }) {
    await axios.get(state.apipath + 'wallets', { headers: authHeader() })
      .then(response => {
        commit('SET_WALLETS', response.data.data.result)
      }).catch(error => {
      })
  },
  async get_activity_log({ commit, state }) {
    await axios.get(state.apipath + 'activity', { headers: authHeader() })
      .then(response => {
        commit('SET_ACTIVITIES', response.data.data.result)
      }).catch(error => {
      })
  }
}
