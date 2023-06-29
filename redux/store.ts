'use client'

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer } from '@redux/features/expenses/expensesHistory.slice'

const reducers = combineReducers({
  expensesHistory: reducer
})

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

export type RootState = ReturnType<typeof store.getState>
