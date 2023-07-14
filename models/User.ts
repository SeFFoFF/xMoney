import mongoose, { type Document, Schema } from 'mongoose'

export interface UserDocument extends Document {
  name: string
  email: string
  password: string
  createdAt: Date
}

const userSchema = new Schema<UserDocument>({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const User = mongoose.models.User || mongoose.model<UserDocument>('User', userSchema)

export default User
