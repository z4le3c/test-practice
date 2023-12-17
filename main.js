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
  calculator.divide = (a, b) => a / b
  calculator.multiply = (a, b) => a * b

  return calculator
}

const alpha = 'abcdefghijklmnopqrstuvwxyz'
const map = new Map()
for (let i = 0; i < alpha.length; i++) {
  map.set(alpha[i], i)
}
const caesarCipher = (str, key) => {
  const output = []
  for (const letter of str) {
    let index = map.get(letter.toLowerCase())
    index += key
    let newIndex = (alpha.length + index) % alpha.length
    let newLetter = alpha[newIndex]
    if (!map.has(letter)) newLetter = newLetter.toUpperCase()
    output.push(newLetter)
  }

  return output.join('')
}

const analyzeArray = (arr) => {
  const obj = {}
  obj.length = arr.length
  let sum = 0
  let min = Infinity
  let max = -Infinity
  for (const num of arr) {
    sum += num
    if (num < min) min = num
    if (num > max) max = num
  }
  obj.average = sum / arr.length
  obj.min = min
  obj.max = max

  return obj
}

export { capitalize, reverseString, newCalculator, caesarCipher, analyzeArray }
