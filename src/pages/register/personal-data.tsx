import React from 'react'
import * as yup from 'yup'
import { useMapState } from '@/hooks'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import AppHead from '@/components/common/app-head'
import ResumeIcon from '@/assets/icons/resume.png'
import { yupResolver } from '@hookform/resolvers/yup'
import TitleContainer from '@/components/register/title-container'
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
    Span,
    Separator
} from '@/styles/pages/register'
import { useMask } from '@/hooks/mask.hook'

const PersonalData: React.FC = () => {
    const router = useRouter()
    const cpfMask = useMask('cpf')
    const phoneNumberMask = useMask('phoneNumber')
    const { model } = useMapState('register') as RegisterStateInterface

    const registerForm = yup.object().shape({
        name: yup.string().required('Insira o seu nome'),
        cpf: yup.string().required('Insira o seu CPF'),
        age: yup.string().required('Insira a sua idade'),
        phoneNumber: yup.string().required('Insira o número de telefone')
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<RegisterFormInterface>({ resolver: yupResolver(registerForm) })

    const handleSubmitForm = async (registerForm: RegisterFormInterface) => {
        const formDTO = {
            ...model,
            ...registerForm,
            cpf: cpfMask.getRawValue(registerForm.cpf as string),
            phoneNumber: phoneNumberMask.getRawValue(
                registerForm.phoneNumber as string
            )
        } as RegisterFormInterface

        registerActions.setRegisterModel(formDTO)
        router.push('/register/measurements')
    }

    return (
        <>
            <AppHead title="Cadastre - se" />

            <Container>
                <TitleContainer
                    image={ResumeIcon}
                    title="Insira os seus dados de acesso"
                />

                <Separator />

                <Form onSubmit={handleSubmit(handleSubmitForm)}>
                    <FormGroup>
                        <Label>Nome</Label>
                        <Input {...register('name')} type="text" />
                        <Span>{errors.name?.message}</Span>
                    </FormGroup>

                    <FormGroup>
                        <Label>CPF</Label>
                        <Input
                            {...cpfMask.directive}
                            {...register('cpf')}
                            type="text"
                        />
                        <Span>{errors.cpf?.message}</Span>
                    </FormGroup>

                    <FormGroup>
                        <Label>Idade</Label>
                        <Input
                            {...register('age')}
                            maxLength={3}
                            type="number"
                        />
                        <Span>{errors.age?.message}</Span>
                    </FormGroup>

                    <FormGroup>
                        <Label>Celular</Label>
                        <Input
                            {...phoneNumberMask.directive}
                            {...register('phoneNumber')}
                            type="text"
                        />
                        <Span>{errors.phoneNumber?.message}</Span>
                    </FormGroup>

                    <Button type="submit">Avançar</Button>
                </Form>
            </Container>
        </>
    )
}

export default PersonalData
