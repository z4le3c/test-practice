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

export { capitalize, reverseString, newCalculator, caesarCipher }
