const input = require('./input-2')

// Filter method to determine if two strings have exactly one letter different from the other
const differentByTwo = (str1, str2) => {
  const chars1 = str1.split('')
  const chars2 = str2.split('')
  const similar = chars1.map((char, i) => char === chars2[i])
  return similar.filter(res => res === false).length === 1
}

// Filter which strings have just one character different from another
const matchesByTwo = input.filter((inp, i, arr) => {
  return arr.filter((second, j) => i !== j ? differentByTwo(inp, second) : false).length
})

// Transform each string back into an array of characters
// Using the first string, loop through each character
// If it matches to same character as the second string at the same position,
// concatenate it, otherwise skip
const result = matchesByTwo[0].split('').reduce((res, char, i) => {
  if (matchesByTwo[1].split('')[i] === char) {
    res = `${res}${char}`
  }
  return res
}, '') 

console.log(result)