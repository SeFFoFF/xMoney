import { type IMonth } from '@interfaces/IMonth'

export interface IYear {
  user_id: string | number
  year: number
  months: IMonth[]
}
