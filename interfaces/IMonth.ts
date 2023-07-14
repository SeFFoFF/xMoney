import { type IHistory } from '@interfaces/IHistory'

export interface IMonth {
  _id: string
  name: string
  income: number
  expenses: number
  history?: IHistory[]
}
