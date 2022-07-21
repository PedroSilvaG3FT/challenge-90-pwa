import React from 'react'
import Link from 'next/link'
import AppHead from '@/components/common/app-head'
import SecurityImg from '@/assets/images/security.png'
import { Container, Text, Image } from '@/styles/pages/no-access'

const NoAccess: React.FC = () => {
    return (
        <>
            <AppHead title="Sem Acesso" />

            <Container>
                <Image src={SecurityImg} alt="Volte para o login" />
                <Text>Opa, você não tem acesso!</Text>
                <Link href="/">Voltar para o login</Link>
            </Container>
        </>
    )
}

export default NoAccess
