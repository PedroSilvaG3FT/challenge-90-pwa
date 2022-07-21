import React, { useState } from 'react'
import Logo from '@/assets/images/logo.png'
import AppModal from '@/components/common/app-modal'
import { AuthService } from '@/services/auth.service'
import { UserService } from '@/services/user.service'
import { AlertService } from '@/services/_alert.service'
import { authActions } from '@/store/reducers/auth.reducer'
import { AppModalInterface } from '@/interfaces/modal.interface'
import { Body, Link, Header, Footer, ImageLogo } from './styles'
import { LoginCodeInterface } from '@/interfaces/login-code.interface'
import CodeForm from '@/components/common/modals/auth-modal/code-form'
import { LoginFormInterface } from '@/interfaces/login-credential.interface'
import { ResponseErrorInterface } from '@/interfaces/_response-error.interface'
import CredencialForm from '@/components/common/modals/auth-modal/credencial-form'

interface AuthModalProps extends AppModalInterface {
    onLogin: () => void
}

const AuthModal: React.FC<AuthModalProps> = props => {
    const { isOpen, onBackdropClick, onClose, onLogin } = props
    const authService = new AuthService()
    const userService = new UserService()
    const alertService = new AlertService()

    const [isCredential, setIsCredential] = useState(true)
    const buttonLabel = isCredential ? 'Entrar com código' : 'Voltar'

    const getUser = async (id: number, token: string) => {
        try {
            const { data: user } = await userService.getById(id)
            console.log('LOGIN SET ', user)
            authActions.setUser(user)
            authActions.setToken(token)
        } catch (error) {
            throw error
        }
    }

    const handleSubmitCredentials = async (loginForm: LoginFormInterface) => {
        try {
            const { data } = await authService.login(loginForm)
            await getUser(data.user.id, data.token)

            onLogin()
        } catch (error: ResponseErrorInterface) {
            alertService.error(error.response.data.message)
        }
    }

    const handleSubmitCode = async ({ code }: LoginCodeInterface) => {
        try {
            const { data } = await authService.loginCode(code)
            await getUser(data.user.id, data.token)

            onLogin()
        } catch (error: ResponseErrorInterface) {
            alertService.error(error.response.data.message)
        }
    }

    return (
        <AppModal
            width="90vw"
            maxWidth={420}
            isOpen={isOpen}
            onClickClose={onClose}
            onBackdropClick={onBackdropClick}
            header={
                <Header>
                    <ImageLogo src={Logo} alt="Desafio 90" />
                </Header>
            }
            footer={
                <Footer>
                    <Link onClick={() => setIsCredential(!isCredential)}>
                        {buttonLabel}
                    </Link>
                </Footer>
            }
        >
            <Body>
                {isCredential ? (
                    <CredencialForm onSubmit={handleSubmitCredentials} />
                ) : (
                    <CodeForm onSubmit={handleSubmitCode} />
                )}
            </Body>
        </AppModal>
    )
}

export default AuthModal
