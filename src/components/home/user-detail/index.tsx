import React from 'react'
import store from '@/store'
import { useRouter } from 'next/router'
import Avatar from '@/assets/icons/avatar.png'
import Summary from '@/components/home/user-detail/summary'
import ScrollAnimation from '@/components/ui/scroll-animation'
import UserGoals from '@/components/home/user-detail/user-goals'
import { Container, Content, Article, Image, Separator, Button } from './styles'

const UserDetail: React.FC = () => {
    const router = useRouter()
    const { user, isTypeChallenge } = store.getState().auth

    const goToProfile = () => router.push('/profile')

    return (
        <ScrollAnimation animation="fadeInDown">
            <Container>
                <Content>
                    <Article>
                        <Image src={user.image || Avatar} />
                        <UserGoals />
                    </Article>

                    {isTypeChallenge && <Separator />}
                    {isTypeChallenge && <Summary />}

                    <Button onClick={goToProfile}>Perfil</Button>
                </Content>
            </Container>
        </ScrollAnimation>
    )
}

export default UserDetail
