'use client'

import React, { useState } from 'react'
import dayjs, { type Dayjs } from 'dayjs'
import { CustomInput } from '@components/CustomInput'

interface ExpenseItemProps {
  date: Dayjs | string
  category: string
  amount: number
}

export const ExpenseItem = ({ category, date, amount }: ExpenseItemProps): JSX.Element => {
  const [inputValue, setInputValue] = useState<number>(amount)

  const formattedDate = dayjs(date).format('D MMMM')

  return (
    <div className='flex items-center justify-between border-b pb-1'>
      <p className='w-150px'>{category}</p>
      <strong>{formattedDate}</strong>
      <CustomInput
        className='w-100px'
        type='number'
        value={inputValue}
        setState={setInputValue}
        needToUpdate={true}
      />
    </div>
  )
}
