import React from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import Logo from '@/assets/images/logo.png'
import AppModal from '@/components/common/app-modal'
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthService } from '@/services/auth.service'
import { authActions } from '@/store/reducers/auth.reducer'
import { AppModalInterface } from '@/interfaces/modal.interface'
import {
    Body,
    ImageLogo,
    Header,
    Form,
    FormGroup,
    Input,
    Label,
    Span,
    Button
} from './styles'
import { UserService } from '@/services/user.service'

interface AuthModalProps extends AppModalInterface {
    onLogin: () => void
}

interface LoginFormInterface {
    email: string
    password: string
}

const AuthModal: React.FC<AuthModalProps> = props => {
    const { isOpen, onBackdropClick, onClose, onLogin } = props
    const authService = new AuthService()
    const userService = new UserService()

    const authForm = yup.object().shape({
        email: yup.string().email('Email inválido').required('Insira um email'),
        password: yup.string().required('Insira a senha')
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginFormInterface>({ resolver: yupResolver(authForm) })

    const handleSubmitForm = async (loginForm: LoginFormInterface) => {
        try {
            const { data } = await authService.login(loginForm)
            const { data: user } = await userService.getById(data.user.id)

            authActions.setUser(user)
            authActions.setToken(data.token)

            onLogin()
        } catch (error) {
            console.error(error)
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
        >
            <Body>
                <Form onSubmit={handleSubmit(handleSubmitForm)}>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input {...register('email')} />
                        <Span>{errors.email?.message}</Span>
                    </FormGroup>

                    <FormGroup>
                        <Label>Senha</Label>
                        <Input {...register('password')} type="password" />
                        <Span>{errors.password?.message}</Span>
                    </FormGroup>

                    <Button type="submit">Login</Button>
                </Form>
            </Body>
        </AppModal>
    )
}

export default AuthModal
