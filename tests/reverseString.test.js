import { reverseString } from '../exercises/reverseString';

test('Reverse String w/o spaces', () =>{
  expect(reverseString('hi')).toStrictEqual('ih')
});

test('Reverse String with spaces', () => {
  expect(reverseString('   hi')).toStrictEqual('ih   ')
});