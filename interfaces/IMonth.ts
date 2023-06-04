interface IHistory {
  date: string | number
  category: string
  amount: number
}

export interface IMonth {
  name: string
  income: number
  expenses: number
  history?: IHistory[]
}
