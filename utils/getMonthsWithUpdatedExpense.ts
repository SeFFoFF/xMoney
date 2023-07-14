import { type IHistory, type IMonth, type IYear } from '@interfaces'
import { getMonthNumber } from '@utils/getMonthNumber'

export const getMonthsWithUpdatedExpense = (year: IYear | null, month: string, expenseItem: IHistory, amount: number): IMonth[] => {
  const expense: IHistory = {
    ...expenseItem,
    amount
  }
  const history: IHistory[] = [
    ...year?.months[getMonthNumber(month)].history,
    expense
  ]

  const monthInfo: IMonth = {
    ...year?.months[getMonthNumber(month)],
    history
  }

  return year?.months.map(monthItem => {
    if (monthItem.name === month) return monthInfo
    return monthItem
  })
}
