import React, { useEffect } from 'react'
import { useMapState } from '@/hooks'
import { Container, Article, Content, Title, Text } from './styles'
import { AuthStateInterface } from '@/store/@interfaces/authState.interface'

const UserGoals: React.FC = () => {
    const { user, isTypeChallenge } = useMapState('auth') as AuthStateInterface
    const [firstName] = user.name ? user.name.split(' ') : ['']

    const items = [
        { label: 'Peso Atual', value: user.currentWeight },
        { label: 'Meta da Semana', value: user.goalWeek },
        { label: 'Meta Final', value: user.goalWeight }
    ]

    return (
        <Container>
            <Title>Olá {firstName}, bem vindo de volta</Title>

            <Content>
                {isTypeChallenge &&
                    items.map((item, index) => (
                        <Article key={index}>
                            <Title>{item.label}</Title>
                            <Text>{item.value || 0} kg</Text>
                        </Article>
                    ))}

                {!isTypeChallenge && (
                    <Text>Lembre-se de manter sua saúde em dia !</Text>
                )}
            </Content>
        </Container>
    )
}

export default UserGoals
