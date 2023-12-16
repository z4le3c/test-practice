const capitalize = (str) => {
  if (!str) return str
  return str[0].toUpperCase() + str.slice(1)
}

const reverseString = (str) => {
  return str.split('').reverse().join('')
}

const newCalculator = () => {
  const calculator = {}

  calculator.add = (a, b) => a + b
  calculator.substract = (a, b) => a - b

  return calculator
}

export { capitalize, reverseString, newCalculator }
