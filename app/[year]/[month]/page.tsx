import React from 'react'
import { MonthForm } from '@components/MonthForm'
import { ExpensesHistory } from '@components/ExpensesHistory'
import { type IYear } from '@interfaces'

async function getYear (year: number): Promise<IYear | null> {
  const res = await fetch(`http://localhost:3000/api/${year}`, {
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return await res.json()
}

const Month = async ({ params }): Promise<JSX.Element> => {
  const { year, month } = params
  const currentYear = await getYear(params.year)

  const dateInfo = {
    year,
    month
  }

  return (
    <div className='month-screen h-full'>
      <div className='flex gap-[16px] h-full'>

        <div className='flex flex-col gap-y-10 w-1/2 h-full bg-white rounded-lg p-24px'>
          <MonthForm year={currentYear} dateInfo={dateInfo} />
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
