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

const Measurements: React.FC = () => {
    const router = useRouter()
    const alertService = new AlertService()
    const { model } = useMapState('register') as RegisterStateInterface

    const success = () => alertService.success('Wow so easy!')
    const warning = () => alertService.warn('Wow so easy!')
    const error = () => alertService.error('Wow so easy!')

    const registerForm = yup.object().shape({
        startingWeight: yup.number().required('Insira o Peso Inicial'),
        height: yup.number().required('Insira a sua Altura')
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<RegisterFormInterface>({ resolver: yupResolver(registerForm) })

    const handleSubmitForm = async (registerForm: RegisterFormInterface) => {
        registerActions.setRegisterModel({ ...model, ...registerForm })

        console.log('measurements', registerForm)
        router.push('/register/measurements')
    }

    return (
        <>
            <AppHead title="Cadastre - se" />

            <Container>
                <Form onSubmit={handleSubmit(handleSubmitForm)}>
                    <FormGroup>
                        <Label>Peso Inicial</Label>
                        <Input {...register('startingWeight')} type="number" />
                        <Span>{errors.startingWeight?.message}</Span>
                    </FormGroup>

                    <FormGroup>
                        <Label>Altura</Label>
                        <Input {...register('height')} type="number" />
                        <Span>{errors.height?.message}</Span>
                    </FormGroup>

                    <Button type="submit">Avançar</Button>
                </Form>
            </Container>
        </>
    )
}

export default Measurements
