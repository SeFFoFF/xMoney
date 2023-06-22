import { type Dayjs } from 'dayjs'

export interface IHistory {
  id?: string | number
  date: Dayjs | string | number
  category: string
  amount: number
}

export interface IMonth {
  name: string
  income: number
  expenses: number
  history?: IHistory[]
}
