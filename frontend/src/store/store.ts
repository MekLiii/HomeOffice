import { configureStore } from '@reduxjs/toolkit'

import loginReducer from './reducers/login'
import { combineReducers } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
    login: loginReducer,
})

export const store = configureStore({
    reducer: {
        login: loginReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})