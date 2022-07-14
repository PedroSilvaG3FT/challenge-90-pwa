import React from 'react'
import { IMC_ITEMS, IMC_TYPES } from '@/contants/imc'
import { IMCResultInterface } from '@/interfaces/imc.interface'
import { Container, Text, Title, Grid, Card, Badge, Small, Sup } from './styles'

interface IMCDetailsProps {
    result: IMCResultInterface
}

const IMCDetails: React.FC<IMCDetailsProps> = props => {
    const { result } = props

    const imcValue = result.value ? result.value.toFixed(2) : 0

    const items = IMC_ITEMS.map(item => {
        const getRage = () => {
            const { min, max } = item.range

            if (min === 0) return `< ${max + 0.01}`
            else if (max >= 100) return `> ${min}`
            else return `${min} - ${max + 0.01}`
        }

        const colorDisct = {
            [IMC_TYPES.normal]: 'green',
            [IMC_TYPES.overweight]: 'red',
            [IMC_TYPES.underweight]: 'yellow'
        }

        type CardColorTypes = 'green' | 'yellow' | 'red'

        return {
            ...item,
            rangeDescription: getRage(),
            color: colorDisct[item.id] as CardColorTypes
        }
    })

    return (
        <Container>
            <Text>O Seu IMC atual é</Text>
            <Title>
                {imcValue}{' '}
                <Small>
                    Kg/M<Sup>2</Sup>
                </Small>
            </Title>

            <Grid>
                {items.map((item, index) => (
                    <Card
                        key={index}
                        color={item.color}
                        isActive={item.id === result.type}
                    >
                        <Badge>{item.rangeDescription}</Badge>
                        <Text>{item.label}</Text>
                    </Card>
                ))}
            </Grid>
        </Container>
    )
}

export default IMCDetails
