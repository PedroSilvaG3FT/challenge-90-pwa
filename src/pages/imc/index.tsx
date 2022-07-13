import React, { useState } from 'react'
import store from '@/store'
import IMCForm from '@/components/imc/imc-form'
import AppHead from '@/components/common/app-head'
import { Container } from '@/styles/pages/exercise'
import { IMCFormInterface } from '@/interfaces/imc.interface'
import { IMC_DESCRIPTION } from '@/contants/imc'

const IMC: React.FC = () => {
    const [result, setResult] = useState('')
    const state = store.getState()
    const { user } = state.auth

    const initialState: IMCFormInterface = {
        height: user.height as number,
        weight: user.currentWeight as number
    }

    const onResultChange = (imcType: number) => {
        setResult(IMC_DESCRIPTION[imcType])
    }

    return (
        <>
            <AppHead title="IMC" showHeader backTo="/home" />

            <Container showHeader>
                <IMCForm
                    initialState={initialState}
                    onResult={onResultChange}
                />

                {result}
            </Container>
        </>
    )
}

export default IMC
