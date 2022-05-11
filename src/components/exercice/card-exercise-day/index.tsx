import React from 'react'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import { ExerciseInterface } from '@/interfaces/exercise.interface'
import {
    Card,
    Text,
    Title,
    Article,
    CardExercice,
    VideoContainer
} from './styles'

interface CardExerciseDayProps {
    exercises: ExerciseInterface[]
}

const CardExerciseDay: React.FC<CardExerciseDayProps> = ({ exercises }) => {
    const openURL = (url: string) => window.open(url, '_blank')

    return (
        <Card>
            <Article>
                {exercises.map((item, index) => (
                    <CardExercice
                        key={index}
                        className={item.isLink ? 'video-mode' : ''}
                    >
                        {!item.isLink ? (
                            <>
                                <Title>{item.exercice.name}</Title>
                                <Text>{item.amount}</Text>
                            </>
                        ) : (
                            <VideoContainer
                                onClick={() => openURL(item.linkUrl)}
                            >
                                <AiOutlinePlayCircle />
                                <Text>Clique para assistir</Text>
                            </VideoContainer>
                        )}
                    </CardExercice>
                ))}
            </Article>
        </Card>
    )
}

export default CardExerciseDay
