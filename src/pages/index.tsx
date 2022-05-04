import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Logo from '@/assets/images/logo.png'
import AppHead from '@/components/common/app-head'
import AuthModal from '@/components/common/modals/auth-modal'
import { Container, Content, Image, Button } from '@/styles/pages/home'

const Wellcome: React.FC = () => {
    const router = useRouter()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const onLogin = async () => {
        setIsModalOpen(false)
        router.push('/home')
    }

    const goToRegister = () => router.push('/register')

    return (
        <>
            <AppHead title="Bem vindo" />

            <Container>
                <Content>
                    <Image src={Logo} alt="Desafio 90" />

                    <Button onClick={() => setIsModalOpen(true)}>Entrar</Button>
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
