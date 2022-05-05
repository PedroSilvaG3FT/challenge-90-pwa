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
        }
    }
})

export const registerActions = {
    setRegisterModel: (payload: RegisterFormInterface) =>
        store.dispatch(mutations.setRegisterModel(payload))
}

export default reducer
