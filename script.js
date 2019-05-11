// Main memeIt function
function memeIt(string) {

  // Converts the whole string to array split it by every letter
  let string_to_array = string.split('')

  // Map every letter (takes 2 args, the currentValue and the index)
  string_to_array.map((letter, index) => {

    // If the index is even
    if(index % 2 == 0){

      // let string_to_array[index] equals to the current letter but uppercase

      // string_to_array[index] is the same as calling string_to_array[0] and so on
      
      string_to_array[index] = letter.toUpperCase()
    }
  })

  // Returned the joined string
  return string_to_array.join('')
}