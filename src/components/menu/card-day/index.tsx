import React from 'react'
import { Card, Title } from './styles'
import MealsDay from '@/components/menu/meals-day'
import { MenuDayInterface } from '@/interfaces/menu.interface'

interface CardDayProps {
    data: MenuDayInterface
}

const CardDay: React.FC<CardDayProps> = ({ data }) => {
    if (!Object.keys(data).length) return <></>

    return (
        <Card>
            <Title>{data.dayName}</Title>
            <MealsDay data={data.meals} />
        </Card>
    )
}

export default CardDay
