// All the event handlers and stuff
let input = document.getElementById('memeInput')
let output = document.getElementById('memeOutput')

input.addEventListener('input', (e) => {
  let input_value = input.value;
  output.innerText = memeIt(input_value)
})