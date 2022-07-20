import React from 'react'
import { Container } from './styles'
import ExerciseVideo from './exercise-video'
import ExerciseDetail from './exercise-detail'
import { ExerciseInterface } from '@/interfaces/exercise.interface'

interface CardExerciseDayProps {
    exercises: ExerciseInterface[]
}

const CardExerciseDay: React.FC<CardExerciseDayProps> = ({ exercises }) => {
    const renderExercise = (exercice: ExerciseInterface, index: number) => {
        if (!exercice.isLink)
            return <ExerciseDetail key={index} exercise={exercice} />

        return <ExerciseVideo key={index} exercise={exercice} />
    }

    return (
        <Container>
            {exercises.map((item, index) => renderExercise(item, index))}
        </Container>
    )
}

export default CardExerciseDay
