import { type Dayjs } from 'dayjs'

export interface IHistory {
  id?: string | number
  date: Dayjs | string | number
  category: string
  amount: number
}
