'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button, Skeleton, message } from 'antd'
import { ArrowLeftOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons'
import { useActions, useTypedSelector } from '@redux/hooks'
import { selectDate } from '@redux/features/date/date.slice'
import { getMonthForRouter } from '@utils/getMonthForRouter'
import { InputWithUpdate } from '@components/InputWithUpdate'
import { selectMonth } from '@redux/features/month/month.slice'
import { selectYear } from '@redux/features/year/year.slice'
import { getMonthsWithUpdatedIncome } from '@utils/getMonthsWithUpdatedIncome'

export const MonthInfo = (): JSX.Element => {
  const { month, isLoading } = useTypedSelector(selectMonth)
  const { year } = useTypedSelector(selectYear)
  const { numberOfYear, nameOfMonth } = useTypedSelector(selectDate)

  const { updateIncome } = useActions()

  const [incomeValue, setIncomeValue] = useState<number | null>(null)
  const [needToShowMessage, setNeedToShowMessage] = useState(false)
  const [messageApi, contextHolder] = message.useMessage()

  const router = useRouter()

  useEffect(() => {
    const showSuccessMessage = async (): Promise<void> => {
      await messageApi.open({
        type: 'success',
        content: 'Expense has been changed',
        duration: 2
      })
    }

    const updateExpense = async (): Promise<void> => {
      const months = getMonthsWithUpdatedIncome(year, nameOfMonth, incomeValue)

      // TODO replace userId to real userId
      const userId: string = '1'

      try {
        await fetch(`/api/${numberOfYear}/${nameOfMonth}`, {
          method: 'PUT',
          body: JSON.stringify({
            year: numberOfYear,
            months,
            userId
          })
        })
        updateIncome(incomeValue)
        await showSuccessMessage()
      } catch (error) {
        console.error(error)
      }

      setNeedToShowMessage(prevState => false)
    }

    if (needToShowMessage) {
      void updateExpense()
    }
  }, [needToShowMessage])

  const renderMonthInfo = (): JSX.Element => {
    if (isLoading) return <Skeleton.Input active block size='small' />

    return (
      <>
        <div className='flex items-center gap-x-5'>
          <p>Income</p>
          <InputWithUpdate
            className='w-100px'
            defaultValue={incomeValue}
            value={month?.income}
            setValue={setIncomeValue}
            setNeedToShowMessage={setNeedToShowMessage}
          />
        </div>

        {
          month?.expenses !== 0 &&
            <div className='flex gap-x-1'>
              <p>Expenses</p>
              <p>{month?.expenses}</p>
            </div>
        }
      </>
    )
  }

  const onArrowClick = (direction: string): void => {
    const month = getMonthForRouter(nameOfMonth, direction)
    router.push(`/${numberOfYear}/${month}`)
  }

  return (
    <div className='flex flex-col gap-y-10 h-full bg-white rounded-lg p-24px'>
      {contextHolder}

      <div className='flex items-center justify-between gap-x-2'>
        <Button type="text" onClick={() => { router.push(`/${numberOfYear}/`) }}>
          <ArrowLeftOutlined />
        </Button>

        <div className='flex items-center gap-x-2'>
          <h2 className='text-[30px]'>{nameOfMonth}</h2>
          <Button type="text" onClick={() => { onArrowClick('left') }}>
            <LeftOutlined />
          </Button>
          <Button type="text" onClick={() => { onArrowClick('right') }}>
            <RightOutlined/>
          </Button>
        </div>
      </div>

      <div className='flex items-center justify-between'>
        {
          renderMonthInfo()
        }
      </div>

    </div>
  )
}
