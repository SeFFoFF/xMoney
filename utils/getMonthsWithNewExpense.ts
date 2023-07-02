import { type IHistory, type IMonth, type IYear } from '@interfaces'
import dayjs from 'dayjs'
import { getMonthNumber } from '@utils/getMonthNumber'

export const getMonthsWithNewExpense = (year: IYear | null, month: string, category: string, amount: number): { expense: IHistory, months: IMonth[] } => {
  const expense: IHistory = {
    date: dayjs(),
    category,
    amount
  }

  const history: IHistory[] = [
    expense,
    ...year?.months[getMonthNumber(month)].history
  ]

  const monthInfo: IMonth = {
    ...year?.months[getMonthNumber(month)],
    history
  }

  const months = year?.months.map(monthItem => {
    if (monthItem.name === month) return monthInfo
    return monthItem
  })

  return { expense, months }
}
