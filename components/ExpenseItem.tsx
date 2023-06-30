'use client'

import React, { useState } from 'react'
import dayjs, { type Dayjs } from 'dayjs'
import { CustomInput } from '@components/CustomInput'

interface ExpenseItemProps {
  date: Dayjs | string | number
  category: string
  amount: number
}

export const ExpenseItem = ({ category, date, amount }: ExpenseItemProps): JSX.Element => {
  const [inputValue, setInputValue] = useState(amount)

  const formattedDate = dayjs(date).format('D MMMM')

  // TODO create UPDATE and DELETE logic

  // TODO CHANGE CUSTOM INPUT TO INPUT ANT DESIGN
  return (
    <div className='w-full flex items-center justify-between'>
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
