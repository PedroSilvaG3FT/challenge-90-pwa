import store from '@/store'
import { createSlice } from '@reduxjs/toolkit'
import { USER_TYPE } from '@/contants/user-type'
import UserInterface from '@/interfaces/user.interface'
import { AuthStateInterface } from '../@interfaces/authState.interface'

const initialState: AuthStateInterface = {
    token: '',
    isTypeChallenge: false,
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
            state.isTypeChallenge = payload.type === USER_TYPE.challenge
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
