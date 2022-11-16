let calculator = {
  sum(n1, n2){
    return n1 + n2;
  },
  subtract(n1,n2){
    return n1 - n2;
  },
  multiply(n1,n2){
    return n1*n2;
  },
  divide(n1, n2){
    if (n2 === 0) {
      throw new Error('Division by zero is not defined');
    } else{
      return n1/n2;
    }
  }
};

export {calculator};
//console.log(calculator.divide(2, 0));