const input = require('./input-1')

const solution = input.reduce((freq, inp) => {
  const rule = inp.slice(0, 1)
  const str = parseInt(inp.slice(1), 10)
  freq = rule === '+' ? freq + str : freq - str
  return freq
}, 0)

console.log(solution)
