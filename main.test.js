import {
  capitalize,
  reverseString,
  newCalculator,
  caesarCipher
} from './main.js'

test('capitalize: makes first character capitalized', () => {
  expect(capitalize('abcdef')).toBe('Abcdef')
})

test('capitalize: doesn`t chance anything', () => {
  expect(capitalize('Abef')).toBe('Abef')
})

test('capitalize: empty string', () => {
  expect(capitalize('')).toBe('')
})

test('capitalize: one character string', () => {
  expect(capitalize('a')).toBe('A')
})

test('capitalize: start with especial characters', () => {
  expect(capitalize('_dawsd')).toBe('_dawsd')
})

test('reverseString: reverse lower case', () => {
  expect(reverseString('abc')).toBe('cba')
})

test('reverseString: with capital letters', () => {
  expect(reverseString('aBcccD')).toBe('DcccBa')
})

test('reverseString: one character', () => {
  expect(reverseString('a')).toBe('a')
})

test('reverseString: empty string', () => {
  expect(reverseString('')).toBe('')
})

let calculator = newCalculator()
test('calculator.add: positive integers', () => {
  expect(calculator.add(12, 32)).toBe(44)
})

test('calculator.add: float integers', () => {
  expect(calculator.add(12.2, 32.3)).toBe(44.5)
})

test('calculator.add: a + 0', () => {
  expect(calculator.add(12, 0)).toBe(12)
})

test('calculator.add: negative numbers', () => {
  expect(calculator.add(12, -2)).toBe(10)
})

test('calculator.subtract: positive integers', () => {
  expect(calculator.substract(12, 2)).toBe(10)
})

test('calculator.subtract: float integers', () => {
  expect(calculator.substract(12.2, 2.5)).toBe(9.7)
})

test('calculator.subtract: negative subtract (a - (-b))', () => {
  expect(calculator.substract(12, -2)).toBe(14)
})

test('calculator.subtract: negative subtract (-a - b)', () => {
  expect(calculator.substract(-12, 2)).toBe(-14)
})

test('calculator.subtract: negatives', () => {
  expect(calculator.substract(-12, -2)).toBe(-10)
})

test('calculator.divide: positive integers', () => {
  expect(calculator.divide(24, 2)).toBe(12)
})

test('calculator.divide: positive integers', () => {
  expect(calculator.divide(24.8, 2)).toBe(12.4)
})

test('calculator.divide: a / (-b)', () => {
  expect(calculator.divide(24, -2)).toBe(-12)
})

test('calculator.divide: (-a) / b', () => {
  expect(calculator.divide(-24, 2)).toBe(-12)
})

test('calculator.divide: float division', () => {
  expect(calculator.divide(24, 5)).toBe(4.8)
})

test('calculator.multiply: positive integers', () => {
  expect(calculator.multiply(3, 4)).toBe(12)
})

test('calculator.multiply: negative integer', () => {
  expect(calculator.multiply(3, -4)).toBe(-12)
})

test('calculator.multiply: float multiplication', () => {
  expect(calculator.multiply(3.3, 4)).toBe(13.2)
})

test('caesarCipher: abc shift 1', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd')
})

test('caesarCipher: abc shift 3', () => {
  expect(caesarCipher('abc', 3)).toBe('def')
})

test('caesarCipher: abc shift -2', () => {
  expect(caesarCipher('abc', -2)).toBe('yza')
})

test('caesarCipher: keeping case', () => {
  expect(caesarCipher('aBc', -2)).toBe('yZa')
})

test('caesarCipher: empty string', () => {
  expect(caesarCipher('', 12)).toBe('')
})