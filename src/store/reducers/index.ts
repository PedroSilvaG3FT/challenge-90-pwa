import { combineReducers } from '@reduxjs/toolkit'

import auth from './auth.reducer'
import menu from './menu.reducer'
import group from './group.reducer'
import register from './register.reducer'
import exercise from './exercise.reducer'

export const reducers = { auth, register, exercise, group, menu }
export default combineReducers(reducers)
