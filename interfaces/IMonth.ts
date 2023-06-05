import { type Dayjs } from 'dayjs'

export interface IHistory {
  id: string
  date: Dayjs | string
  category: string
  amount: number
}

export interface IMonth {
  name: string
  income: number
  expenses: number
  history?: IHistory[]
}
