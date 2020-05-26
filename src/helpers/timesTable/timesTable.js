const timesTable = {
  '00:00': 'a',
  '00:30': 'b',
  '01:00': 'c',
  '01:30': 'd',
  '02:00': 'e',
  '02:30': 'f',
  '03:00': 'g',
  '03:30': 'h',
  '04:00': 'i',
  '04:30': 'j',
  '05:00': 'k',
  '05:30': 'l',
  '06:00': 'm',
  '06:30': 'n',
  '07:00': 'o',
  '07:30': 'p',
  '08:00': 'q',
  '08:30': 'r',
  '09:00': 's',
  '09:30': 't',
  '10:00': 'u',
  '10:30': 'v',
  '11:00': 'w',
  '11:30': 'x',
  '12:00': 'y',
  '12:30': 'z',
  '13:00': 'A',
  '13:30': 'B',
  '14:00': 'C',
  '14:30': 'D',
  '15:00': 'E',
  '15:30': 'F',
  '16:00': 'G',
  '16:30': 'H',
  '17:00': 'I',
  '17:30': 'J',
  '18:00': 'K',
  '18:30': 'L',
  '19:00': 'M',
  '19:30': 'N',
  '20:00': 'O',
  '20:30': 'P',
  '21:00': 'Q',
  '21:30': 'R',
  '22:00': 'S',
  '22:30': 'T',
  '23:00': 'U',
  '23:30': 'V',
}
const timesTableInverted = {
  a: '00:00',
  b: '00:30',
  c: '01:00',
  d: '01:30',
  e: '02:00',
  f: '02:30',
  g: '03:00',
  h: '03:30',
  i: '04:00',
  j: '04:30',
  k: '05:00',
  l: '05:30',
  m: '06:00',
  n: '06:30',
  o: '07:00',
  p: '07:30',
  q: '08:00',
  r: '08:30',
  s: '09:00',
  t: '09:30',
  u: '10:00',
  v: '10:30',
  w: '11:00',
  x: '11:30',
  y: '12:00',
  z: '12:30',
  A: '13:00',
  B: '13:30',
  C: '14:00',
  D: '14:30',
  E: '15:00',
  F: '15:30',
  G: '16:00',
  H: '16:30',
  I: '17:00',
  J: '17:30',
  K: '18:00',
  L: '18:30',
  M: '19:00',
  N: '19:30',
  O: '20:00',
  P: '20:30',
  Q: '21:00',
  R: '21:30',
  S: '22:00',
  T: '22:30',
  U: '23:00',
  V: '23:30',
  W: '?',
}

const dayTable = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]
// return number in string
// if number is 1 digit add a padding zero
const formatTime = hours => {
  let strNum = hours.toString()
  if (strNum.length === 1) {
    strNum = '0' + strNum
  }
  return strNum
}
const checkForValidOpeningsFormat = openings => {
  let tableKeys = Object.keys(timesTableInverted)
  tableKeys.push('0')
  if (openings.length > 14) {
    return false
  }
  for (var i = 0; i < openings.length; i++) {
    if (!tableKeys.includes(openings.charAt(i))) return false
  }
  return true
}
const getOpeningUnformated = openHours => {
  let openingArray
  if (openHours && checkForValidOpeningsFormat(openHours)) {
    openingArray = openHours.split('')
  } else {
    // if unkwown openHours we use char for ? sign
    openingArray = 'WWWWWWWWWWWWWW'.split('')
  }
  let counter = 0
  let gotOpenHour = false
  /* eslint-disable */
  const hoursToRenders = openingArray.map((opening, index) => {
    let count
    if (opening === '0') {
      count = counter
      counter++
      return `${dayTable[count]}/Closed`
    } else {
      if (!gotOpenHour) {
        // we are the first letter of the day
        openHours = timesTableInverted[`${opening}`]
          ? timesTableInverted[`${opening}`]
          : '?'
        gotOpenHour = true
      } else {
        count = counter
        const closingHours = timesTableInverted[`${opening}`]
          ? timesTableInverted[`${opening}`]
          : '?'
        counter++
        gotOpenHour = false
        return `${dayTable[count]}/${openHours} - ${closingHours}`
      }
    }
  })
  return hoursToRenders.filter(function(el) {
    return el != null
  })
}
const getOpeningFormated = openHours => {
  let formated = ''
  openHours.map(open => {
    if (!open.isOpen) {
      formated += '0'
    } else {
      formated +=
        (timesTable[`${open.open}`] ? timesTable[`${open.open}`] : 'W') +
        (timesTable[`${open.close}`] ? timesTable[`${open.close}`] : 'W')
    }
  })
  return formated
}
export { timesTable, formatTime, getOpeningFormated, getOpeningUnformated }
