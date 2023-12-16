import { capitalize, reverseString, newCalculator} from './main.js'

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
  expect(calculator.add(12,32)).toBe(44)
})

test('calculator.add: a + 0', () => {
  expect(calculator.add(12,0)).toBe(12)
})

test('calculator.add: negative numbers', () => {
  expect(calculator.add(12,-2)).toBe(10)
})

test('calculator.subtract: positive integers', () => {
  expect(calculator.substract(12, 2)).toBe(10)
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

test('calculator.divide: a / (-b)', () => {
  expect(calculator.divide(24, -2)).toBe(-12)
})

test('calculator.divide: (-a) / b', () => {
  expect(calculator.divide(-24, 2)).toBe(-12)
})

test('calculator.divide: float division', () => {
  expect(calculator.divide(24, 5)).toBe(4.8)
})