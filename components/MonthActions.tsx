'use client'

import React from 'react'
import { ExpensesForm } from '@components/ExpensesForm'
import { ExpensesHistory } from '@components/ExpensesHistory'
import { useParams } from 'next/navigation'

export const MonthActions = (): JSX.Element => {
  const params = useParams()

  const dateInfo = {
    year: parseInt(params.year),
    month: params.month
  }

  return (
    <div className='flex flex-col gap-y-10 h-full bg-white rounded-lg p-24px'>
      <ExpensesForm dateInfo={dateInfo} />
      <ExpensesHistory dateInfo={dateInfo} />
    </div>
  )
}
