// All the event handlers and stuff
let input = document.getElementById('memeInput')
let output = document.getElementById('memeOutput')

input.addEventListener('input', (e) => {
  let input_value = input.value;

//   Check if the input is empty
  if(input_value.length == 0){

    // Sets the output text to its original text
    output.innerText = 'AnD YoUr mEmE TeXt WiLl bE HeRE'
  }else{

    // Set the value to be the memeIt value
    output.innerText = memeIt(input_value)
    
  }
})