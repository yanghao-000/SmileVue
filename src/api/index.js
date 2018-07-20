import axios from 'axios'

// axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5b33342d5d476524517633a2/SmileVue'
const BASEURL = 'https://www.easy-mock.com/mock/5b33342d5d476524517633a2/SmileVue'
const LOCALURL = 'http://localhost:3000'

export let getHome = () => {
  // return axios.get('/home')
  return axios({
    url: BASEURL+'/home',
    method: 'get'
  })
}
export let registerUser = (data) => {
  return axios({
    url: LOCALURL+'/user/register',
    method: 'post',
    data: data
  })
}
export let loginUser = (data) => {
  return axios({
    url: LOCALURL+'/user/login',
    method: 'post',
    data: data
  })
}
