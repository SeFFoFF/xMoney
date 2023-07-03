'use client'

import React, { useEffect, useState } from 'react'
import { Button, InputNumber, Select, Typography } from 'antd'
import { useActions, useTypedSelector } from '@redux/hooks'
import { getMonthsWithNewExpense } from '@utils/getMonthsWithNewExpense'
import { selectYear } from '@redux/features/year/year.slice'

const { Title } = Typography
const { Option } = Select

const isFieldsEmpty = (firstField, secondField): boolean => {
  return firstField === undefined || firstField === null || secondField === 0 || secondField === null
}

interface IMonthFormProps {
  dateInfo: {
    year: number
    month: string
  }
}

export const ExpensesForm = ({ dateInfo }: IMonthFormProps): JSX.Element => {
  const [selectValue, setSelectValue] = useState(null)
  const [inputValue, setInputValue] = useState(0)
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)

  const { year } = useTypedSelector(selectYear)
  const { addExpense, setNameOfMonth } = useActions()

  setNameOfMonth(dateInfo.month)

  useEffect(() => {
    if (isFieldsEmpty(selectValue, inputValue)) setIsButtonDisabled(prevState => true)
    else setIsButtonDisabled(prevState => false)
  }, [selectValue, inputValue])

  const onClickButton = async (): Promise<void> => {
    const { expense, months } = getMonthsWithNewExpense(year, dateInfo.month, selectValue, inputValue)

    // TODO replace userId to real userId
    const userId: string = '1'

    try {
      await fetch(`/api/${dateInfo.year}/${dateInfo.month}`, {
        method: 'PUT',
        body: JSON.stringify({
          year: dateInfo.year,
          months,
          userId
        })
      })
    } catch (error) {
      console.error(error)
    }

    addExpense(expense)
    setInputValue(0)
  }

  return (
    <div className='flex flex-col justify-between gap-5'>
      <Title level={3}>Add expense</Title>

      <div className='flex items-center justify-between gap-2'>
        <Select
          className='w-1/2'
          placeholder="Select a category"
          onChange={setSelectValue}
          allowClear
        >
          <Option value="Housing expenses">Housing expenses</Option>
          <Option value="Food">Food</Option>
          <Option value="Transportation">Transportation</Option>
          <Option value="Health">Health</Option>
          <Option value="Clothing">Clothing</Option>
          <Option value="Entertainment">Entertainment</Option>
          <Option value="Education">Education</Option>
          <Option value="Debts and loans">Debts and loans</Option>
          <Option value="Gifts">Gifts</Option>
        </Select>
        <InputNumber
          className='w-1/2'
          min='1'
          controls={false}
          defaultValue={null}
          value={inputValue}
          onChange={setInputValue}
        />
        <Button onClick={onClickButton} disabled={isButtonDisabled}>Add</Button>
      </div>
    </div>
  )
}
