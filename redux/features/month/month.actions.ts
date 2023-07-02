import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IMonth } from '@interfaces'

interface IDate {
  year: number
  month: string
}

export const getMonth = createAsyncThunk<IMonth, IDate, { rejectValue: string }>('month/fetch', async (date, thunkApi) => {
  try {
    const response = await fetch(`/api/${date.year}/${date.month}`)
    return await response.json()
  } catch (error) {
    return thunkApi.rejectWithValue('Failed to fetch month')
  }
})
