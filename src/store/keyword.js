import axios from 'axios'

const defaultMessage = '조회 결과가 없습니다.'

export default {
  namespaced: true,
  state: () => ({
    keyword: [],
    message: defaultMessage,
    loading: false    
  }),
  getters: {},
  mutations: {
    updateState (state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    },
    resetKeyword(state) {
      state.keyword = [],
      state.message = defaultMessage,
      state.loading = false
    }
  },
  actions: {
    async getKeywordByUser({ state, commit }, payload) {
      if (state.loading) return

      commit('updateState', {
        message: '',
        loading: true
      })

      try {
        const res = await getKeyword({
          ...payload
        })
        const { content } = res.data.content
        commit('updateState', {
          keyword: content
        })
        console.log(state.keyword)
      } catch (message) {
        commit('updateState', {
          keyword: [],
          message
        })
      } finally {
        commit('updateState', {
          loading: false
        })
      }
    }
  }
}

function getKeyword() {
  // const { title, type, year, page, id } = payload

  const url = `keyword/list`

  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(res => {
        if(res.data.result === "ERROR") {
          reject(res.data.ERROR)
        }
        resolve(res)
      })
      .catch(err => {
        reject(err.message)
      })
  })
}