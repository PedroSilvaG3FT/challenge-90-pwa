import React from 'react'
import { CgGym } from 'react-icons/cg'
import { HiUserGroup } from 'react-icons/hi'
import { FaBalanceScale } from 'react-icons/fa'
import { MdRestaurantMenu } from 'react-icons/md'
import { Container, Grid, Card, Title, Icon } from './styles'

const HomeGrid: React.FC = () => {
    const items = [
        { title: 'Cárdapio', icon: <MdRestaurantMenu />, route: '' },
        { title: 'Exercícios', icon: <CgGym />, route: '' },
        { title: 'Grupo', icon: <HiUserGroup />, route: '' },
        { title: 'Calcular IMC', icon: <FaBalanceScale />, route: '' }
    ]

    return (
        <Container>
            <Grid>
                {items.map((item, index) => (
                    <Card key={index}>
                        <Title>{item.title}</Title>
                        <Icon>{item.icon}</Icon>
                    </Card>
                ))}
            </Grid>
        </Container>
    )
}

export default HomeGrid
