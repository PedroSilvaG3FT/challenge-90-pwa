import React from 'react'
import { useRouter } from 'next/router'
import { CgGym } from 'react-icons/cg'
import { HiUserGroup } from 'react-icons/hi'
import { FaBalanceScale } from 'react-icons/fa'
import { MdRestaurantMenu } from 'react-icons/md'
import { Container, Grid, Card, Title, Icon } from './styles'
import ScrollAnimation from '@/components/ui/scroll-animation'

const HomeGrid: React.FC = () => {
    const router = useRouter()

    const items = [
        {
            title: 'Cárdapio',
            icon: <MdRestaurantMenu />,
            animation: 'fadeInLeft',
            route: '/menu'
        },
        {
            title: 'Exercícios',
            icon: <CgGym />,
            animation: 'fadeInRight',
            route: '/exercise'
        },
        {
            title: 'Grupo',
            icon: <HiUserGroup />,
            animation: 'fadeInLeft',
            route: '/group'
        },
        {
            title: 'Calcular IMC',
            icon: <FaBalanceScale />,
            animation: 'fadeInRight',
            route: '/imc'
        }
    ]

    return (
        <Container>
            <Grid>
                {items.map((item, index) => (
                    <ScrollAnimation key={index} animation={item.animation}>
                        <Card onClick={() => router.push(item.route)}>
                            <Title>{item.title}</Title>
                            <Icon>{item.icon}</Icon>
                        </Card>
                    </ScrollAnimation>
                ))}
            </Grid>
        </Container>
    )
}

export default HomeGrid
