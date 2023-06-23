'use client'

import React from 'react'
import { useSelector } from 'react-redux'
import { selectExpense } from '@redux/features/expenses/expenses.slice'
import { ExpenseItem } from '@components/ExpenseItem'

export const ExpensesHistory = (): JSX.Element => {
  const expenses = useSelector(selectExpense)

  // TODO CREATE PLACEHOLDER FOR THE EMPTY HISTORY
  return (
    <div className='flex flex-col gap-1 h-max overflow-y-auto bg-white rounded-lg'>
      {
        expenses.length !== 0
          ? expenses.map(item => <ExpenseItem key={item.id} category={item.category} date={item.date} amount={item.amount}/>)
          : <div>No expenses yet</div>
      }
    </div>
  )
}
