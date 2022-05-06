import { BsWhatsapp } from 'react-icons/bs'
import Avatar from '@/assets/icons/avatar.png'
import React, { useEffect, useState } from 'react'
import AppHead from '@/components/common/app-head'
import { UserService } from '@/services/user.service'
import UserInterface from '@/interfaces/user.interface'
import { AlertService } from '@/services/_alert.service'
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

const Group: React.FC = () => {
    const userService = new UserService()
    const alertService = new AlertService()
    const [userList, setUserList] = useState<UserInterface[]>([])

    useEffect(() => {
        getUserList()
    }, [])

    const getUserList = async () => {
        try {
            const { data } = await userService.getAll()
            setUserList(data)
        } catch (error: ResponseErrorInterface) {
            alertService.error(error.response.data.message)
        }
    }

    return (
        <>
            <AppHead title="Grupo" showHeader backTo="/home" />

            <Container showHeader>
                <Grid>
                    {userList.map((item, index) => (
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

                <Button>
                    Participe do grupo no WhatsApp
                    <BsWhatsapp />
                </Button>
            </Container>
        </>
    )
}

export default Group
