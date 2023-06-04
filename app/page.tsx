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
            date: 1,
            category: 'Housing expenses',
            amount: 50
          },
          {
            date: 2,
            category: 'Food',
            amount: 500
          },
          {
            date: 3,
            category: 'Transportation',
            amount: 1000
          },
          {
            date: 4,
            category: 'Health',
            amount: 320
          },
          {
            date: 5,
            category: 'Clothing',
            amount: 2000
          },
          {
            date: 6,
            category: 'Entertainment',
            amount: 5150
          },
          {
            date: 7,
            category: 'Education',
            amount: 12500
          },
          {
            date: 8,
            category: 'Debts and loans',
            amount: 100
          },
          {
            date: 9,
            category: 'Gifts',
            amount: 1000
          }
        ]
      },
      {
        name: 'February',
        income: 32608,
        expenses: 29532,
        history: [
          {
            date: 1,
            category: 'Housing expenses',
            amount: 50
          },
          {
            date: 2,
            category: 'Food',
            amount: 500
          },
          {
            date: 3,
            category: 'Transportation',
            amount: 1000
          },
          {
            date: 4,
            category: 'Health',
            amount: 320
          }
        ]
      },
      {
        name: 'March',
        income: 32618,
        expenses: 57326,
        history: [
          {
            date: 4,
            category: 'Health',
            amount: 320
          },
          {
            date: 5,
            category: 'Clothing',
            amount: 2000
          },
          {
            date: 6,
            category: 'Entertainment',
            amount: 5150
          }
        ]
      },
      {
        name: 'April',
        income: 35842,
        expenses: 34316,
        history: [
          {
            date: 1,
            category: 'Housing expenses',
            amount: 50
          },
          {
            date: 2,
            category: 'Food',
            amount: 500
          },
          {
            date: 3,
            category: 'Transportation',
            amount: 1000
          },
          {
            date: 8,
            category: 'Debts and loans',
            amount: 100
          },
          {
            date: 9,
            category: 'Gifts',
            amount: 1000
          }
        ]
      },
      {
        name: 'May',
        income: 71492,
        expenses: 28774,
        history: [
          {
            date: 2,
            category: 'Food',
            amount: 500
          },
          {
            date: 3,
            category: 'Transportation',
            amount: 1000
          },
          {
            date: 6,
            category: 'Entertainment',
            amount: 5150
          },
          {
            date: 7,
            category: 'Education',
            amount: 12500
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
