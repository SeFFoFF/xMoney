import { NextResponse } from 'next/server'
import connectionToMongo from '@utils/db'
import Year from '@models/Year'
import { type IMonth } from '@interfaces'

export const GET = async (request, { params }): Promise<NextResponse<IMonth | null>> => {
  try {
    await connectionToMongo()

    const year = await Year.findOne()
      .where('year').equals(params.year)
      // TODO get month by user_id
      .where('user_id').equals('1')

    if (year === null) return new NextResponse(JSON.stringify(null))

    const currentMonth: IMonth[] = year.months.filter(month => month.name === params.month)
    return new NextResponse(JSON.stringify(currentMonth[0]))
  } catch (error) {
    console.error(error)
    return new NextResponse('Database error')
  }
}

export const PUT = async (request): Promise<NextResponse<string>> => {
  const body = await request.json()

  try {
    await connectionToMongo()

    await Year.findOneAndUpdate(
      { user_id: body.userId, year: body.year },
      { $set: { months: body.months } },
      { new: true }
    )

    return new NextResponse('Year has been updated')
  } catch (error) {
    return new NextResponse('Database Error')
  }
}
