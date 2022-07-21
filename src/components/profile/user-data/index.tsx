import { useMapState } from '@/hooks'
import { useMask } from '@/hooks/mask.hook'
import { isFuture, isPast } from 'date-fns'
import Avatar from '@/assets/icons/avatar.png'
import { USER_TYPE } from '@/contants/user-type'
import React, { useEffect, useState } from 'react'
import { UserService } from '@/services/user.service'
import { AlertService } from '@/services/_alert.service'
import { PAYMENT_STATUS } from '@/contants/payment-status'
import { authActions } from '@/store/reducers/auth.reducer'
import { PaymentService } from '@/services/payment.service'
import { AvatarInterface } from '@/interfaces/avatar.interface'
import AvatarModal from '@/components/common/modals/avatar-modal'
import { AuthStateInterface } from '@/store/@interfaces/authState.interface'
import { ResponseErrorInterface } from '@/interfaces/_response-error.interface'
import {
    Text,
    Span,
    Label,
    Image,
    Title,
    Section,
    Article,
    Container,
    Separator,
    ImageContainer
} from './styles'

const UserData: React.FC = () => {
    const { getFormatValue } = useMask('cpf')
    const paymentService = new PaymentService()
    const alertService = new AlertService()
    const userService = new UserService()

    const [paymentStatus, setPaymentStatus] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { user } = useMapState('auth') as AuthStateInterface

    const isPaymentLate = paymentStatus === PAYMENT_STATUS.late
    const containerClass = isPaymentLate ? 'danger' : ''

    useEffect(() => {
        getPayment()
    }, [])

    const getPayment = async () => {
        if (user.type === USER_TYPE.challenge) return

        const { data } = await paymentService.getByUserId(Number(user.id))

        const statusPayment = data.map((item: any) => {
            const dueDate = new Date(item.dueDate)

            if (!item.active) item.status = PAYMENT_STATUS.paid
            else if (isFuture(dueDate)) item.status = PAYMENT_STATUS.pending
            if (isPast(dueDate) && item.active)
                item.status = PAYMENT_STATUS.late

            return item.status
        })

        if (statusPayment.includes(PAYMENT_STATUS.late))
            setPaymentStatus(PAYMENT_STATUS.late)
    }

    const saveUserImage = async ({ imageUrl: image }: AvatarInterface) => {
        try {
            await userService.update({ id: user.id, image })

            authActions.setUser({ ...user, image })
            setIsModalOpen(false)
            alertService.success('Imagem atualizada com sucesso')
        } catch (error: ResponseErrorInterface) {
            alertService.error(error.response.data.message)
        }
    }

    return (
        <>
            <Container className={containerClass}>
                <ImageContainer onClick={() => setIsModalOpen(true)}>
                    <Image src={user.image || Avatar} />
                    <Label>Alterar avatar</Label>
                </ImageContainer>

                <Section>
                    <Text>{user.name}</Text>

                    <Separator />

                    <Article>
                        <Title>Email:</Title>
                        <Text>{user.email}</Text>
                    </Article>

                    <Article>
                        <Title>Dia de pagamento:</Title>
                        <Text>{user.payday}</Text>
                    </Article>

                    <Article>
                        <Title>CPF:</Title>
                        <Text>{getFormatValue(user.cpf)}</Text>
                    </Article>

                    <Article>
                        <Title>Peso Inicial:</Title>
                        <Text>{user.startingWeight} kg</Text>
                    </Article>
                </Section>

                {isPaymentLate && <Span>Pagamento em Atraso</Span>}
            </Container>

            <AvatarModal
                isOpen={isModalOpen}
                onSave={saveUserImage}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    )
}

export default UserData
