const input = require('./input-1')

const map = new Set()
let solution = null
let i = 0
let freq = 0

do {
  const inp = input[i]
  const rule = inp.slice(0, 1)
  const str = parseInt(inp.slice(1), 10)
  freq = rule === '+' ? freq + str : freq - str
  if (map.has(freq)) {
    solution = freq
    break
  } else {
    map.add(freq)
    i = i + 1 === input.length ? 0 : i + 1
  }
} while (solution === null)

console.log(solution)