import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IMonth } from '@interfaces'

export const getMonth = createAsyncThunk<IMonth, { year: number, month: string }, { rejectValue: string }>('todos/fetch', async (date, thunkApi) => {
  const response = await fetch(`/api/${date.year}/${date.month}`)

  if (response.status !== 200) {
    return thunkApi.rejectWithValue('Failed to fetch month')
  }

  return await response.json()
})
