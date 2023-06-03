'use client'

import React from 'react'
import Select from 'react-select'

interface CustomSelectProps {
  value: string | any
  setState: (prevState: { value: string, label: string }) => void
}

const options: any = [
  { value: 'housingExpenses', label: 'Housing expenses' },
  { value: 'food', label: 'Food' },
  { value: 'transportation', label: 'Transportation' },
  { value: 'health', label: 'Health' },
  { value: 'clothing', label: 'Clothing' },
  { value: 'entertainment ', label: 'Entertainment ' },
  { value: 'education', label: 'Education' },
  { value: 'debtsAndLoans', label: 'Debts and loans' },
  { value: 'gifts', label: 'Gifts' }
]

export const CustomSelect = ({ value, setState }: CustomSelectProps): JSX.Element => {
  return (
    <Select
      className="w-200px"
      defaultValue={value}
      onChange={setState}
      options={options}
      isSearchable={false}
    />
  )
}
