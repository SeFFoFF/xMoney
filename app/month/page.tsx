import React from 'react'
import { MonthForm } from '@components/MonthForm'
import { ExpenseList } from '@components/ExpenseList'

const Month = (): JSX.Element => {
  return (
    <div className='w-1240px max-w-full min-h-640px h-640px'>
      <div className='flex gap-10 p-10 h-full'>

        <div className='flex flex-col justify-between gap-y-10 w-full h-full'>
          <MonthForm />
          <ExpenseList />
        </div>

        <div className='w-full h-full bg-white rounded-lg p-10'>
          STATS
        </div>

      </div>
    </div>
  )
}

export default Month
