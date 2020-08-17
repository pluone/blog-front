import axios from 'axios'
import store from './store'
import router from './router'
import Element from 'element-ui'

// 请求拦截器
axios.interceptors.request.use(config => {
    if(store.getters.token){
        config.headers.Authorization = store.getters.token
    }
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(response => {

    let res = response.data
    console.log(res)
    if (res.code === 200){
        return response
    } else {
        Element.Message.error("粗错了", {duration: 3*1000})

        return Promise.reject(res.msg)
    }
}, error => {
    console.log(error)
    if (error.response && error.response.data) {
        error.message = error.response.data.msg
    }

    if (error.response && error.response.status === 401) {
        store.commit("REMOVE_INFO")
        router.push("/login")
    }

    if (error.message){
        Element.Message.error(error.message, {duration: 3*1000})
    }
    return Promise.reject(error)
})