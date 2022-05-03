import React from 'react'
import { useMapState } from '@/hooks'
import Summary from '@/components/home/user-detail/summary'
import UserGoals from '@/components/home/user-detail/user-goals'
import { Container, Article, Image, Separator, Button } from './styles'
import { AuthStateInterface } from '@/store/@interfaces/authState.interface'

const UserDetail: React.FC = () => {
    const { user } = useMapState('auth') as AuthStateInterface

    return (
        <Container>
            <Article>
                <Image src={user.image} />
                <UserGoals />
            </Article>

            <Separator />

            <Summary />

            <Button>Perfil</Button>
        </Container>
    )
}

export default UserDetail
