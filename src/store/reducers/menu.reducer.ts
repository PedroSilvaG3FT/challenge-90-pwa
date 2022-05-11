import store from '@/store'
import { createSlice } from '@reduxjs/toolkit'
import { MenuInterface } from '@/interfaces/menu.interface'
import { MenuStateInterface } from '../@interfaces/menuState.interface'

const initialState: MenuStateInterface = {
    menu: {} as MenuInterface
}

const { actions: mutations, reducer } = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setMenu(state, { payload }) {
            state.menu = payload
        }
    }
})

export const menuActions = {
    setMenu: (payload: MenuInterface) =>
        store.dispatch(mutations.setMenu(payload))
}

export default reducer
