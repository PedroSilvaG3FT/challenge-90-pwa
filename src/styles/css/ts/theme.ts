import THEMES from './themes'

import store from '@/store'
const { theme } = store.getState().ui

export default THEMES[theme]
