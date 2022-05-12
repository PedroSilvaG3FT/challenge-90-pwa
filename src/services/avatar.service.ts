import { httpClient } from '@/config/axios'
import { AvatarInterface } from '@/interfaces/avatar.interface'

export class AvatarService {
    getAll() {
        return httpClient.get<AvatarInterface[]>('avatar')
    }
}
