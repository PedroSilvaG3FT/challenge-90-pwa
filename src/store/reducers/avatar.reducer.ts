import store from '@/store'
import { createSlice } from '@reduxjs/toolkit'
import { AvatarInterface } from '@/interfaces/avatar.interface'
import { AvatarStateInterface } from '../@interfaces/avatarState.interface'

const initialState: AvatarStateInterface = {
    avatarList: []
}

const { actions: mutations, reducer } = createSlice({
    name: 'avatar',
    initialState,
    reducers: {
        setAvatarList(state, { payload }) {
            state.avatarList = payload
        }
    }
})

export const avatarActions = {
    setAvatarList: (payload: AvatarInterface[]) =>
        store.dispatch(mutations.setAvatarList(payload))
}

export default reducer
