// Main memeIt function
function memeIt(string) {
  let memeArray = [];

  for (i = 0; i < string.length; i++) {
    if (i % 2 == 0.0) {
      let a = string.charAt(i);

      let aUpper = a.toUpperCase(i);

      memeArray.push(aUpper);
    } else {
      let b = string.charAt(i);

      let bLower = b.toLowerCase(i);

      memeArray.push(bLower);
    }
  }
  memeRes = memeArray.join('');
  return memeRes
}