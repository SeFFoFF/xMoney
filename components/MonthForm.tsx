'use client'

import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addExpense } from '@redux/features/expenses/expenses.slice'
import { Button, Select, Typography } from 'antd'
import { v4 as uuid } from 'uuid'
import dayjs from 'dayjs'
import { Input } from '@components/Input'
import { type IHistory } from '@interfaces/IMonth'

const { Title } = Typography
const { Option } = Select

const isFieldsEmpty = (firstField, secondField): boolean => {
  return firstField === undefined || firstField === null || secondField === 0 || secondField === null
}

export const MonthForm = (): JSX.Element => {
  const [selectValue, setSelectValue] = useState(null)
  const [inputValue, setInputValue] = useState(0)
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)

  const dispatch = useDispatch()

  const uniqueId = uuid()

  useEffect(() => {
    if (isFieldsEmpty(selectValue, inputValue)) setIsButtonDisabled(prevState => true)
    else setIsButtonDisabled(prevState => false)
  }, [selectValue, inputValue])

  // TODO post request to DB
  const onClickButton = (): void => {
    try {
      const expense: IHistory = {
        id: uniqueId,
        date: dayjs(),
        category: selectValue,
        amount: inputValue
      }
      dispatch(addExpense(expense))
      setInputValue(0)
    } catch (e) {
      alert(e)
    }
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
        <Input
          className='w-1/2'
          type='number'
          defaultValue={null}
          value={inputValue}
          onChange={setInputValue}
        />
        <Button onClick={onClickButton} disabled={isButtonDisabled}>Add</Button>
      </div>
    </div>
  )
}
