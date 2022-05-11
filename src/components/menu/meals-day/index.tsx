import React, { useEffect } from 'react'
import { Container, Card, Title, Text } from './styles'
import { MenuMealInterface } from '@/interfaces/menu.interface'
import { useAnimation } from 'framer-motion'
import { showLeft } from '@/styles/animation'

interface MealsDayProps {
    data: MenuMealInterface[]
}

const MealsDay: React.FC<MealsDayProps> = ({ data }) => {
    const control = useAnimation()

    useEffect(() => {
        control.start('hidden')
        setTimeout(() => control.start('show'), 300)
    }, [data])

    return (
        <Container>
            {data.map((item, index) => (
                <Card
                    key={index}
                    animate={control}
                    initial={showLeft.initial}
                    variants={showLeft.variants}
                >
                    <Title>{item.typeMealName}</Title>
                    <Text>{item.descripition}</Text>
                </Card>
            ))}
        </Container>
    )
}

export default MealsDay
