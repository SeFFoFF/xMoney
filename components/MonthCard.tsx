import React from 'react'
import Link from 'next/link'
import { Card } from 'antd'
import { useTypedSelector } from '@redux/hooks'
import { selectDate } from '@redux/features/date/date.slice'

interface IMonthCardProps {
  monthName: string
  income: number
  expenses: number
}

const MonthCard = ({ monthName, income, expenses }: IMonthCardProps): JSX.Element => {
  const { numberOfYear } = useTypedSelector(selectDate)

  const hasMonetaryTransactions: boolean = (income !== 0) && (expenses !== 0)
  return (
    <Link href={`/${numberOfYear}/${monthName}`}>
      <Card title={monthName} bordered hoverable className='h-month-card'>
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
