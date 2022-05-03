import UserInterface from '@/interfaces/user.interface'

export interface AuthStateInterface {
    token: string
    user: UserInterface
}
