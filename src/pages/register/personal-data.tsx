import React from 'react'
import * as yup from 'yup'
import { useMapState } from '@/hooks'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import AppHead from '@/components/common/app-head'
import { yupResolver } from '@hookform/resolvers/yup'
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

const PersonalData: React.FC = () => {
    const router = useRouter()
    const alertService = new AlertService()
    const { model } = useMapState('register') as RegisterStateInterface

    const success = () => alertService.success('Wow so easy!')

    const registerForm = yup.object().shape({
        name: yup.string().required('Insira o seu nome'),
        cpf: yup.string().required('Insira o seu CPF'),
        age: yup.string().required('Insira a sua idade'),
        phoneNumber: yup.number().required('Insira o número de telefone')
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<RegisterFormInterface>({ resolver: yupResolver(registerForm) })

    const handleSubmitForm = async (registerForm: RegisterFormInterface) => {
        console.log('Personal Data', registerForm)
        registerActions.setRegisterModel({ ...model, ...registerForm })

        router.push('/register/measurements')
    }

    return (
        <>
            <AppHead title="Cadastre - se" />

            <Container>
                <Form onSubmit={handleSubmit(handleSubmitForm)}>
                    <FormGroup>
                        <Label>Nome</Label>
                        <Input {...register('name')} type="text" />
                        <Span>{errors.name?.message}</Span>
                    </FormGroup>

                    <FormGroup>
                        <Label>CPF</Label>
                        <Input {...register('cpf')} type="text" />
                        <Span>{errors.cpf?.message}</Span>
                    </FormGroup>

                    <FormGroup>
                        <Label>Idade</Label>
                        <Input {...register('age')} type="number" />
                        <Span>{errors.age?.message}</Span>
                    </FormGroup>

                    <FormGroup>
                        <Label>Celular</Label>
                        <Input {...register('phoneNumber')} type="number" />
                        <Span>{errors.phoneNumber?.message}</Span>
                    </FormGroup>

                    <Button type="submit">Avançar</Button>
                </Form>
            </Container>
        </>
    )
}

export default PersonalData
