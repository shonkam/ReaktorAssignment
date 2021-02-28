import axios from 'axios'

//const baseUrl = 'http://localhost:3001'

const getGloves = () => {
    const request = axios.get(`/products/gloves`)
    return request.then(response => response.data)
}

const getFacemasks = () => {
    const request = axios.get(`/products/facemasks`)
    return request.then(response => response.data)
}

const getBeanies = () => {
    const request = axios.get(`/products/beanies`)
    return request.then(response => response.data)
}

export default { getGloves, getFacemasks, getBeanies }