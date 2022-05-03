import { httpClient } from '@/config/axios'

export class UserService {
    getAll() {
        return httpClient.get<any>(`user?userType=2`)
    }
    getById(id: number) {
        return httpClient.get<any>(`user/${id}`)
    }
    getByEmail(email: string) {
        return httpClient.get<any>(`user/email/${email}`)
    }
    create(data: object) {
        return httpClient.post('user', data)
    }
    update(data: object) {
        return httpClient.put('user', data)
    }
    updatePassword(data: { password: string; userId: number }) {
        return httpClient.put('user/change-password', data)
    }
}
