'use client'

import React from 'react'
import { ExpenseItem } from '@components/ExpenseItem'

const history = [
  {
    date: 1,
    category: 'Housing expenses',
    amount: 50
  },
  {
    date: 2,
    category: 'Food',
    amount: 500
  },
  {
    date: 3,
    category: 'Transportation',
    amount: 1000
  },
  {
    date: 4,
    category: 'Health',
    amount: 320
  },
  {
    date: 5,
    category: 'Clothing',
    amount: 2000
  },
  {
    date: 6,
    category: 'Entertainment',
    amount: 5150
  },
  {
    date: 7,
    category: 'Education',
    amount: 12500
  },
  {
    date: 8,
    category: 'Debts and loans',
    amount: 100
  },
  {
    date: 9,
    category: 'Gifts',
    amount: 1000
  }
]

export const ExpenseList = (): JSX.Element => {
  return (
    <div className='flex flex-col gap-5 h-[78%] overflow-y-auto bg-white rounded-lg p-10'>
      {
        history.map(item => <ExpenseItem key={item.date} category={item.category} date={item.date} amount={item.amount}/>)
      }
    </div>
  )
}
