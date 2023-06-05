'use client'

import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addExpense } from '@redux/features/expense/expensesSlice'
import { CustomSelect, CustomInput, CustomButton } from '@components'
import { v4 as uuid } from 'uuid'
import { type IHistory } from '@interfaces/IMonth'
import dayjs from 'dayjs'

const isFieldsEmpty = (firstField, secondField): boolean => {
  return firstField.value === 'selectTheCategory' || secondField === 0 || secondField === '' || secondField === '0'
}

interface ISelect {
  value: string
  label: string
}

export const MonthForm = (): JSX.Element => {
  const [selectValue, setSelectValue] = useState<ISelect>({ value: 'selectTheCategory', label: 'Select a category' })
  const [inputValue, setInputValue] = useState<number>(0)
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true)

  const dispatch = useDispatch()

  const uniqueId = uuid()

  useEffect(() => {
    if (isFieldsEmpty(selectValue, inputValue)) setIsButtonDisabled(prevState => true)
    else setIsButtonDisabled(prevState => false)
  }, [selectValue, inputValue])

  // TODO ADD NEW ITEM TO THE ARRAY
  const handleAddButton = (): void => {
    try {
      const expense: IHistory = {
        id: uniqueId,
        date: dayjs(),
        category: selectValue.label,
        amount: inputValue
      }
      dispatch(addExpense(expense))
      setInputValue(0)
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div className='flex flex-col justify-between gap-1 h-[22%] bg-white rounded-lg px-10 py-5'>
      <h3>Add expense</h3>

      <div className='flex items-center justify-between gap-2'>
        <CustomSelect value={selectValue.label} setState={setSelectValue}/>
        <CustomInput className='custom-input--border' type='number' value={inputValue} setState={setInputValue}/>
        <CustomButton isDisabled={isButtonDisabled} onClick={handleAddButton} text='Add'/>
      </div>
    </div>
  )
}
