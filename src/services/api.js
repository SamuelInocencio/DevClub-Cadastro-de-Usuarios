import axios from 'axios'

const api = axios.create({
    baseURL: 'https://projeto-back-end-ymxj.onrender.com/',
})

export default api