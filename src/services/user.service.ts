import { httpClient } from '@/config/axios'
import UserInterface from '@/interfaces/user.interface'
import { RegisterFormInterface } from '@/interfaces/user-register.interface'

export class UserService {
    getAll() {
        return httpClient.get<UserInterface[]>(`user?userType=2`)
    }
    getById(id: number) {
        return httpClient.get<UserInterface>(`user/${id}`)
    }
    getByEmail(email: string) {
        return httpClient.get<UserInterface>(`user/email/${email}`)
    }
    create(payload: RegisterFormInterface) {
        return httpClient.post('user', payload)
    }
    update(payload: object) {
        return httpClient.put('user', payload)
    }
    updatePassword(payload: { password: string; userId: number }) {
        return httpClient.put('user/change-password', payload)
    }
}
