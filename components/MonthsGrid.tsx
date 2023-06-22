'use client'

import React from 'react'
import { Col, Row, Card } from 'antd'
import { type IYear } from '@interfaces/IYear'

// add id to history
const db: IYear[] = [
  {
    year: 2023,
    months: [
      {
        name: 'January',
        income: 34256,
        expenses: 29813,
        history: [
          {
            id: 1,
            date: 1,
            category: 'Housing expenses',
            amount: 50
          },
          {
            id: 2,
            date: 2,
            category: 'Food',
            amount: 500
          },
          {
            id: 3,
            date: 3,
            category: 'Transportation',
            amount: 1000
          },
          {
            date: 4,
            category: 'Health',
            amount: 320
          },
          {
            date: 5,
            category: 'Clothing',
            amount: 2000
          },
          {
            date: 6,
            category: 'Entertainment',
            amount: 5150
          },
          {
            date: 7,
            category: 'Education',
            amount: 12500
          },
          {
            date: 8,
            category: 'Debts and loans',
            amount: 100
          },
          {
            date: 9,
            category: 'Gifts',
            amount: 1000
          }
        ]
      },
      {
        name: 'February',
        income: 32608,
        expenses: 29532,
        history: [
          {
            date: 1,
            category: 'Housing expenses',
            amount: 50
          },
          {
            date: 2,
            category: 'Food',
            amount: 500
          },
          {
            date: 3,
            category: 'Transportation',
            amount: 1000
          },
          {
            date: 4,
            category: 'Health',
            amount: 320
          }
        ]
      },
      {
        name: 'March',
        income: 32618,
        expenses: 57326,
        history: [
          {
            date: 4,
            category: 'Health',
            amount: 320
          },
          {
            date: 5,
            category: 'Clothing',
            amount: 2000
          },
          {
            date: 6,
            category: 'Entertainment',
            amount: 5150
          }
        ]
      },
      {
        name: 'April',
        income: 35842,
        expenses: 34316,
        history: [
          {
            date: 1,
            category: 'Housing expenses',
            amount: 50
          },
          {
            date: 2,
            category: 'Food',
            amount: 500
          },
          {
            date: 3,
            category: 'Transportation',
            amount: 1000
          },
          {
            date: 8,
            category: 'Debts and loans',
            amount: 100
          },
          {
            date: 9,
            category: 'Gifts',
            amount: 1000
          }
        ]
      },
      {
        name: 'May',
        income: 71492,
        expenses: 28774,
        history: [
          {
            date: 2,
            category: 'Food',
            amount: 500
          },
          {
            date: 3,
            category: 'Transportation',
            amount: 1000
          },
          {
            date: 6,
            category: 'Entertainment',
            amount: 5150
          },
          {
            date: 7,
            category: 'Education',
            amount: 12500
          }
        ]
      },
      {
        name: 'June',
        income: 0,
        expenses: 0
      },
      {
        name: 'July',
        income: 0,
        expenses: 0
      },
      {
        name: 'August',
        income: 0,
        expenses: 0
      },
      {
        name: 'September',
        income: 0,
        expenses: 0
      },
      {
        name: 'October',
        income: 0,
        expenses: 0
      },
      {
        name: 'November',
        income: 0,
        expenses: 0
      },
      {
        name: 'December',
        income: 0,
        expenses: 0
      }
    ]
  }
]

export const MonthsGrid = (): JSX.Element => {
  const renderMonthCards = (): JSX.Element[] => {
    return db[0].months.map(month => (
      <Col key={month.name} span={6}>
        <Card title={month.name} bordered={true}>
          <p>{month.income}</p>
          <p>{month.expenses}</p>
        </Card>
      </Col>
    ))
  }

  return (
    <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
      { renderMonthCards() }
    </Row>
  )
}
