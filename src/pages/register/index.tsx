import React from 'react'
import AppHead from '@/components/common/app-head'
import { Container, Button } from '@/styles/pages/register'
import { AlertService } from '@/services/_alert.service'

const Register: React.FC = () => {
    const alertService = new AlertService()

    const success = () => alertService.success('Wow so easy!')
    const warning = () => alertService.warn('Wow so easy!')
    const error = () => alertService.error('Wow so easy!')

    return (
        <>
            <AppHead title="Cadastre - se" />

            <Container>
                CADASTRO
                <Button onClick={success}>Sucesso</Button>
                <Button onClick={warning}>warning</Button>
                <Button onClick={error}>error</Button>
            </Container>
        </>
    )
}

export default Register
