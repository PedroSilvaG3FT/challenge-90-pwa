import React from 'react'
import store from '@/store'
import { useRouter } from 'next/router'
import AppHead from '@/components/common/app-head'
import { UserService } from '@/services/user.service'
import { AlertService } from '@/services/_alert.service'
import { Container } from '@/styles/pages/update-password'
import FormUpdatePassword from '@/components/update-password/form-update-password'
import { UpdatePasswordFormInterface } from '@/interfaces/updatePassword.interface'

const UpdatePassword: React.FC = () => {
    const state = store.getState()
    const { user } = state.auth

    const urlBackTo = '/home'
    const router = useRouter()

    const userService = new UserService()
    const alertService = new AlertService()

    const onSubmit = async (data: UpdatePasswordFormInterface) => {
        try {
            const updateDTO = {
                userId: Number(user.id),
                password: data.password
            }

            await userService.updatePassword(updateDTO)
            alertService.success('Senha atualizada com sucesso')

            setTimeout(() => router.push(urlBackTo), 4000)
        } catch (error) {
            alertService.error('Ocorreu um erro ao atualizar senha')
        }
    }

    return (
        <>
            <AppHead title="Atualizar Senha" showHeader backTo={urlBackTo} />

            <Container>
                <FormUpdatePassword onSubmit={onSubmit} />
            </Container>
        </>
    )
}

export default UpdatePassword
