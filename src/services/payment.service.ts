import { httpClient } from '@/config/axios'
import { PaymentInterface } from '@/interfaces/payment.interface'

export class PaymentService {
    getByUserId(userId: number) {
        return httpClient.get<PaymentInterface[]>(`userPayment/user/${userId}`)
    }
}
