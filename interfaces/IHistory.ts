import { type Dayjs } from 'dayjs'

export interface IHistory {
  date: Dayjs | string | number
  category: string
  amount: number
}
