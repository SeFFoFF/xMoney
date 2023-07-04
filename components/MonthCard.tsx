'use client'

import React from 'react'
import Link from 'next/link'
import { Card, Statistic } from 'antd'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons'
import { useTypedSelector } from '@redux/hooks'
import { selectDate } from '@redux/features/date/date.slice'

interface IMonthCardProps {
  monthName: string
  income: number
  expenses: number
}

const MonthCard = ({ monthName, income, expenses }: IMonthCardProps): JSX.Element => {
  const { numberOfYear } = useTypedSelector(selectDate)

  const renderStatistics = (): JSX.Element => {
    const hasIncome = income !== 0
    const hasExpenses = expenses !== 0

    return (
      <div className='flex items-center justify-between w-full'>
        <Statistic
          title="Income"
          value={income}
          valueStyle={{ color: hasIncome ? '#3f8600' : 'grey' }}
          prefix={income !== 0 && <ArrowUpOutlined />}
        />
        <Statistic
          title="Expenses"
          value={expenses}
          valueStyle={{ color: hasExpenses ? '#cf1322' : 'grey' }}
          prefix={expenses !== 0 && <ArrowDownOutlined />}
        />
      </div>
    )
  }

  return (
    <Link href={`/${numberOfYear}/${monthName}`}>
      <Card title={monthName} bordered hoverable className='h-[168px]'>
        { renderStatistics() }
      </Card>
    </Link>
  )
}

export default MonthCard
