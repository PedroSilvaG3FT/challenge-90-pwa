import { ExerciseInterface } from '@/interfaces/exercise.interface'
import { Container, Text } from './styles'
import React from 'react'

interface ExerciseDetailProps {
    exercise: ExerciseInterface
}

const ExerciseDetail: React.FC<ExerciseDetailProps> = ({ exercise }) => {
    const {
        amount,
        exercice: { name }
    } = exercise

    return (
        <Container>
            <Text>{name}</Text>
            <Text>Quantidade: {amount}</Text>
        </Container>
    )
}

export default ExerciseDetail
