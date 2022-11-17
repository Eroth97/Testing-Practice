import { caesarCipher } from '../exercises/caesarCipher';


test('Basic Functionality, shift = 1 (1)', () => expect(caesarCipher('hello', 1)).toStrictEqual('ifmmp'));

test('Basic Functionality, shift = 1, (2)', () => expect(caesarCipher('bye', 1)).toStrictEqual('czf'));

test('z is taken to a, shift = 1', () => expect(caesarCipher('zalamea', 1)).toStrictEqual('abmbnfb'));

test('Ignores spaces (shift = 1)', () => expect(caesarCipher('i will learn js', 1)).toStrictEqual('j xjmm mfbso kt'));

test('Basic Functionality, shift = 5', () => expect(caesarCipher('i will learn js', 5)).toStrictEqual('n bnqq qjfws ox'));

test('Does not alter punctuation (1)', () => expect(caesarCipher('?#,this is random text ,,,', 1)).toStrictEqual('?#,uijt jt sboepn ufyu ,,,'));

test('Does not alter punctuation (2)', () => expect(caesarCipher('?#,this is random text ,,,', 10)).toStrictEqual('?#,drsc sc bkxnyw dohd ,,,'))

test('Respects case (1)', () => expect(caesarCipher('I WILL LEARN JS', 10)).toStrictEqual('S GSVV VOKBX TC'));

test('Respects case (2)', () => expect(caesarCipher('I wilL LeARN JS', 10)).toStrictEqual('S gsvV VoKBX TC'));