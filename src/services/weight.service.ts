import { httpClient } from '@/config/axios'

export class WeightService {
    create(data: { userId: number; weight: number }) {
        return httpClient.post('userWeight', data)
    }
}
