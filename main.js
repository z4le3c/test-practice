const capitalize = (str) => {
  if (!str) return str
  return str[0].toUpperCase() + str.slice(1)
}

const reverseString = (str) => {
  return str.split('').reverse().join('')
}

export {capitalize, reverseString}