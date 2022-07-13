import React, { useEffect } from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { IMC_DESCRIPTION, IMC_TYPES } from '@/contants/imc'
import { IMCFormInterface } from '@/interfaces/imc.interface'
import { Form, Card, Text, Input } from './styles'

interface IMCFormProps {
    initialState?: IMCFormInterface
    onResult: (value: number) => void
}

const IMCForm: React.FC<IMCFormProps> = props => {
    const { initialState, onResult } = props
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
        const subscription = watch(value => onFormChange(value))
        return () => subscription.unsubscribe()
    }, [watch])

    function calcularIMC(weight: number, height: number) {
        height = height / 100
        return weight / (height * height)
    }

    function getIMCType(imc: number) {
        if (imc < 17) return IMC_TYPES.veryUnderweight
        else if (imc > 17 && imc <= 18.49) return IMC_TYPES.underweight
        else if (imc >= 18.5 && imc <= 24.99) return IMC_TYPES.normal
        else if (imc >= 25 && imc <= 29.99) return IMC_TYPES.overweight
        else if (imc >= 30 && imc <= 34.99) return IMC_TYPES.obesityOne
        else return IMC_TYPES.obesityOne
    }

    const validIMC = (weight: number, height: number) => {
        const imc = calcularIMC(weight, height)
        const imcType = getIMCType(imc)

        return imcType
    }

    const convertToCm = (value: number | string) => {
        const initial = typeof value === 'number' ? String(value) : value

        return initial.replace('.', '')
    }

    const initForm = () => {
        if (!initialState) return

        const weight = Number(convertToCm(initialState.height))
        const height = Number(convertToCm(initialState.weight))

        setValue('weight', weight)
        setValue('height', height)

        const result = validIMC(weight, height)
        onResult(result)
    }

    const onFormChange = (imcFormModel: any) => {
        imcFormModel.height = convertToCm(imcFormModel.height)

        const weight = Number(imcFormModel.weight)
        const height = Number(imcFormModel.height)

        if (!weight || !height) return

        const result = validIMC(weight, height)
        onResult(result)
    }

    return (
        <Form>
            <Card>
                <Text>Peso</Text>
                <Input type="text" {...register('weight')} />
            </Card>

            <Card>
                <Text>Altura</Text>
                <Input type="text" {...register('height')} />
            </Card>
        </Form>
    )
}

export default IMCForm
