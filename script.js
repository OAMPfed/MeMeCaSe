function memeIt(string) {
  let string_to_array = string.split('')
  string_to_array.map((letter, index) => {
    if(index % 2 == 0){
      string_to_array[index] = letter.toUpperCase()
    }
  })
  return string_to_array.join('')
}