import React from 'react'
import { MonthForm } from '@components/MonthForm'
import { ExpensesHistory } from '@components/ExpensesHistory'

const Month = (): JSX.Element => {
  return (
    <div className='h-full'>
      <div className='flex gap-[16px] h-full'>

        <div className='flex flex-col justify-between gap-y-10 w-1/2 h-full bg-white rounded-lg p-24px'>
          <MonthForm />
          <ExpensesHistory />
        </div>

        <div className='w-1/2 h-full bg-white rounded-lg p-24px'>
          STATS
        </div>

      </div>
    </div>
  )
}

export default Month
