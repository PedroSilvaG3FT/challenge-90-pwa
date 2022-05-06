import { httpClient } from '@/config/axios'
import { LoginFormInterface } from '@/interfaces/login-credential.interface'

export class AuthService {
    login(payload: LoginFormInterface) {
        return httpClient.post('/autentication', payload)
    }
    loginCode(accessCode: string) {
        return httpClient.post('/autentication-accessCode', { accessCode })
    }
}
