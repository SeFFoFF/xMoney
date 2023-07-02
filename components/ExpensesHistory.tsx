'use client'

import React, { useEffect } from 'react'
import { Button, List, Result } from 'antd'
import { useTypedSelector, useActions } from '@redux/hooks'
import { ExpenseItem } from '@components/ExpenseItem'
import { selectMonth } from '@redux/features/month/month.slice'
import { useRouter } from '@node_modules/next/navigation'

interface IExpensesHistoryProps {
  dateInfo: {
    year: number
    month: string
  }
}

export const ExpensesHistory = ({ dateInfo }: IExpensesHistoryProps): JSX.Element => {
  const router = useRouter()
  const { month, error, isLoading } = useTypedSelector(selectMonth)
  const { getMonth } = useActions()

  useEffect(() => {
    getMonth(dateInfo)
  }, [dateInfo.year, dateInfo.month])

  if (!isLoading && (Boolean(error))) {
    return <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={<Button onClick={() => { router.push('/') }}>Back to Home</Button>}
    />
  }

  return (
    <div className='flex flex-col gap-1 h-max overflow-y-auto bg-white rounded-lg pr-3'>
      <List
        loading={isLoading}
        itemLayout="horizontal"
        dataSource={month?.history}
        renderItem={(item) => (
          <List.Item>
            <ExpenseItem key={item._id ?? item.date} item={item} category={item.category} date={item.date} amount={item.amount}/>
          </List.Item>
        )}
      />
    </div>
  )
}
