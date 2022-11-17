function analyzeArray(array){
  let length = array.length;
  let average = array.reduce((prev, current) => prev + current, 0)/length;
  let min = array.sort((a, b) => a < b? -1: a > b? 1: 0)[0];
  let max = array.sort((a, b) => a < b? -1: a > b? 1: 0)[length - 1];

  return {average, min, max, length}
}



export {analyzeArray};