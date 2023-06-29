import { NextResponse } from 'next/server'
import connectionToMongo from '@utils/db'
import Year from '@models/Year'
import { type IYear } from '@interfaces'

export const GET = async (request, { params }): Promise<NextResponse<IYear>> => {
  try {
    await connectionToMongo()

    const year = await Year.findOne()
      .where('year').equals(params.year)
      // TODO get month by user_id
      .where('user_id').equals('1')

    const data = JSON.stringify(year)

    return new NextResponse(data)
  } catch (error) {
    console.error(error)
    return new NextResponse('Database error')
  }
}
