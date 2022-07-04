import { useMapState } from '@/hooks'
import { BsWhatsapp } from 'react-icons/bs'
import Avatar from '@/assets/icons/avatar.png'
import React, { useEffect } from 'react'
import AppHead from '@/components/common/app-head'
import { UserService } from '@/services/user.service'
import { AlertService } from '@/services/_alert.service'
import { GroupStateInterface } from '@/store/@interfaces/groupState.interface'
import { ResponseErrorInterface } from '@/interfaces/_response-error.interface'
import {
    Grid,
    Card,
    Text,
    Image,
    Title,
    Strong,
    Button,
    Article,
    Container,
    Separator
} from '@/styles/pages/group'
import { groupActions } from '@/store/reducers/group.reducer'

const Group: React.FC = () => {
    const userService = new UserService()
    const alertService = new AlertService()
    const { group } = useMapState('group') as GroupStateInterface
    const whatsappURL = 'https://chat.whatsapp.com/HeALxPolsT62QjB0SznzBj'

    useEffect(() => {
        getUserList()
    }, [])

    const getUserList = async () => {
        try {
            const { data } = await userService.getAll()
            groupActions.setGroup(data)
        } catch (error: ResponseErrorInterface) {
            alertService.error(error.response.data.message)
        }
    }

    const openWhatsapp = () => window.open(whatsappURL, '_blank')

    return (
        <>
            <AppHead title="Grupo" showHeader backTo="/home" />

            <Container showHeader>
                <Grid>
                    {group.map((item, index) => (
                        <Card key={index}>
                            <Image src={item.image || Avatar} />

                            <Title>{item.name}</Title>

                            <Separator />

                            <Article>
                                <Strong>Peso Inicial: </Strong>
                                <Text>{item.startingWeight}kg</Text>
                            </Article>

                            <Article>
                                <Strong>Peso Atual: </Strong>
                                <Text>{item.currentWeight}kg</Text>
                            </Article>
                        </Card>
                    ))}
                </Grid>

                <Button onClick={() => openWhatsapp()}>
                    Participe do grupo no WhatsApp
                    <BsWhatsapp />
                </Button>
            </Container>
        </>
    )
}

export default Group
