import { calculator } from '../exercises/calculator';

test('Sum works as expected', () => expect(calculator.sum(2,2)).toStrictEqual(4));

test('Subtract works as expected', () => expect(calculator.subtract(2,2)).toStrictEqual(0));

test('Product works as expected', () => expect(calculator.multiply(2,2)).toStrictEqual(4));

test('Division works as expected', () => expect(calculator.divide(2,2)).toStrictEqual(1));

// When one is checking if an error was thrown, it is mandatory to do it 
// using an anonymous function

test('Division by zero is not allowed', () => expect(()=>{
    calculator.divide(2, 0);
  }).toThrow('Division by zero is not defined')
); 