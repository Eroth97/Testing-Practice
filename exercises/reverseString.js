function reverseString(string){
  let arrayS = string.split('');

  return arrayS.reverse().join('');
}

export {reverseString};