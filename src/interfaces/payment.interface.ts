export interface PaymentInterface {
    active: boolean
    dateCreation: Date
    dueDate: Date
    id: number
    paymentId: number
    status: number
    userId: number
    value: number
}
