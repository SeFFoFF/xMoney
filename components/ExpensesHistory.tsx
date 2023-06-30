'use client'

import React, { useEffect } from 'react'
import { ExpenseItem } from '@components/ExpenseItem'
import { useTypedSelector, useActions } from '@redux/hooks'
import { selectExpensesHistory } from '@redux/features/expenses/expensesHistory.slice'
import { List } from 'antd'

interface IExpensesHistoryProps {
  dateInfo: {
    year: number
    month: string
  }
}

export const ExpensesHistory = ({ dateInfo }: IExpensesHistoryProps): JSX.Element => {
  const { expensesHistory, isLoading, error } = useTypedSelector(selectExpensesHistory)

  const { getMonth } = useActions()

  useEffect(() => {
    getMonth(dateInfo)
  }, [dateInfo.year, dateInfo.month])

  if (!isLoading && (error != null)) {
    return <div>{error}</div>
  }

  return (
    <div className='flex flex-col gap-1 h-max overflow-y-auto bg-white rounded-lg pr-3'>
      <List
        loading={isLoading}
        itemLayout="horizontal"
        dataSource={expensesHistory}
        renderItem={(item) => (
          <List.Item>
            <ExpenseItem key={item._id ?? item.date} category={item.category} date={item.date} amount={item.amount}/>
          </List.Item>
        )}
      />
    </div>
  )
}
