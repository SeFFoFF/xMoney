import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type RootState } from '@redux/store'
import { type IHistory, type IMonth } from '@interfaces'
import { getMonth } from '@redux/features/month/month.actions'

interface InitialMonthState {
  isLoading: boolean
  error: unknown
  month: IMonth | null
}

const initialState: InitialMonthState = {
  isLoading: false,
  error: null,
  month: null
}

export const monthSlice = createSlice({
  name: 'month',
  initialState,
  reducers: {
    addExpense: (state: InitialMonthState, action: PayloadAction<IHistory>) => {
      state.month?.history?.unshift(action.payload)
    },
    updateIncome: (state: InitialMonthState, action: PayloadAction<number>) => {
      state.month.income = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getMonth.pending, (state: InitialMonthState) => {
        state.isLoading = true
      })
      .addCase(getMonth.fulfilled, (state: InitialMonthState, action: PayloadAction<IMonth>) => {
        state.isLoading = false
        state.month = action.payload
      })
      .addCase(getMonth.rejected, (state: InitialMonthState, action: PayloadAction<unknown>) => {
        state.isLoading = false
        state.error = action.payload
        state.month = null
      })
  }
})

export const { actions, reducer } = monthSlice
export const selectMonth = (state: RootState): InitialMonthState => state.month
