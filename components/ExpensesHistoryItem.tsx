'use client'

import React, { useEffect, useState } from 'react'
import { message } from 'antd'
import dayjs, { type Dayjs } from 'dayjs'
import { InputWithUpdate } from '@components/InputWithUpdate'
import { getMonthsWithUpdatedExpense } from '@utils/getMonthsWithUpdatedExpense'
import { useTypedSelector } from '@redux/hooks'
import { selectDate } from '@redux/features/date/date.slice'
import { selectYear } from '@redux/features/year/year.slice'
import { type IHistory } from '@interfaces'

interface ExpenseItemProps {
  item: IHistory
  date: Dayjs | string | number
  category: string
  amount: number
}

export const ExpensesHistoryItem = ({ item, category, date, amount }: ExpenseItemProps): JSX.Element => {
  const [inputValue, setInputValue] = useState(amount)
  const [needToShowMessage, setNeedToShowMessage] = useState(false)
  const [messageApi, contextHolder] = message.useMessage()

  const formattedDate = dayjs(date).format('D MMMM')

  const { year } = useTypedSelector(selectYear)
  const { numberOfYear, nameOfMonth } = useTypedSelector(selectDate)

  useEffect(() => {
    const showSuccessMessage = async (): Promise<void> => {
      await messageApi.open({
        type: 'success',
        content: 'Expense has been changed',
        duration: 2
      })
    }

    const updateExpense = async (): Promise<void> => {
      const months = getMonthsWithUpdatedExpense(year, nameOfMonth, item, inputValue)

      // TODO replace userId to real userId
      const userId: string = '1'

      // TODO нужно делать проверку по месяцу, если сейчас июнь, то можно добавить только в июнь
      // или какой-то аналог

      try {
        await fetch(`/api/${numberOfYear}/${nameOfMonth}`, {
          method: 'PUT',
          body: JSON.stringify({
            year: numberOfYear,
            months,
            userId
          })
        })
        await showSuccessMessage()
      } catch (error) {
        // TODO create error message
        console.error(error)
      }

      setNeedToShowMessage(prevState => false)
    }

    if (needToShowMessage) {
      void updateExpense()
    }
  }, [needToShowMessage])

  // TODO create DELETE logic

  return (
    <div className='w-full flex items-center justify-between'>
      {contextHolder}
      <p className='w-150px'>{category}</p>
      <strong>{formattedDate}</strong>
      <InputWithUpdate
        className='w-100px'
        defaultValue={amount}
        value={inputValue}
        setValue={setInputValue}
        setNeedToShowMessage={setNeedToShowMessage}
      />
    </div>
  )
}
