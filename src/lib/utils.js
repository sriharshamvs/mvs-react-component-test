export const addition = (number1, number2) => {
  return number1 + number2
}
export const subtraction = (number1, number2) => {
  return number2 - number1
}
export const multiplication = (number1, number2) => {
  return number1 * number2
}
export const division = (number1, number2) => {
  if(number2 === 0) {
    return undefined
  } else {
    return number1/number2
  }
}