import React from 'react'
import * as yup from 'yup'
import { useMapState } from '@/hooks'
import { useForm } from 'react-hook-form'
import AppModal from '@/components/common/app-modal'
import { yupResolver } from '@hookform/resolvers/yup'
import { WeightService } from '@/services/weight.service'
import { AppModalInterface } from '@/interfaces/modal.interface'
import { Form, FormGroup, Button, Input, Label, Span } from './styled'
import { ResponseErrorInterface } from '@/interfaces/_response-error.interface'
import { AuthStateInterface } from '@/store/@interfaces/authState.interface'
import { authActions } from '@/store/reducers/auth.reducer'

interface UpdateWeightModalProps extends AppModalInterface {
    onUpdate: (data: number) => void
}

interface UpdateWeightForm {
    weight: string
}

const UpdateWeightModal: React.FC<UpdateWeightModalProps> = props => {
    const weightService = new WeightService()
    const { user } = useMapState('auth') as AuthStateInterface
    const { isOpen, onBackdropClick, onClose, onUpdate } = props

    const weightForm = yup.object().shape({
        weight: yup.number().required('Insira o seu peso')
    })

    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm<UpdateWeightForm>({ resolver: yupResolver(weightForm) })

    const handleSubmitForm = async (form: UpdateWeightForm) => {
        try {
            const updateWeightDTO = {
                userId: Number(user.id),
                weight: Number(form.weight)
            }

            await weightService.create(updateWeightDTO)
            onUpdate(updateWeightDTO.weight)
            setValue('weight', '')
            authActions.setUser({
                ...user,
                currentWeight: updateWeightDTO.weight
            })
        } catch (error: ResponseErrorInterface) {
            console.error('ERROR :', error)
        }
    }

    return (
        <AppModal
            width="90vw"
            maxWidth={420}
            maxHeight={420}
            isOpen={isOpen}
            onClickClose={onClose}
            onBackdropClick={onBackdropClick}
        >
            <Form onSubmit={handleSubmit(handleSubmitForm)}>
                <FormGroup>
                    <Label>Insira o seu peso atual</Label>
                    <Input
                        {...register('weight')}
                        type="number"
                        step="0.1"
                        min="0"
                    />
                    <Span>{errors.weight?.message}</Span>
                </FormGroup>

                <Button>Atualizar</Button>
            </Form>
        </AppModal>
    )
}

export default UpdateWeightModal
