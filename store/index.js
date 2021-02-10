import axios from 'axios'

export const state = () => ({
  auth: {
    loggedIn: false,
    user: null
  },
  apipath: 'http://13.228.120.202:80/api/v1/',
  bearer: '',
  expandsidebar: true,
  partners: [],
  userlogin: [],
  transfers: [],
  wallets: [],
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
  }
}


export const actions = {
  async get_partners({ commit, state }) {
    await axios.get(state.apipath + 'partners', { headers: { Authorization: this.state.bearer } })
      .then(response => {
        commit('SET_PARTNERS', response.data.data.result)
      }).catch(error => {
      })
  },
  async get_transfers({ commit, state }) {
    await axios.get(state.apipath + 'transfers', { headers: { Authorization: this.state.bearer } })
      .then(response => {
        commit('SET_TRANSFERS', response.data.data.result)
      }).catch(error => {
      })
  },
  async get_wallets({ commit, state }) {
    await axios.get(state.apipath + 'wallets', { headers: { Authorization: this.state.bearer } })
      .then(response => {
        commit('SET_WALLETS', response.data.data.result)
      }).catch(error => {
      })
  }
}
