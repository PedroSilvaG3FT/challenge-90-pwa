import React from 'react'
import * as yup from 'yup'
import Logo from '@/assets/images/logo.png'
import AppModal from '@/components/common/app-modal'
import { yupResolver } from '@hookform/resolvers/yup'
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
import { useForm } from 'react-hook-form'

interface AuthModalProps extends AppModalInterface {
    isOpen: boolean
}

interface LoginFormInterface {
    email: string
    password: string
}

const AuthModal: React.FC<AuthModalProps> = props => {
    const { isOpen, onBackdropClick, onClose } = props

    const authForm = yup.object().shape({
        email: yup.string().email('Email inválido').required('Insira um email'),
        password: yup.string().required('Insira a senha')
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginFormInterface>({ resolver: yupResolver(authForm) })

    const handleSubmitForm = (data: LoginFormInterface) => {
        console.log('DATA :', data)
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
                        <Input {...register('password')} />
                        <Span>{errors.password?.message}</Span>
                    </FormGroup>

                    <Button type="submit">Login</Button>
                </Form>
            </Body>
        </AppModal>
    )
}

export default AuthModal
