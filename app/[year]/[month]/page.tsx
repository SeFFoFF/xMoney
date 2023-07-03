import React from 'react'
import { MonthInfo } from '@components/MonthInfo'
import { MonthActions } from '@components/MonthActions'
import { MonthStats } from '@components/MonthStats'

const Month = async (): Promise<JSX.Element> => {
  return (
    <div className='h-full'>
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
