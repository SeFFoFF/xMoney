import React from 'react'
import { MonthActions } from '@components/MonthActions'
import { MonthStats } from '@components/MonthStats'
import { MonthInfo } from '@components/MonthInfo'

const Month = async (): Promise<JSX.Element> => {
  return (
    <div className='month-screen h-full'>
      <div className='flex gap-[16px] h-full'>
        <div className='flex flex-col gap-[16px] w-1/2 h-full overflow-hidden'>
          <MonthInfo/>
          <MonthActions/>
        </div>
        <MonthStats/>
      </div>
    </div>
  )
}

export default Month
