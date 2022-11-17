let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
let alphabetM = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

function caesarCipher(string, shift){
  let letters = string.split('');

  for (let i = 0; i < letters.length; i++){
    if (alphabet.includes(letters[i])){
      letters[i] = newLetter(letters[i], shift, 'm');
    } else if (alphabetM.includes(letters[i])){
      letters[i] = newLetter(letters[i], shift, 'M');
    }
  }
  return letters.join('');
}

function newLetter(letter, shift, type){
  let j = 0;
  while(alphabet[j] != letter.toLowerCase()){
    j++;
  }
  return type === 'm'? alphabet[(j+shift)%alphabet.length]: 
                       alphabetM[(j+shift)%alphabetM.length];
}

export {caesarCipher};