import React from 'react'
import { type IMonth } from '@interfaces/IMonth'

const MonthCard = ({ name, income, expenses }: IMonth): JSX.Element => {
  const hasMonetaryTransactions: boolean = (income !== 0) && (expenses !== 0)
  return (
    <div className='month-card flex flex-col items-center justify-center gap-y-5 flex-205 p-10 rounded-lg bg-card max-w-full w-270 h-month-card cursor-pointer'>
      <h3 className='text-center text-2xl'>{ name }</h3>
      {
        hasMonetaryTransactions &&
          <div className='flex items-center justify-between w-full'>
            <p>+{ income }</p>
            <p>-{ expenses }</p>
          </div>
      }
    </div>
  )
}

export default MonthCard
