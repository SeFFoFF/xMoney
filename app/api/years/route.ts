import { NextResponse } from 'next/server'
import connectionToMongo from '@utils/db'
import Year from '@models/Year'

export const GET = async (request): Promise<NextResponse<unknown>> => {
  try {
    await connectionToMongo()

    const years = await Year.find()

    return new NextResponse(JSON.stringify(years))
  } catch (error) {
    return new NextResponse('Database error')
  }
}

export const POST = async (request): Promise<NextResponse<unknown>> => {
  const body = await request.json()
  const newYear = new Year(body)

  try {
    await connectionToMongo()

    await newYear.save()

    return new NextResponse('Year has been created')
  } catch (error) {
    return new NextResponse('Database Error')
  }
}
