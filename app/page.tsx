import React from 'react'
import MonthCard from '@components/MonthCard'
import { type IYear } from '@interfaces/IYear'

const db: IYear[] = [
  {
    year: 2023,
    months: [
      {
        name: 'January',
        income: 34256,
        expenses: 29813,
        history: [
          {
            date: '01.06.2023',
            category: 'Food',
            amount: 50
          },
          {
            date: '01.06.2023',
            category: 'Rent',
            amount: 4500
          }
        ]
      },
      {
        name: 'February',
        income: 32608,
        expenses: 29532,
        history: [
          {
            date: '01.06.2023',
            category: 'Food',
            amount: 50
          }
        ]
      },
      {
        name: 'March',
        income: 32618,
        expenses: 57326,
        history: [
          {
            date: '01.06.2023',
            category: 'Food',
            amount: 50
          }
        ]
      },
      {
        name: 'April',
        income: 35842,
        expenses: 34316,
        history: [
          {
            date: '01.06.2023',
            category: 'Food',
            amount: 50
          }
        ]
      },
      {
        name: 'May',
        income: 71492,
        expenses: 28774,
        history: [
          {
            date: '01.06.2023',
            category: 'Food',
            amount: 50
          }
        ]
      },
      {
        name: 'June',
        income: 0,
        expenses: 0
      },
      {
        name: 'July',
        income: 0,
        expenses: 0
      },
      {
        name: 'August',
        income: 0,
        expenses: 0
      },
      {
        name: 'September',
        income: 0,
        expenses: 0
      },
      {
        name: 'October',
        income: 0,
        expenses: 0
      },
      {
        name: 'November',
        income: 0,
        expenses: 0
      },
      {
        name: 'December',
        income: 0,
        expenses: 0
      }
    ]
  }
]

const Home = (): JSX.Element => {
  const renderMonths = (db: IYear[]): JSX.Element[] => {
    return db[0].months.map(month => (
      <MonthCard key={month.name} name={month.name} income={month.income} expenses={month.expenses}/>
    ))
  }

  return (
    <div className='w-full max-w-1240px'>
      <div className='flex flex-wrap gap-10 p-10'>
        {
          renderMonths(db)
        }
      </div>
    </div>
  )
}

export default Home
