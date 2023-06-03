'use client'

import React, { useEffect, useRef, useState } from 'react'

interface CustomInputProps {
  className?: string
  type: string
  value: number
  setState: (prevState: number) => void
  needToUpdate?: boolean
}

export const CustomInput = ({ className = '', type, value, setState, needToUpdate = false }: CustomInputProps): JSX.Element => {
  const [initialValue, setInitialValue] = useState<number>(value)
  const [newValue, setNewValue] = useState<number>(value)
  const [isRequestToUpdate, setIsRequestToUpdate] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const input = useRef(null)

  useEffect(() => {
    if ((initialValue !== newValue) && needToUpdate) setIsRequestToUpdate(prevState => true)
    else setIsRequestToUpdate(prevState => false)
  }, [initialValue, newValue])

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.value === '') setError(prevState => true)
    else setError(prevState => false)

    !needToUpdate && setState(Number(event.target.value))
    setNewValue(Number(event.target.value))
  }

  // TODO UPDATE REQUEST
  const onInputBlur = (): void => {
    if (isRequestToUpdate) {
      alert(`
          REQUEST
          Value switched to the ${newValue}
      `)
      setState(newValue)
      setInitialValue(newValue)
    }
  }

  const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter' && isRequestToUpdate) {
      input.current.blur()
      alert(`
          REQUEST
          Value switched to the ${newValue}
      `)
      setState(newValue)
      setInitialValue(newValue)
    }
  }

  return needToUpdate
    ? <input
      ref={input}
      className={!error ? `custom-input ${className}` : `custom-input ${className} custom-input--error`}
      type={type}
      defaultValue={value}
      onChange={onInputChange}
      onBlur={onInputBlur}
      onKeyDown={onInputKeyDown}
    />
    : <input
      className={!error ? `custom-input ${className}` : `custom-input ${className} custom-input--error`}
      type={type}
      value={value}
      onChange={onInputChange}
    />
}
