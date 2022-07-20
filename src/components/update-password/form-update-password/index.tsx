import React from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Form, FormGroup, Button, Input, Label, Span } from './styles'
import { UpdatePasswordFormInterface } from '@/interfaces/updatePassword.interface'
import { AlertService } from '@/services/_alert.service'

interface FormUpdatePasswordProps {
    onSubmit: (data: UpdatePasswordFormInterface) => void
}

const FormUpdatePassword: React.FC<FormUpdatePasswordProps> = props => {
    const { onSubmit } = props
    const alertService = new AlertService()

    const updatePasswordForm = yup.object().shape({
        password: yup.string().required('Insira a senha'),
        confirmPassword: yup.string().required('Confirme a senha')
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<UpdatePasswordFormInterface>({
        resolver: yupResolver(updatePasswordForm)
    })

    const handleSubmitForm = (form: UpdatePasswordFormInterface) => {
        const { password, confirmPassword } = form

        if (password !== confirmPassword) {
            alertService.info('As senhas não coincidem')
            return
        }

        onSubmit(form)
    }

    return (
        <Form onSubmit={handleSubmit(handleSubmitForm)}>
            <FormGroup>
                <Label>Senha</Label>
                <Input {...register('password')} type="password" />
                <Span>{errors.password?.message}</Span>
            </FormGroup>

            <FormGroup>
                <Label>Confirmar Senha</Label>
                <Input {...register('confirmPassword')} type="password" />
                <Span>{errors.confirmPassword?.message}</Span>
            </FormGroup>

            <Button type="submit">Avançar</Button>
        </Form>
    )
}

export default FormUpdatePassword
