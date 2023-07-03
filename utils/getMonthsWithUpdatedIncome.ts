import { type IMonth, type IYear } from '@interfaces'
import { getMonthNumber } from '@utils/getMonthNumber'

export const getMonthsWithUpdatedIncome = (year: IYear | null, month: string, income: number): IMonth[] => {
  const monthInfo: IMonth = {
    ...year?.months[getMonthNumber(month)],
    income
  }

  return year?.months.map(monthItem => {
    if (monthItem.name === month) return monthInfo
    return monthItem
  })
}
