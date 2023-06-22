'use client'

import React from 'react'
import { useSelector } from 'react-redux'
import { ExpenseItem } from '@components/ExpenseItem'
import { selectExpense } from '@redux/features/expenses/expenses.slice'

export const ExpensesHistory = (): JSX.Element => {
  const expenses = useSelector(selectExpense)

  return (
    <div className='flex flex-col gap-1 h-[78%] overflow-y-auto bg-white rounded-lg p-10'>
      {
        expenses.length !== 0
          ? expenses?.map(item => <ExpenseItem key={item.id} category={item.category} date={item.date} amount={item.amount}/>)
          : <div>No expenses yet</div>
      }
    </div>
  )
}
