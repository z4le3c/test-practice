const capitalize = require('./main.js')

test('makes first character capitalized', () => {
  expect(capitalize('abcdef')).toBe('Abcdef')
})

test('doesn`t chance anything', () => {
  expect(capitalize('Abef')).toBe('Abef')
})

test('empty string', () => {
  expect(capitalize('')).toBe('')
})

test('start with especial characters', () => {
  expect(capitalize('_dawsd')).toBe('_dawsd')
})