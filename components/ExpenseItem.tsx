'use client'

import React, { useEffect, useState } from 'react'
import { message } from 'antd'
import dayjs, { type Dayjs } from 'dayjs'
import { InputWithUpdate } from '@components/InputWithUpdate'

interface ExpenseItemProps {
  date: Dayjs | string | number
  category: string
  amount: number
}

export const ExpenseItem = ({ category, date, amount }: ExpenseItemProps): JSX.Element => {
  const [inputValue, setInputValue] = useState(amount)
  const [needToShowMessage, setNeedToShowMessage] = useState(false)
  const [messageApi, contextHolder] = message.useMessage()

  const formattedDate = dayjs(date).format('D MMMM')

  useEffect(() => {
    const showSuccessMessage = async (): Promise<void> => {
      await messageApi.open({
        type: 'success',
        content: 'Expense has been modified',
        duration: 2
      })
    }

    if (needToShowMessage) {
      void showSuccessMessage()
      setNeedToShowMessage(prevState => false)
    }
  }, [needToShowMessage])

  // TODO create UPDATE and DELETE logic

  return (
    <div className='w-full flex items-center justify-between'>
      {contextHolder}
      <p className='w-150px'>{category}</p>
      <strong>{formattedDate}</strong>
      <InputWithUpdate
        type='number'
        className='w-100px'
        defaultValue={amount}
        value={inputValue}
        setValue={setInputValue}
        setNeedToShowMessage={setNeedToShowMessage}
      />
    </div>
  )
}
