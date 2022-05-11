import { httpClient } from '@/config/axios'

export class ExerciseService {
    getById(id: number) {
        return httpClient.get<any>(`exerciceUser/${id}`)
    }
}
