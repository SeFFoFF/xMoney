import { type IHistory } from '@interfaces/IHistory'

export interface IMonth {
  name: string
  income: number
  expenses: number
  history?: IHistory[]
}
