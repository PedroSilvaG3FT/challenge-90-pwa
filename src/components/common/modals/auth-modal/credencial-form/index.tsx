import React from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Span, Form, Input, Label, Button, FormGroup } from './styles'
import { LoginFormInterface } from '@/interfaces/login-credential.interface'

interface CredencialFormProps {
    onSubmit: (data: LoginFormInterface) => void
}

const CredencialForm: React.FC<CredencialFormProps> = ({ onSubmit }) => {
    const authForm = yup.object().shape({
        email: yup.string().email('Email inválido').required('Insira um email'),
        password: yup.string().required('Insira a senha')
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginFormInterface>({ resolver: yupResolver(authForm) })

    const handleSubmitForm = (data: LoginFormInterface) => onSubmit(data)

    return (
        <Form onSubmit={handleSubmit(handleSubmitForm)}>
            <FormGroup>
                <Label>Email</Label>
                <Input type="email" {...register('email')} />
                <Span>{errors.email?.message}</Span>
            </FormGroup>

            <FormGroup>
                <Label>Senha</Label>
                <Input {...register('password')} type="password" />
                <Span>{errors.password?.message}</Span>
            </FormGroup>

            <Button type="submit">Login</Button>
        </Form>
    )
}

export default CredencialForm
