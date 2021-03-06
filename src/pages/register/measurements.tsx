import React from 'react'
import * as yup from 'yup'
import Link from 'next/link'
import { useMapState } from '@/hooks'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import AppHead from '@/components/common/app-head'
import MeasureIcon from '@/assets/icons/measure.png'
import { yupResolver } from '@hookform/resolvers/yup'
import { UserService } from '@/services/user.service'
import { AuthService } from '@/services/auth.service'
import { AlertService } from '@/services/_alert.service'
import { authActions } from '@/store/reducers/auth.reducer'
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
import { setLoading } from '@/hooks/loading.hook'

const Measurements: React.FC = () => {
    const router = useRouter()
    const userService = new UserService()
    const authService = new AuthService()
    const alertService = new AlertService()
    const { model } = useMapState('register') as RegisterStateInterface

    const registerForm = yup.object().shape({
        startingWeight: yup.string().required('Insira o Peso Inicial'),
        height: yup.string().required('Insira a sua Altura')
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<RegisterFormInterface>({ resolver: yupResolver(registerForm) })

    const getUser = async (id: number, token: string) => {
        try {
            setLoading(true, 'Preparando usuario')
            const { data: user } = await userService.getById(id)

            authActions.setUser(user)
            authActions.setToken(token)
        } catch (error) {
            throw error
        }
    }

    const handleLogin = async ({ email, password }: RegisterFormInterface) => {
        try {
            setLoading(true, 'Validando acessos de login')
            const { data } = await authService.login({ email, password })
            await getUser(data.user.id, data.token)
        } catch (error) {
            throw error
        }
    }

    const handleSubmitForm = async (registerForm: RegisterFormInterface) => {
        try {
            setLoading(true, 'Criando usu??rio')
            const formDTO = { ...model, ...registerForm }
            registerActions.setRegisterModel(formDTO)

            const userRegisterDTO = Object.assign({}, formDTO)
            delete userRegisterDTO.confirmPassword

            const { data } = await userService.create(userRegisterDTO)
            await handleLogin(formDTO)

            alertService.success(data.message)
            router.push('/term')
        } catch (error) {
            alertService.error('Ocorreu um erro ao finalizar cadastro')
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <AppHead title="Cadastre - se" />

            <Container>
                <TitleContainer
                    image={MeasureIcon}
                    title="Quase l??, insira as suas medidas"
                />

                <Separator />

                <Form onSubmit={handleSubmit(handleSubmitForm)}>
                    <FormGroup>
                        <Label>Peso Inicial</Label>
                        <Input
                            {...register('startingWeight')}
                            type="number"
                            step=".01"
                        />
                        <Span>{errors.startingWeight?.message}</Span>
                    </FormGroup>

                    <FormGroup>
                        <Label>Altura (m)</Label>
                        <Input
                            {...register('height')}
                            type="number"
                            step=".01"
                        />
                        <Span>{errors.height?.message}</Span>
                    </FormGroup>

                    <Button type="submit">Avan??ar</Button>
                </Form>

                <Link href="/">Voltar para Login</Link>
            </Container>
        </>
    )
}

export default Measurements
