'use client'

import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { getMonth } from '@redux/features/expenses/expensesHistory.actions'
import { type IHistory, type IMonth } from '@interfaces'
import { type RootState } from '@redux/store'

interface IInitialExpensesState {
  isLoading: boolean
  error: string | null
  expensesHistory: IHistory[] | undefined
}

const initialState: IInitialExpensesState = {
  isLoading: false,
  error: null,
  expensesHistory: []
}

export const expensesHistorySlice = createSlice({
  name: 'expensesHistory',
  initialState,
  reducers: {
    addExpense: (state: IInitialExpensesState, action: PayloadAction<IHistory>) => {
      state.expensesHistory?.unshift(action.payload)
    }
    // TODO create UPDATE and DELETE expense
  },
  extraReducers: builder => {
    builder
      .addCase(getMonth.pending, (state: IInitialExpensesState) => {
        state.isLoading = true
      })
      .addCase(getMonth.fulfilled, (state: IInitialExpensesState, action: PayloadAction<IMonth>) => {
        state.isLoading = false
        state.expensesHistory = action.payload.history
      })
      .addCase(getMonth.rejected, (state: IInitialExpensesState, action: PayloadAction<unknown>) => {
        state.isLoading = false
        state.error = action.payload.error
        state.expensesHistory = []
      })
  }
})

export const { actions, reducer } = expensesHistorySlice
export const selectExpensesHistory = (state: RootState): IInitialExpensesState => state.expensesHistory
