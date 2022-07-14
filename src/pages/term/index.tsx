import React from 'react'
import { useMapState } from '@/hooks'
import { useRouter } from 'next/router'
import AppHead from '@/components/common/app-head'
import { UserService } from '@/services/user.service'
import { AlertService } from '@/services/_alert.service'
import { authActions } from '@/store/reducers/auth.reducer'
import BubbleTextImg from '@/assets/images/animated/bubble-text.gif'
import { AuthStateInterface } from '@/store/@interfaces/authState.interface'
import { ResponseErrorInterface } from '@/interfaces/_response-error.interface'
import {
    Container,
    Button,
    Image,
    Paragraph,
    TextHighlight
} from '@/styles/pages/term'

const Term: React.FC = () => {
    const { user } = useMapState('auth') as AuthStateInterface
    const router = useRouter()
    const userService = new UserService()
    const alertService = new AlertService()

    const acceptTerm = async () => {
        try {
            const acceptTermDTO = { id: user.id, acceptTerm: true }
            await userService.update(acceptTermDTO)

            authActions.setUser({ ...user, acceptTerm: true })

            router.push('/waiting-approval')
        } catch (error: ResponseErrorInterface) {
            alertService.error(error.response.data.message)
        }
    }

    return (
        <>
            <AppHead title="Termos" />

            <Container>
                <Image src={BubbleTextImg} alt="termo" />

                <Paragraph>
                    O <TextHighlight>izacdesafio90dias</TextHighlight>, é um
                    aplicativo que te dá um resultado satisfatório em curto
                    prazo. Seguindo todas as recomendações sem desviar em
                    alimentos que não esteja no cardápio você pode perder de um
                    kg à 30 kg ao longo dos 90 dias. Toda semana você receberá
                    seu cardápio de acordo com o peso que é preciso perder e
                    receberá orientações de exercícios que não necessita de um
                    órgão acadêmico para se executar. Tendo a conclusão que o
                    izacdesafio90dias é muito rigoroso e restrito é necessário
                    entender que terá alguns efeitos colaterais no início até o
                    corpo se adaptar. Esse desafio não é recomendado para
                    pessoas com diabetes, Hipertireoidismo, pressão alta ou
                    possui alguma doença crônica.
                </Paragraph>

                <Button onClick={() => acceptTerm()}>Aceitar Termos</Button>
            </Container>
        </>
    )
}

export default Term
