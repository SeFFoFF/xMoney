import React from 'react'
import { MonthForm } from '@components/MonthForm'
import { ExpensesHistory } from '@components/ExpensesHistory'
import { type IMonth, type IYear } from '@interfaces'

async function getMonth (year: number, month: string): Promise<IMonth | null> {
  const res = await fetch(`http://localhost:3000/api/${year}/${month}`, {
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return await res.json()
}

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
  const month = await getMonth(params.year, params.month)
  const year = await getYear(params.year)
  const isMonthExists = month?.history ?? null

  const dateInfo = {
    year: params.year,
    month: params.month
  }

  return (
    <div className='month-screen h-full'>
      <div className='flex gap-[16px] h-full'>

        <div className='flex flex-col justify-between gap-y-10 w-1/2 h-full bg-white rounded-lg p-24px'>
          <MonthForm year={year} dateInfo={dateInfo} />
          <ExpensesHistory history={isMonthExists}/>
        </div>

        <div className='w-1/2 h-full bg-white rounded-lg p-24px'>
          STATS
        </div>

      </div>
    </div>
  )
}

export default Month
