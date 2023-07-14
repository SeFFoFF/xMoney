import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type IYear } from '@interfaces'
import { type RootState } from '@redux/store'

interface InitialYearState {
  year: IYear | null
}

const initialState: InitialYearState = {
  year: null
}

export const yearSlice = createSlice({
  name: 'year',
  initialState,
  reducers: {
    setYear: (state: InitialYearState, action: PayloadAction<IYear>) => {
      state.year = action.payload
    }
  }
})

export const { actions, reducer } = yearSlice
export const selectYear = (state: RootState): InitialYearState => state.year
