import * as yup from 'yup'
import { useMapState } from '@/hooks'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useMask } from '@/hooks/mask.hook'
import { yupResolver } from '@hookform/resolvers/yup'
import { UserService } from '@/services/user.service'
import { AlertService } from '@/services/_alert.service'
import { authActions } from '@/store/reducers/auth.reducer'
import { AuthStateInterface } from '@/store/@interfaces/authState.interface'
import { ResponseErrorInterface } from '@/interfaces/_response-error.interface'
import {
    Container,
    FormGroup,
    Button,
    Input,
    Label,
    Form,
    Span,
    Row
} from './styles'
import { setLoading } from '@/hooks/loading.hook'

const ProfileForm: React.FC = () => {
    const userService = new UserService()
    const alertService = new AlertService()
    const phoneNumberMask = useMask('phoneNumber')
    const { user } = useMapState('auth') as AuthStateInterface

    const profileForm = yup.object().shape({
        height: yup.string().required('Insira a sua Altura'),
        phoneNumber: yup.string().required('Insira o número de telefone')
    })

    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm<any>({ resolver: yupResolver(profileForm) })

    useEffect(() => {
        initForm()
    }, [])

    const initForm = () => {
        const phoneNumber = phoneNumberMask.getFormatValue(
            String(user.phoneNumber)
        )
        setValue('height', user.height)
        setValue('phoneNumber', phoneNumber)
    }

    const handleSubmitForm = async (profileForm: any) => {
        try {
            setLoading(true, 'Atualizando os seus dados')
            const rawPhoneNumber = phoneNumberMask.getRawValue(
                profileForm.phoneNumber
            )
            const profileDTO = {
                id: user.id,
                height: Number(profileForm.height),
                phoneNumber: Number(rawPhoneNumber)
            }

            await userService.update(profileDTO)
            authActions.setUser({ ...user, ...profileDTO })
            alertService.success('Dados atualizados com sucesso')
        } catch (error: ResponseErrorInterface) {
            alertService.error(error.response.data.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit(handleSubmitForm)}>
                <Row>
                    <FormGroup>
                        <Label>Celular</Label>
                        <Input
                            {...phoneNumberMask.directive}
                            {...register('phoneNumber')}
                            type="text"
                        />
                        <Span>{errors.phoneNumber?.message}</Span>
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
                </Row>

                <Button type="submit">Salvar</Button>
            </Form>
        </Container>
    )
}

export default ProfileForm
