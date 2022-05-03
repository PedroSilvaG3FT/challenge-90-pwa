import { httpClient } from '@/config/axios'

export class AuthService {
    login(payload: { email: string; password: string }) {
        return httpClient.post('/autentication', payload)
    }

    loginCode(accessCode: string) {
        return httpClient.post('/autentication-accessCode', { accessCode })
    }
}
