import React, { useEffect } from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { Form, Card, Text, Input } from './styles'
import { IMCService } from '@/services/_imc.service'
import { yupResolver } from '@hookform/resolvers/yup'
import {
    IMCFormInterface,
    IMCResultInterface
} from '@/interfaces/imc.interface'
import ScrollAnimation from '@/components/ui/scroll-animation'

interface IMCFormProps {
    initialState?: IMCFormInterface
    onResult: (value: IMCResultInterface) => void
}

const IMCForm: React.FC<IMCFormProps> = props => {
    const { initialState, onResult } = props
    const imcService = new IMCService()

    const imcForm = yup.object().shape({
        height: yup.string().required('Insira a sua Altura'),
        weight: yup.string().required('Insira o peso')
    })

    const { watch, register, setValue } = useForm<IMCFormInterface>({
        resolver: yupResolver(imcForm)
    })

    useEffect(() => {
        initForm()
    }, [])

    useEffect(() => {
        const subscription = watch(value => updateResult(value))
        return () => subscription.unsubscribe()
    }, [watch])

    const getFormValue = (model: IMCFormInterface) => {
        const weight = Number(model.weight)
        const height = Number(imcService.convertToCm(model.height))

        return { weight, height }
    }

    const initForm = () => {
        if (!initialState) return

        const { weight, height } = getFormValue(initialState)

        setValue('weight', weight)
        setValue('height', height)

        updateResult({ weight, height })
    }

    const updateResult = (imcFormModel: any) => {
        const { weight, height } = getFormValue(imcFormModel)
        if (!weight || !height) return

        const result = imcService.getResult(weight, height)
        onResult(result)
    }

    return (
        <Form>
            <ScrollAnimation animation="fadeInLeft">
                <Card>
                    <Text>Peso</Text>
                    <Input type="number" {...register('weight')} />
                </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInRight">
                <Card>
                    <Text>Altura</Text>
                    <Input type="number" {...register('height')} />
                </Card>
            </ScrollAnimation>
        </Form>
    )
}

export default IMCForm
