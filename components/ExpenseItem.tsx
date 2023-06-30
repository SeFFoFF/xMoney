'use client'

import React, { useState } from 'react'
import dayjs, { type Dayjs } from 'dayjs'
import { InputWithUpdate } from '@components/InputWithUpdate'

interface ExpenseItemProps {
  date: Dayjs | string | number
  category: string
  amount: number
}

export const ExpenseItem = ({ category, date, amount }: ExpenseItemProps): JSX.Element => {
  const [inputValue, setInputValue] = useState(amount)

  const formattedDate = dayjs(date).format('D MMMM')

  // TODO create UPDATE and DELETE logic
  // TODO create success popup

  return (
    <div className='w-full flex items-center justify-between'>
      <p className='w-150px'>{category}</p>
      <strong>{formattedDate}</strong>
      <InputWithUpdate
        type='number'
        className='w-100px'
        defaultValue={amount}
        value={inputValue}
        setValue={setInputValue}
      />
    </div>
  )
}
