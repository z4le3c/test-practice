import {capitalize, reverseString} from './main.js'

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