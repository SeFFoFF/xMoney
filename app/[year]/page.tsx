import React from 'react'
import MonthsGrid from '@components/MonthsGrid'
import { type IYear } from '@interfaces'

async function getYear (year: number): Promise<IYear | null> {
  const res = await fetch(`http://localhost:3000/api/${year}`, {
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error('Failed to fetch year')
  }
  return await res.json()
}

const Year = async ({ params }): Promise<JSX.Element> => {
  const year = await getYear(params.year)

  return (
    <div className='year-screen'>
      <MonthsGrid year={year} numberOfYear={parseInt(params.year)}/>
    </div>
  )
}

export default Year
