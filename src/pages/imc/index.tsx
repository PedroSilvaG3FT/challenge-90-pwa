import React, { useState } from 'react'
import store from '@/store'
import { Container } from '@/styles/pages/imc'
import IMCForm from '@/components/imc/imc-form'
import AppHead from '@/components/common/app-head'
import IMCResult from '@/components/imc/imc-result'
import IMCDetails from '@/components/imc/imc-details'
import {
    IMCFormInterface,
    IMCResultInterface
} from '@/interfaces/imc.interface'

const IMC: React.FC = () => {
    const [result, setResult] = useState({} as IMCResultInterface)
    const state = store.getState()
    const { user } = state.auth

    const initialState: IMCFormInterface = {
        height: user.height as number,
        weight: user.currentWeight as number
    }

    const onResultChange = (result: IMCResultInterface) => {
        setResult(result)
    }

    return (
        <>
            <AppHead title="IMC" showHeader backTo="/home" />

            <Container showHeader>
                <IMCForm
                    initialState={initialState}
                    onResult={onResultChange}
                />

                <IMCResult imcType={result.type} />
                <IMCDetails result={result} />
            </Container>
        </>
    )
}

export default IMC
