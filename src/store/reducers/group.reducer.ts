import store from '@/store'
import { createSlice } from '@reduxjs/toolkit'
import UserInterface from '@/interfaces/user.interface'
import { GroupStateInterface } from '../@interfaces/groupState.interface'

const initialState: GroupStateInterface = {
    group: []
}

const { actions: mutations, reducer } = createSlice({
    name: 'group',
    initialState,
    reducers: {
        setGroup(state, { payload }) {
            state.group = payload
        }
    }
})

export const groupActions = {
    setGroup: (payload: UserInterface[]) =>
        store.dispatch(mutations.setGroup(payload))
}

export default reducer
