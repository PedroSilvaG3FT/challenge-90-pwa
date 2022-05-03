import axios, { AxiosRequestConfig } from 'axios'

const axiosClient = axios.create({
    // baseURL: enviroments.API_URL,
    baseURL: 'http://challenge90-api.herokuapp.com',
    headers: {
        Accept: 'application/json',
        'content-type': 'application/json'
    }
})

axiosClient.interceptors.request.use((config: AxiosRequestConfig) => {
    return config
})

export const httpClient = axiosClient
