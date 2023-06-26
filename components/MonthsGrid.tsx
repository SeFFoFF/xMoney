'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Button, Col, Row } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { type IYear, type IMonth } from '@interfaces'
import MonthCard from '@components/MonthCard'

const months: IMonth[] = [
  {
    name: 'January',
    income: 0,
    expenses: 0,
    history: []
  },
  {
    name: 'February',
    income: 0,
    expenses: 0,
    history: []
  },
  {
    name: 'March',
    income: 0,
    expenses: 0,
    history: []
  },
  {
    name: 'April',
    income: 0,
    expenses: 0,
    history: []
  },
  {
    name: 'May',
    income: 0,
    expenses: 0,
    history: []
  },
  {
    name: 'June',
    income: 0,
    expenses: 0,
    history: []
  },
  {
    name: 'July',
    income: 0,
    expenses: 0,
    history: []
  },
  {
    name: 'August',
    income: 0,
    expenses: 0,
    history: []
  },
  {
    name: 'September',
    income: 0,
    expenses: 0,
    history: []
  },
  {
    name: 'October',
    income: 0,
    expenses: 0,
    history: []
  },
  {
    name: 'November',
    income: 0,
    expenses: 0,
    history: []
  },
  {
    name: 'December',
    income: 0,
    expenses: 0,
    history: []
  }
]

interface IMonthsGridProps {
  year: IYear | undefined
  currentYear: string
}

const MonthsGrid = ({ year, currentYear }: IMonthsGridProps): JSX.Element => {
  const router = useRouter()

  const renderMonthCards = (): JSX.Element[] => {
    const renderArray = year !== undefined ? year.months : months
    return renderArray.map(month => (
      <Col key={month.name} span={6}>
        <MonthCard name={month.name} income={month.income} expenses={month.expenses} currentYear={currentYear} />
      </Col>
    ))
  }

  const onArrowButtonClick = (direction: string): void => {
    if (direction === 'left') router.push(`/${parseInt(currentYear) - 1}`)
    if (direction === 'right') router.push(`/${parseInt(currentYear) + 1}`)
  }

  return (
    <div className='home-screen flex flex-col gap-y-16'>
      <div className='flex items-center justify-center gap-x-2'>
        <Button type="text" onClick={() => { onArrowButtonClick('left') }}>
          <LeftOutlined />
        </Button>

        <h2 className='text-[30px]'>{currentYear}</h2>

        <Button type="text" onClick={() => { onArrowButtonClick('right') }}>
          <RightOutlined/>
        </Button>
      </div>
      <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
        { renderMonthCards() }
      </Row>
    </div>
  )
}

export default MonthsGrid
