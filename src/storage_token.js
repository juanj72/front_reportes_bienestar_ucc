import axios from 'axios'

export default {
  actions: {
    login({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('/api/token/', credentials)
          .then(response => {
            const token = response.data.access
            localStorage.setItem('access_token', token)
            commit('setToken', token)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
}