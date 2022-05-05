import React from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Span, Form, Input, Label, Button, FormGroup } from './styles'
import { LoginCodeInterface } from '@/interfaces/login-code.interface'

interface CodeFormProps {
    onSubmit: (data: LoginCodeInterface) => void
}

const CodeForm: React.FC<CodeFormProps> = ({ onSubmit }) => {
    const codeForm = yup.object().shape({
        code: yup.string().required('Insira o código de acesso')
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginCodeInterface>({ resolver: yupResolver(codeForm) })

    const handleSubmitForm = (data: LoginCodeInterface) => onSubmit(data)

    return (
        <Form onSubmit={handleSubmit(handleSubmitForm)}>
            <FormGroup>
                <Label>Código de acesso</Label>
                <Input {...register('code')} />
                <Span>{errors.code?.message}</Span>
            </FormGroup>

            <Button type="submit">Login</Button>
        </Form>
    )
}

export default CodeForm
