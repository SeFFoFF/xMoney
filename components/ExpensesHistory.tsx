'use client'

import React from 'react'
import { ExpenseItem } from '@components/ExpenseItem'
import { type IHistory } from '@interfaces'

interface IExpensesHistoryProps {
  history: IHistory[] | null
}

export const ExpensesHistory = ({ history }: IExpensesHistoryProps): JSX.Element => {
  // TODO CREATE PLACEHOLDER FOR THE EMPTY HISTORY
  if (history === null) return <div>No expenses yet</div>

  return (
    <div className='flex flex-col gap-1 h-max overflow-y-auto bg-white rounded-lg'>
      {
        history.map(item => <ExpenseItem key={item._id} category={item.category} date={item.date} amount={item.amount}/>)
      }
    </div>
  )
}
