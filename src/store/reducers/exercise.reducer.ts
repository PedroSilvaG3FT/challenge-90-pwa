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
        },
        clearState(state) {
            state.exercises = []
        }
    }
})

export const exerciseActions = {
    clearState: () => store.dispatch(mutations.clearState()),
    setExercise: (payload: ExerciseDayInterface[]) =>
        store.dispatch(mutations.setExercise(payload))
}

export default reducer
