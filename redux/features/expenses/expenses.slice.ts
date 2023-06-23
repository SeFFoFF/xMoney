'use client'

import { createSlice } from '@reduxjs/toolkit'
import { type PayloadAction } from '@reduxjs/toolkit'
import { type RootState } from '@redux/store'
import { type IHistory } from '@interfaces/IMonth'

interface IInitialExpensesState {
  history: IHistory[]
}

const initialState: IInitialExpensesState = {
  history: [
    {
      id: 'b5060021-35f5-473e-bc28-bdc89a35ce6b',
      date: '2023-06-23T10:29:15.020Z',
      category: 'Housing expenses',
      amount: 4500
    },
    {
      id: '16349171-80ef-4d9f-ba7d-6e91f98a0a3e',
      date: '2023-06-21T10:29:19.974Z',
      category: 'Food',
      amount: 3000
    },
    {
      id: 'f324952e-2416-40f6-869b-f26ecae296c5',
      date: '2023-06-20T10:29:27.226Z',
      category: 'Transportation',
      amount: 1000
    },
    {
      id: '11be313a-fb26-4b8f-8431-06403ad0c70a',
      date: '2023-06-20T10:29:39.798Z',
      category: 'Clothing',
      amount: 2350
    },
    {
      id: '36051906-e4cd-41eb-99aa-ef3ac3276cd8',
      date: '2023-06-19T10:29:45.718Z',
      category: 'Education',
      amount: 12500
    },
    {
      id: 'e1b3e533-8a44-4bd7-8d2d-c8192e637e46',
      date: '2023-06-09T10:29:52.478Z',
      category: 'Gifts',
      amount: 1750
    },
    {
      id: '16349171-80ef-4d9f-ba7d-6e91f98a0a3e',
      date: '2023-06-21T10:29:19.974Z',
      category: 'Food',
      amount: 3000
    },
    {
      id: 'f324952e-2416-40f6-869b-f26ecae296c5',
      date: '2023-06-20T10:29:27.226Z',
      category: 'Transportation',
      amount: 1000
    },
    {
      id: '11be313a-fb26-4b8f-8431-06403ad0c70a',
      date: '2023-06-20T10:29:39.798Z',
      category: 'Clothing',
      amount: 2350
    },
    {
      id: '36051906-e4cd-41eb-99aa-ef3ac3276cd8',
      date: '2023-06-19T10:29:45.718Z',
      category: 'Education',
      amount: 12500
    },
    {
      id: 'e1b3e533-8a44-4bd7-8d2d-c8192e637e46',
      date: '2023-06-09T10:29:52.478Z',
      category: 'Gifts',
      amount: 1750
    },
    {
      id: '16349171-80ef-4d9f-ba7d-6e91f98a0a3e',
      date: '2023-06-21T10:29:19.974Z',
      category: 'Food',
      amount: 3000
    },
    {
      id: 'f324952e-2416-40f6-869b-f26ecae296c5',
      date: '2023-06-20T10:29:27.226Z',
      category: 'Transportation',
      amount: 1000
    },
    {
      id: '11be313a-fb26-4b8f-8431-06403ad0c70a',
      date: '2023-06-20T10:29:39.798Z',
      category: 'Clothing',
      amount: 2350
    },
    {
      id: '36051906-e4cd-41eb-99aa-ef3ac3276cd8',
      date: '2023-06-19T10:29:45.718Z',
      category: 'Education',
      amount: 12500
    },
    {
      id: 'e1b3e533-8a44-4bd7-8d2d-c8192e637e46',
      date: '2023-06-09T10:29:52.478Z',
      category: 'Gifts',
      amount: 1750
    }
  ]
}

export const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state: IInitialExpensesState, action: PayloadAction<IHistory>) => {
      state.history.unshift(action.payload)
    },
    updateExpense: (state: IInitialExpensesState, action: PayloadAction<any>) => {
      return state
    },
    removeExpense: (state: IInitialExpensesState, action: PayloadAction<string>) => {
      return { history: state.history.filter(item => item.id !== action.payload) }
    }
  }
})

export const { addExpense, updateExpense, removeExpense } = expensesSlice.actions
export default expensesSlice.reducer

export const selectExpense = (state: RootState): IHistory[] => state.expense.history
