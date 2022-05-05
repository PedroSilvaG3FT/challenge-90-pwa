import { combineReducers } from '@reduxjs/toolkit'

import auth from './auth.reducer'
import register from './register.reducer'

export const reducers = { auth, register }
export default combineReducers(reducers)
