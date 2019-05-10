function memeIt() {
  var memeString = document.getElementById('memeInput').value;

  let memeArray = [];

  for (i = 0; i < memeString.length; i++) {
    if (i % 2 == 0.0) {
      let a = memeString.charAt(i);

      let aUpper = a.toUpperCase(i);

      memeArray.push(aUpper);
    } else {
      let b = memeString.charAt(i);

      let bLower = b.toLowerCase(i);

      memeArray.push(bLower);
    }
  }
  memeRes = memeArray.join('');
  console.log(memeRes);
  document.getElementById('memeOutput').innerHTML = memeRes;
}
