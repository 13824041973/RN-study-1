import axios from 'axios'

const init = axios.create()

init.interceptors.response.use((resp) => resp.data)

const COMMON_URL = 'http://127.0.0.1:3010/api'

export const apiGet = (opts) => {
    return init({
        method: 'GET',
        ...opts,
        url: `${COMMON_URL}${opts.url || ''}`
    })
}