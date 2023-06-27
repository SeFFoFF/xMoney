import { NextResponse } from 'next/server'
import connectionToMongo from '@utils/db'
import Year from '@models/Year'
import { type IMonth } from '@interfaces'

export const GET = async (request, { params }): Promise<NextResponse<IMonth | null>> => {
  try {
    await connectionToMongo()

    const year = await Year.findOne()
      .where('year').equals(params.year)

    if (year === null) return new NextResponse(JSON.stringify(null))

    const currentMonth: IMonth[] = year.months.filter(month => month.name === params.month)
    return new NextResponse(JSON.stringify(currentMonth[0]))
  } catch (error) {
    console.error(error)
    return new NextResponse('Database error')
  }
}
