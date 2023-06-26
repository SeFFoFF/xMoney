import React from 'react'
import Link from 'next/link'
import { Card } from 'antd'

interface IMonthCardProps {
  name: string
  income: number
  expenses: number
  currentYear: string
}

const MonthCard = ({ name, income, expenses, currentYear }: IMonthCardProps): JSX.Element => {
  const hasMonetaryTransactions: boolean = (income !== 0) && (expenses !== 0)
  return (
    <Link href={`/${currentYear}/${name}`}>
      <Card title={name} bordered={true} hoverable className='h-month-card'>
        {
          hasMonetaryTransactions &&
            <div className='flex items-center justify-between w-full'>
              <p>+{income}</p>
              <p>-{expenses}</p>
            </div>
        }
      </Card>
    </Link>
  )
}

export default MonthCard
