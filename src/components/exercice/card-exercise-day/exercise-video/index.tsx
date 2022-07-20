import React from 'react'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import { ExerciseInterface } from '@/interfaces/exercise.interface'
import { Container, Text } from './styles'

interface ExerciseVideoProps {
    exercise: ExerciseInterface
}

const ExerciseVideo: React.FC<ExerciseVideoProps> = ({ exercise }) => {
    const openVideo = () => window.open(exercise.linkUrl, '_blank')

    return (
        <Container onClick={openVideo}>
            <AiOutlinePlayCircle />
            <Text>Clique para assistir</Text>
        </Container>
    )
}

export default ExerciseVideo
