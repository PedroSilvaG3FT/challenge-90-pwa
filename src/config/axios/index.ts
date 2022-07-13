import axios, { AxiosRequestConfig } from 'axios'
import enviroments from '@/config/env/enviroments'

const axiosClient = axios.create({
    baseURL: 'https://challenge90-api.herokuapp.com',
    // baseURL: enviroments.API_URL,
    headers: {
        Accept: 'application/json',
        'content-type': 'application/json'
    }
})

axiosClient.interceptors.request.use((config: AxiosRequestConfig) => {
    return config
})

export const httpClient = axiosClient
