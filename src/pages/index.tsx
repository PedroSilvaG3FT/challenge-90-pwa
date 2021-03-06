import { useMapState } from '@/hooks'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Logo from '@/assets/images/logo.png'
import AppHead from '@/components/common/app-head'
import UserInterface from '@/interfaces/user.interface'
import AuthModal from '@/components/common/modals/auth-modal'
import { Container, Content, Image, Button } from '@/styles/pages/wellcome'
import { AuthStateInterface } from '@/store/@interfaces/authState.interface'

const Wellcome: React.FC = () => {
    const router = useRouter()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { token } = useMapState('auth') as AuthStateInterface

    const onLogin = async (user: UserInterface) => {
        setIsModalOpen(false)
        router.push(!user.active ? 'waiting-approval' : '/home')
    }

    const goToRegister = () => router.push('/register')

    const handleEnter = () => {
        if (token) router.push('/home')
        else setIsModalOpen(true)
    }

    return (
        <>
            <AppHead title="Bem vindo" />

            <Container>
                <Content>
                    <Image src={Logo} alt="Desafio 90" />

                    <Button onClick={() => handleEnter()}>Entrar</Button>
                    <Button onClick={() => goToRegister()}>Cadastre-se</Button>
                </Content>
            </Container>

            <AuthModal
                onLogin={onLogin}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    )
}

export default Wellcome
