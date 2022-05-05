import React from 'react'
import * as yup from 'yup'
import { useMapState } from '@/hooks'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import AppHead from '@/components/common/app-head'
import { yupResolver } from '@hookform/resolvers/yup'
import { UserService } from '@/services/user.service'
import { AlertService } from '@/services/_alert.service'
import { registerActions } from '@/store/reducers/register.reducer'
import { RegisterFormInterface } from '@/interfaces/user-register.interface'
import { RegisterStateInterface } from '@/store/@interfaces/registerState.interface'
import {
    Container,
    Form,
    FormGroup,
    Button,
    Input,
    Label,
    Span
} from '@/styles/pages/register'

const Register: React.FC = () => {
    const router = useRouter()
    const userService = new UserService()
    const alertService = new AlertService()
    const { model } = useMapState('register') as RegisterStateInterface

    const error = () => alertService.error('Wow so easy!')

    const registerForm = yup.object().shape({
        email: yup.string().email('Email inválido').required('Insira um email'),
        password: yup.string().required('Insira a senha'),
        confirmPassword: yup.string().required('Confirme a senha')
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<RegisterFormInterface>({ resolver: yupResolver(registerForm) })

    const hasUserEmail = async (email: string) => {
        try {
            const { data } = await userService.getByEmail(email)
            return !!data
        } catch (error) {
            console.error(error)
        }
    }

    const handleSubmitForm = async (registerForm: RegisterFormInterface) => {
        const hasUser = await hasUserEmail(registerForm.email as string)

        if (hasUser) {
            alertService.error('Esse email já está em uso ')
            return
        }

        registerActions.setRegisterModel({ ...model, ...registerForm })
        router.push('/register/personal-data')
    }

    return (
        <>
            <AppHead title="Cadastre - se" />

            <Container>
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

                    <FormGroup>
                        <Label>Confirmar Senha</Label>
                        <Input
                            {...register('confirmPassword')}
                            type="password"
                        />
                        <Span>{errors.confirmPassword?.message}</Span>
                    </FormGroup>

                    <Button type="submit">Avançar</Button>
                </Form>
            </Container>
        </>
    )
}

export default Register
