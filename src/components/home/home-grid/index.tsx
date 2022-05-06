import React from 'react'
import { useRouter } from 'next/router'
import { CgGym } from 'react-icons/cg'
import { HiUserGroup } from 'react-icons/hi'
import { FaBalanceScale } from 'react-icons/fa'
import { MdRestaurantMenu } from 'react-icons/md'
import { Container, Grid, Card, Title, Icon } from './styles'

const HomeGrid: React.FC = () => {
    const router = useRouter()

    const items = [
        { title: 'Cárdapio', icon: <MdRestaurantMenu />, route: '/group' },
        { title: 'Exercícios', icon: <CgGym />, route: '/group' },
        { title: 'Grupo', icon: <HiUserGroup />, route: '/group' },
        { title: 'Calcular IMC', icon: <FaBalanceScale />, route: '/group' }
    ]

    return (
        <Container>
            <Grid>
                {items.map((item, index) => (
                    <Card key={index} onClick={() => router.push(item.route)}>
                        <Title>{item.title}</Title>
                        <Icon>{item.icon}</Icon>
                    </Card>
                ))}
            </Grid>
        </Container>
    )
}

export default HomeGrid
