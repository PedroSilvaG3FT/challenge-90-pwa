import React, { useState } from 'react'
import Logo from '@/assets/images/logo.png'
import { Container, Content, Image, Button } from '@/styles/pages/home'
import AuthModal from '@/components/common/modals/auth-modal'
import AppHead from '@/components/common/app-head'

const Home: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <AppHead title="Bem vindo" />

            <Container>
                <Content>
                    <Image src={Logo} alt="Desafio 90" />

                    <Button onClick={() => setIsModalOpen(true)}>Entrar</Button>
                    <Button>Cadastre-se</Button>
                </Content>
            </Container>

            <AuthModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onBackdropClick={() => setIsModalOpen(false)}
            />
        </>
    )
}

export default Home
