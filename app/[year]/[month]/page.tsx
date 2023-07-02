import React from 'react'
import { MonthForm } from '@components/MonthForm'
import { ExpensesHistory } from '@components/ExpensesHistory'

const Month = async ({ params }): Promise<JSX.Element> => {
  const { year, month } = params

  const dateInfo = {
    year,
    month
  }

  return (
    <div className='month-screen h-full'>
      <div className='flex gap-[16px] h-full'>

        <div className='flex flex-col gap-y-10 w-1/2 h-full bg-white rounded-lg p-24px'>
          <MonthForm dateInfo={dateInfo} />
          <ExpensesHistory dateInfo={dateInfo} />
        </div>

        <div className='w-1/2 h-full bg-white rounded-lg p-24px'>
          {/* TODO create STATS */}
          STATS
        </div>

      </div>
    </div>
  )
}

export default Month
