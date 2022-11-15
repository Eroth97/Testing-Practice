function capitalize(string){
  let returnString = string.trim();
  return returnString[0].toUpperCase() + returnString.slice(1);
}

export {capitalize};