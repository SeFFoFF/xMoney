'use client'

import React, { useState } from 'react'
import { CustomInput } from '@components/CustomInput'

interface ExpenseItemProps {
  category: string
  date: string | number
  amount: number
}

export const ExpenseItem = ({ category, date, amount }: ExpenseItemProps): JSX.Element => {
  const [inputValue, setInputValue] = useState<number>(amount)

  return (
    <div className='flex items-center justify-between border-b pb-1'>
      <p className='w-150px'>{category}</p>
      <strong>{date}</strong>
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
