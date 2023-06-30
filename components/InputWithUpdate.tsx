'use client'

import React, { useEffect, useRef, useState } from 'react'
import { InputNumber } from 'antd'

interface IInputProps {
  className: string
  type: string
  defaultValue: number | null
  value: number
  setValue: (prevState: number) => void
}

export const InputWithUpdate = ({ className, defaultValue, value, setValue }: IInputProps): JSX.Element => {
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
      alert(`
          REQUEST
          Value switched to the ${newValue}
      `)
      setValue(newValue)
      setInitialValue(newValue)
    }
  }

  return <InputNumber
    ref={inputRef}
    className={className}
    min='1'
    defaultValue={defaultValue}
    value={value}
    onChange={onInputChange}
    onBlur={onInputBlur}
  />
}
