import store from '@/store'
import { createSlice } from '@reduxjs/toolkit'
import UserInterface from '@/interfaces/user.interface'
import { AuthStateInterface } from '../@interfaces/authState.interface'

const initialState: AuthStateInterface = {
    token: '',
    user: {} as UserInterface
}

const { actions: mutations, reducer } = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken(state, { payload }) {
            state.token = payload
        },
        setUser(state, { payload }) {
            state.user = payload
        },
        clearState(state) {
            state.token = ''
            state.user = {} as UserInterface
        }
    }
})

export const authActions = {
    setToken: (payload: string) => store.dispatch(mutations.setToken(payload)),
    clearState: () => store.dispatch(mutations.clearState()),
    setUser: (payload: UserInterface) =>
        store.dispatch(mutations.setUser(payload))
}

export default reducer
