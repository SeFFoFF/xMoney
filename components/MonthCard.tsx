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

  return (
    <Link href={`/${numberOfYear}/${monthName}`}>
      <Card title={monthName} bordered hoverable className='h-month-card'>
        <div className='flex items-center justify-between w-full'>
          <p>
            {
              income !== 0 &&
              `+${income}`
            }
          </p>
          <p>
            {
              expenses !== 0 &&
              `-${expenses}`
            }
          </p>
        </div>
      </Card>
    </Link>
  )
}

export default MonthCard
