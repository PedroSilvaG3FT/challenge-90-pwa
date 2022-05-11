import store from '@/store'
import { createSlice } from '@reduxjs/toolkit'
import { ExerciseDayInterface } from '@/interfaces/exercise.interface'
import { ExerciseStateInterface } from '../@interfaces/exerciseState.interface'

const initialState: ExerciseStateInterface = {
    exercises: []
}

const { actions: mutations, reducer } = createSlice({
    name: 'exercise',
    initialState,
    reducers: {
        setExercise(state, { payload }) {
            state.exercises = payload
        }
    }
})

export const exerciseActions = {
    setExercise: (payload: ExerciseDayInterface[]) =>
        store.dispatch(mutations.setExercise(payload))
}

export default reducer
