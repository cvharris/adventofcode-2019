const input = require('./input-2')

const hasCharactersOccurringMultipleTimes = (str, times) => {
  const split = str.split('')
  for (let i = 0; i < split.length; i++) {
    if (str.match(new RegExp(split[i], 'g')).length === times) {
      return true
    }
  } 
  return false
}

const twice = input.filter(inp => hasCharactersOccurringMultipleTimes(inp, 2))
const thrice = input.filter(inp => hasCharactersOccurringMultipleTimes(inp, 3))

console.log(twice.length, thrice.length)

console.log(twice.length * thrice.length)