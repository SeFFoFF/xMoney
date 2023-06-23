import { InputNumber } from 'antd'

interface IInputProps {
  className: string
  type: string
  defaultValue: number | null
  value: number
  onChange: (prevState: number) => void
}

export const Input = ({ className, type, defaultValue, value, onChange }: IInputProps): JSX.Element => {
  return (
    <InputNumber
      className={className}
      min={1}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
    />
  )
}
