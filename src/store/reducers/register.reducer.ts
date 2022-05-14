import store from '@/store'
import { createSlice } from '@reduxjs/toolkit'
import { RegisterFormInterface } from '@/interfaces/user-register.interface'
import { RegisterStateInterface } from '../@interfaces/registerState.interface'

const initialState: RegisterStateInterface = {
    model: {} as RegisterFormInterface
}

const { actions: mutations, reducer } = createSlice({
    name: 'register',
    initialState,
    reducers: {
        setRegisterModel(state, { payload }) {
            state.model = payload
        },
        clearState(state) {
            state.model = {} as RegisterFormInterface
        }
    }
})

export const registerActions = {
    clearState: () => store.dispatch(mutations.clearState()),
    setRegisterModel: (payload: RegisterFormInterface) =>
        store.dispatch(mutations.setRegisterModel(payload))
}

export default reducer
