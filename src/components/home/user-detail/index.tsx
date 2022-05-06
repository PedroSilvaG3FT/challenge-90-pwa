import React from 'react'
import { useMapState } from '@/hooks'
import Avatar from '@/assets/icons/avatar.png'
import Summary from '@/components/home/user-detail/summary'
import UserGoals from '@/components/home/user-detail/user-goals'
import { Container, Content, Article, Image, Separator, Button } from './styles'
import { AuthStateInterface } from '@/store/@interfaces/authState.interface'

const UserDetail: React.FC = () => {
    const { user } = useMapState('auth') as AuthStateInterface

    return (
        <Container>
            <Content>
                <Article>
                    <Image src={user.image || Avatar} />
                    <UserGoals />
                </Article>

                <Separator />

                <Summary />

                <Button>Perfil</Button>
            </Content>
        </Container>
    )
}

export default UserDetail
