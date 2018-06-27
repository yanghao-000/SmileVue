import axios from 'axios'

axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5b33342d5d476524517633a2/SmileVue'

export let getHome = () => {
  // return axios.get('/home')
  return axios({
    url: '/home',
    method: 'get'
  })
}
