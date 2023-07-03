export const getMonthForRouter = (month: string, direction: string): string => {
  let monthNumber: number = 0

  const months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  switch (month.toLowerCase()) {
    case 'january':
      monthNumber = 0
      break
    case 'february':
      monthNumber = 1
      break
    case 'march':
      monthNumber = 2
      break
    case 'april':
      monthNumber = 3
      break
    case 'may':
      monthNumber = 4
      break
    case 'june':
      monthNumber = 5
      break
    case 'july':
      monthNumber = 6
      break
    case 'august':
      monthNumber = 7
      break
    case 'september':
      monthNumber = 8
      break
    case 'october':
      monthNumber = 9
      break
    case 'november':
      monthNumber = 10
      break
    case 'december':
      monthNumber = 11
      break
    default:
      return -1
  }

  if (direction === 'left' && (monthNumber - 1 === -1)) return months[11]
  else if (direction === 'left') return months[monthNumber - 1]

  if (direction === 'right' && (monthNumber + 1 === 12)) return months[0]
  else if (direction === 'right') return months[monthNumber + 1]
}
