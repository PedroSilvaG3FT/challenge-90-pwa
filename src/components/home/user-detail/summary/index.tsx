import { useMapState } from '@/hooks'
import Theme from '@/styles/css/ts/theme'
import { differenceInDays } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { Container, Article, Title } from './styles'
import ProgressCircle from '@/components/common/progress-circle'
import { AuthStateInterface } from '@/store/@interfaces/authState.interface'

interface SummaryItem {
    title: string
    label: string
    color: string
    percent: number
}

const Summary: React.FC = () => {
    const [items, setItems] = useState<SummaryItem[]>([])
    const { user } = useMapState('auth') as AuthStateInterface

    useEffect(() => initSummary(), [user])

    const getPercent = (value: number, max: number) => (value * 100) / max

    const initSummary = () => {
        const dayProgress = getProgressDay()
        const weekProgress = getProgressWeek()
        const finalProgress = getProgressFinal()

        setItems([dayProgress, weekProgress, finalProgress])
    }

    const getProgressDay = () => {
        const maxDay = 90
        const currentDay = new Date()
        const initalDay = new Date(user.dateApproval as Date)
        const countDay = differenceInDays(currentDay, initalDay)

        const days = countDay > maxDay ? maxDay : countDay

        return {
            title: 'Dias',
            color: Theme.colors.green,
            label: `${days}/${maxDay}`,
            percent: getPercent(days, 90)
        }
    }

    const getProgressWeek = () => {
        const { currentWeight, goalWeek } = user

        return {
            title: 'Meta da semana',
            color: Theme.colors.yellow,
            label: `${currentWeight}/${goalWeek} kg`,
            percent: getPercent(Number(goalWeek), Number(currentWeight))
        }
    }

    const getProgressFinal = () => {
        const { currentWeight, goalWeight } = user
        return {
            title: 'Meta Final',
            color: Theme.colors.primary,
            label: `${currentWeight}/${goalWeight} kg`,
            percent: getPercent(Number(goalWeight), Number(currentWeight))
        }
    }

    return (
        <Container>
            {items.map((item, index) => (
                <Article key={index}>
                    <ProgressCircle
                        size="80%"
                        text={item.label}
                        color={item.color}
                        percent={item.percent}
                    />
                    <Title>{item.title}</Title>
                </Article>
            ))}
        </Container>
    )
}

export default Summary
