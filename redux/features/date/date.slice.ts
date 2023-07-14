import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type RootState } from '@redux/store'

interface InitialDateState {
  numberOfYear: number
  nameOfMonth: string
}

const initialState: InitialDateState = {
  numberOfYear: 0,
  nameOfMonth: ''
}

export const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    setNumberOfYear: (state: InitialDateState, action: PayloadAction<number>) => {
      state.numberOfYear = action.payload
    },
    setNameOfMonth: (state: InitialDateState, action: PayloadAction<string>) => {
      state.nameOfMonth = action.payload
    }
  }
})

export const { actions, reducer } = dateSlice
export const selectDate = (state: RootState): InitialDateState => state.date
