interface IHistory {
  date: string
  category: string
  amount: number
}

export interface IMonth {
  name: string
  income: number
  expenses: number
  history?: IHistory[]
}
