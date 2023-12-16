import {capitalize} from './main.js'

test('makes first character capitalized', () => {
  expect(capitalize('abcdef')).toBe('Abcdef')
})

test('doesn`t chance anything', () => {
  expect(capitalize('Abef')).toBe('Abef')
})

test('empty string', () => {
  expect(capitalize('')).toBe('')
})

test('one character string', () => {
  expect(capitalize('a')).toBe('A')
})

test('start with especial characters', () => {
  expect(capitalize('_dawsd')).toBe('_dawsd')
})