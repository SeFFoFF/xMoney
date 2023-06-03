'use client'

import React from 'react'

interface CustomButtonProps {
  isDisabled: boolean
  onClick: () => void
  text: string
}

export const CustomButton = ({ isDisabled, onClick, text }: CustomButtonProps): JSX.Element => {
  return (
    <button
      className={!isDisabled ? 'custom-button' : 'custom-button custom-button--disabled'}
      onClick={onClick}
      disabled={isDisabled}
    >
      { text }
    </button>
  )
}
