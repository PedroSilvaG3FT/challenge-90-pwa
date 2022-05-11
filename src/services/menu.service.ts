import { httpClient } from '@/config/axios'
import { MenuInterface } from '@/interfaces/menu.interface'

export class MenuService {
    getById(id: number) {
        return httpClient.get<MenuInterface>(`menuUser/${id}`)
    }
    updateImage(userImage: any) {
        return httpClient.post(`menuUser/menuItemImage`, userImage)
    }
}
