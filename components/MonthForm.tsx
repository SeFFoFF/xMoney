'use client'

import React, { useEffect, useState } from 'react'
import { Button, InputNumber, Select, Typography } from 'antd'
import dayjs from 'dayjs'
import { getMonthNumber } from '@utils/getMonthNumber'
import { useActions } from '@redux/hooks'
import { type IHistory, type IMonth, type IYear } from '@interfaces'

const { Title } = Typography
const { Option } = Select

const isFieldsEmpty = (firstField, secondField): boolean => {
  return firstField === undefined || firstField === null || secondField === 0 || secondField === null
}

interface IMonthFormProps {
  year: IYear | null
  dateInfo: {
    year: number
    month: string
  }
}

export const MonthForm = ({ year, dateInfo }: IMonthFormProps): JSX.Element => {
  const [selectValue, setSelectValue] = useState(null)
  const [inputValue, setInputValue] = useState(0)
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)

  const { addExpense } = useActions()

  useEffect(() => {
    if (isFieldsEmpty(selectValue, inputValue)) setIsButtonDisabled(prevState => true)
    else setIsButtonDisabled(prevState => false)
  }, [selectValue, inputValue])

  const onClickButton = async (): Promise<void> => {
    try {
      const expense: IHistory = {
        date: dayjs(),
        category: selectValue,
        amount: inputValue
      }

      const history: IHistory[] = [
        expense,
        ...year?.months[getMonthNumber(dateInfo.month)].history
      ]

      const monthInfo: { history: IHistory[] } = {
        ...year?.months[getMonthNumber(dateInfo.month)],
        history
      }

      const months: Array<{ history: IHistory[] } | IMonth> | undefined = year?.months.map(month => {
        if (month.name === dateInfo.month) return monthInfo
        return month
      })

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
