'use client'

import { configureStore } from '@reduxjs/toolkit'
import expenseReducer from '@redux/features/expenses/expenses.slice'

export const store = configureStore({
  reducer: {
    expense: expenseReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export type RootState = ReturnType<typeof store.getState>
