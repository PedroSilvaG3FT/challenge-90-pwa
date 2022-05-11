import React from 'react'
import CardExerciseDay from '../card-exercise-day'
import { Container, Row, Title } from './styles'
import { ExerciseDayInterface } from '@/interfaces/exercise.interface'

interface ExerciseListProps {
    exercises: ExerciseDayInterface[]
}

const ExerciseList: React.FC<ExerciseListProps> = ({ exercises }) => {
    const items = exercises.filter(exercice => exercice.exercices.length)

    return (
        <Container>
            {items.map((item, index) => (
                <Row key={index}>
                    <Title>{item.name}</Title>
                    <CardExerciseDay exercises={item.exercices} />
                </Row>
            ))}
        </Container>
    )
}

export default ExerciseList
