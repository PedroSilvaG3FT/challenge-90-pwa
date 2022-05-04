import AppHead from '@/components/common/app-head'
import { AlertService } from '@/services/_alert.service'
import React from 'react'

// import { Container } from './styles';

const Register: React.FC = () => {
    const alertService = new AlertService()

    const notify = () => alertService.success('Wow so easy!')

    return (
        <>
            <AppHead title="Cadastre - se" />

            <div>
                CADASTRO
                <button onClick={notify}>Notify!</button>
            </div>
        </>
    )
}

export default Register
