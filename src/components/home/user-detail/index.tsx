import React from 'react'
import { useMapState } from '@/hooks'
import { useRouter } from 'next/router'
import Avatar from '@/assets/icons/avatar.png'
import Summary from '@/components/home/user-detail/summary'
import UserGoals from '@/components/home/user-detail/user-goals'
import { Container, Content, Article, Image, Separator, Button } from './styles'
import { AuthStateInterface } from '@/store/@interfaces/authState.interface'
import ScrollAnimation from '@/components/ui/scroll-animation'

const UserDetail: React.FC = () => {
    const router = useRouter()
    const { user } = useMapState('auth') as AuthStateInterface

    const goToProfile = () => router.push('/profile')

    return (
        <ScrollAnimation animation="fadeInDown">
            <Container>
                <Content>
                    <Article>
                        <Image src={user.image || Avatar} />
                        <UserGoals />
                    </Article>

                    <Separator />

                    <Summary />

                    <Button onClick={goToProfile}>Perfil</Button>
                </Content>
            </Container>
        </ScrollAnimation>
    )
}

export default UserDetail
