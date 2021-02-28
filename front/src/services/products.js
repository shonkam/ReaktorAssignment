import axios from 'axios'

const instance = axios.create()
instance.defaults.timeout = 200000
//const baseUrl = 'http://localhost:3001'

const getGloves = () => {
    const request = instance.get(`/products/gloves`)
    return request.then(response => response.data)
}

const getFacemasks = () => {
    const request = instance.get(`/products/facemasks`)
    return request.then(response => response.data)
}

const getBeanies = () => {
    const request = instance.get(`/products/beanies`)
    return request.then(response => response.data)
}

export default { getGloves, getFacemasks, getBeanies }