import React from 'react'
import MonthsGrid from '@components/MonthsGrid'
import { type IYear } from '@interfaces'

async function getYear (year: number): Promise<IYear> {
  const res = await fetch(`http://localhost:3000/api/years/${year}`, {
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data: IYear[] = await res.json()
  return data[0]
}

const Year = async ({ params }): Promise<JSX.Element> => {
  const year = await getYear(params.year)

  return (
    <div className='year-screen'>
      <MonthsGrid year={year} currentYear={params.year}/>
    </div>
  )
}

export default Year
