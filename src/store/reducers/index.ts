import { combineReducers } from '@reduxjs/toolkit'

import ui from './ui.reducer'
import auth from './auth.reducer'
import menu from './menu.reducer'
import group from './group.reducer'
import avatar from './avatar.reducer'
import register from './register.reducer'
import exercise from './exercise.reducer'

export const reducers = { ui, auth, avatar, register, exercise, group, menu }
export default combineReducers(reducers)
