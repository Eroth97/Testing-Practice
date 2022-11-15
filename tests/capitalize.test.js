import {capitalize} from '../exercises/capitalize';

test('No change when it is not needed', () =>{
  expect(capitalize('Hello')).toBe('Hello')
});

test('Normal functioning', () =>{
  expect(capitalize('hello')).toBe('Hello')
});

test('Works with spaces', () =>{
  expect(capitalize('                  hello                  ')).toStrictEqual('Hello');
})