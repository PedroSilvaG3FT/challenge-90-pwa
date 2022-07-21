import React, { useEffect } from 'react'
import { useMapState } from '@/hooks'
import { GetStaticProps } from 'next'
import AppHead from '@/components/common/app-head'
import { AlertService } from '@/services/_alert.service'
import { ExerciseService } from '@/services/exercice.service'
import ExerciseList from '@/components/exercice/exercise-list'
import ExerciseImg from '@/assets/images/animated/exercise.gif'
import { exerciseActions } from '@/store/reducers/exercise.reducer'
import { AuthStateInterface } from '@/store/@interfaces/authState.interface'
import { ResponseErrorInterface } from '@/interfaces/_response-error.interface'
import { Container, ImageContainer, Image, Text } from '@/styles/pages/exercise'
import { ExerciseStateInterface } from '@/store/@interfaces/exerciseState.interface'

const Exercise: React.FC = () => {
    const alertService = new AlertService()
    const exerciseService = new ExerciseService()
    const { user } = useMapState('auth') as AuthStateInterface
    const { exercises } = useMapState('exercise') as ExerciseStateInterface

    useEffect(() => {
        getExercice()
    }, [])

    const getExercice = async () => {
        try {
            const { data } = await exerciseService.getById(Number(user.id))
            exerciseActions.setExercise(data)
        } catch (error: ResponseErrorInterface) {
            alertService.error(error.response.data.message)
        }
    }

    return (
        <>
            <AppHead title="Exercicios" showHeader backTo="/home" />

            <Container showHeader>
                <ExerciseList exercises={exercises} />

                {!exercises.length && (
                    <ImageContainer>
                        <Image src={ExerciseImg} alt="Sem exercicios" />
                        <Text>Sem exercicios cadastrados</Text>
                        <Text> solicite ao administrador</Text>
                    </ImageContainer>
                )}
            </Container>
        </>
    )
}

export const getStaticProps: GetStaticProps = () => {
    const props = { protected: true }
    return { props }
}

export default Exercise
