import { useMapState } from '@/hooks'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Customer from '@/assets/icons/customer.png'
import AppHead from '@/components/common/app-head'
import { UserService } from '@/services/user.service'
import { AlertService } from '@/services/_alert.service'
import { authActions } from '@/store/reducers/auth.reducer'
import SupportImg from '@/assets/images/animated/support.gif'
import { AuthStateInterface } from '@/store/@interfaces/authState.interface'
import { ResponseErrorInterface } from '@/interfaces/_response-error.interface'
import {
    Image,
    Button,
    Container,
    Paragraph,
    TextHighlight
} from '@/styles/pages/waiting-approval'

const WaitingApproval: React.FC = () => {
    const router = useRouter()
    const userService = new UserService()
    const alertService = new AlertService()
    const { user } = useMapState('auth') as AuthStateInterface

    useEffect(() => {
        getUser()
    }, [])

    const backToLogin = () => {
        authActions.clearState()
        router.push('/')
    }

    const getUser = async () => {
        try {
            const { data } = await userService.getById(user.id as number)

            console.log('USER :', data)
            if (data.active) {
                authActions.setUser({ ...user, ...data, active: true })
                router.push('/home')
            }
        } catch (error: ResponseErrorInterface) {
            alertService.error(error.response.data.message)
        }
    }

    return (
        <>
            <AppHead title="Aguardando Aprovação" />

            <Container>
                <Image src={SupportImg} alt="Verificando" />

                <Paragraph>
                    Estamos avaliando o seu perfil para indicar o melhor caminho
                    para o seu <TextHighlight>Desafio</TextHighlight>
                </Paragraph>

                <Button onClick={getUser}>Validar Aprovação</Button>
                <Button onClick={() => backToLogin()}>Voltar para login</Button>
            </Container>
        </>
    )
}

export default WaitingApproval
