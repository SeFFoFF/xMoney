'use client'

import React, { useEffect, useRef, useState } from 'react'
import { InputNumber } from 'antd'

interface IInputProps {
  className: string
  type: string
  defaultValue: number | null
  value: number
  setValue: (prevState: number) => void
  setNeedToShowMessage: (prevState: boolean) => void
}

export const InputWithUpdate = ({ className, defaultValue, value, setValue, setNeedToShowMessage }: IInputProps): JSX.Element => {
  const [initialValue, setInitialValue] = useState(value)
  const [newValue, setNewValue] = useState(value)
  const [isRequestToUpdate, setIsRequestToUpdate] = useState(false)

  const inputRef = useRef(null)

  useEffect(() => {
    if (initialValue !== newValue) setIsRequestToUpdate(prevState => true)
    else setIsRequestToUpdate(prevState => false)
  }, [initialValue, newValue])

  const onInputChange = (value): void => {
    setNewValue(value)
  }

  const onInputBlur = (): void => {
    const isInputValueEqualToInitialValue = parseInt(inputRef.current?.value) === initialValue

    if (isRequestToUpdate && !isInputValueEqualToInitialValue) {
      try {
        setValue(newValue)
        setInitialValue(newValue)
        setNeedToShowMessage(prevState => true)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return <InputNumber
    ref={inputRef}
    className={className}
    min='1'
    controls={false}
    defaultValue={defaultValue}
    value={value}
    onChange={onInputChange}
    onBlur={onInputBlur}
  />
}
