'use client'

import React, { useEffect } from 'react'
import { ExpenseItem } from '@components/ExpenseItem'
import { useTypedSelector, useActions } from '@redux/hooks'
import { selectExpensesHistory } from '@redux/features/expenses/expensesHistory.slice'

interface IExpensesHistoryProps {
  dateInfo: {
    year: number
    month: string
  }
}

export const ExpensesHistory = ({ dateInfo }: IExpensesHistoryProps): JSX.Element => {
  const { expensesHistory, isLoading, error } = useTypedSelector(selectExpensesHistory)

  const { getMonth } = useActions()

  useEffect(() => {
    getMonth(dateInfo)
  }, [dateInfo.month])

  // TODO CREATE PLACEHOLDER FOR THE EMPTY HISTORY
  if (expensesHistory?.length === 0) return <div>No expenses yet</div>

  // TODO CREATE LOADING SPINNER
  if (isLoading) return <div>Loading...</div>

  return (
    <div className='flex flex-col gap-1 h-max overflow-y-auto bg-white rounded-lg'>
      {
        expensesHistory?.map(item => <ExpenseItem key={item._id ?? item.date} category={item.category} date={item.date} amount={item.amount}/>)
      }
    </div>
  )
}
