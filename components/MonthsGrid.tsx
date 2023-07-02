'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Button, Col, Row } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { useActions } from '@redux/hooks'
import MonthCard from '@components/MonthCard'
import { type IYear, type IMonth } from '@interfaces'

const months: IMonth[] = [
  {
    _id: '1',
    name: 'January',
    income: 0,
    expenses: 0,
    history: []
  },
  {
    _id: '2',
    name: 'February',
    income: 0,
    expenses: 0,
    history: []
  },
  {
    _id: '3',
    name: 'March',
    income: 0,
    expenses: 0,
    history: []
  },
  {
    _id: '4',
    name: 'April',
    income: 0,
    expenses: 0,
    history: []
  },
  {
    _id: '5',
    name: 'May',
    income: 0,
    expenses: 0,
    history: []
  },
  {
    _id: '6',
    name: 'June',
    income: 0,
    expenses: 0,
    history: []
  },
  {
    _id: '7',
    name: 'July',
    income: 0,
    expenses: 0,
    history: []
  },
  {
    _id: '8',
    name: 'August',
    income: 0,
    expenses: 0,
    history: []
  },
  {
    _id: '9',
    name: 'September',
    income: 0,
    expenses: 0,
    history: []
  },
  {
    _id: '10',
    name: 'October',
    income: 0,
    expenses: 0,
    history: []
  },
  {
    _id: '11',
    name: 'November',
    income: 0,
    expenses: 0,
    history: []
  },
  {
    _id: '12',
    name: 'December',
    income: 0,
    expenses: 0,
    history: []
  }
]

interface IMonthsGridProps {
  year: IYear | null
  numberOfYear: number
}

const MonthsGrid = ({ year, numberOfYear }: IMonthsGridProps): JSX.Element => {
  const router = useRouter()
  const { setYear, setNumberOfYear } = useActions()

  setNumberOfYear(numberOfYear)
  setYear(year)

  const renderMonthCards = (): JSX.Element[] => {
    const renderArray = year !== null ? year.months : months
    return renderArray.map(month => (
      <Col key={month._id} span={6}>
        <MonthCard monthName={month.name} income={month.income} expenses={month.expenses} />
      </Col>
    ))
  }

  const onArrowButtonClick = (direction: string): void => {
    if (direction === 'left') router.push(`/${numberOfYear - 1}`)
    if (direction === 'right') router.push(`/${numberOfYear + 1}`)
  }

  return (
    <div className='home-screen flex flex-col gap-y-16'>
      <div className='flex items-center justify-center gap-x-2'>
        <Button type="text" onClick={() => { onArrowButtonClick('left') }}>
          <LeftOutlined />
        </Button>

        <h2 className='text-[30px]'>{numberOfYear}</h2>

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
