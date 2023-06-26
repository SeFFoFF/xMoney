import mongoose, { type Document, Schema } from 'mongoose'
import { type Dayjs } from 'dayjs'

interface HistoryDocument extends Document {
  date: Dayjs | string
  category: string
  amount: number
}

interface MonthDocument extends Document {
  name: string
  income: number
  expenses: number
  history?: HistoryDocument[]
}

interface YearDocument extends Document {
  user_id: string
  year: number
  months: MonthDocument[]
}

const historySchema = new Schema<HistoryDocument>({
  date: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
})

const monthSchema = new Schema<MonthDocument>({
  name: {
    type: String,
    required: true
  },
  income: {
    type: Number,
    required: true
  },
  expenses: {
    type: Number,
    required: true
  },
  history: [historySchema]
})

const yearSchema = new Schema<YearDocument>({
  user_id: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  months: [monthSchema]
})

const Year = mongoose.models.Year || mongoose.model<YearDocument>('Year', yearSchema)

export default Year
