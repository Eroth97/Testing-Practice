import { analyzeArray } from '../exercises/analyzeArray';

test('Average', () => expect(analyzeArray([1,8,3,4,2,6]).average).toStrictEqual(4));

test('Min', () => expect(analyzeArray([1,8,3,4,2,6]).min).toStrictEqual(1));

test('Max', () => expect(analyzeArray([1,8,3,4,2,6]).max).toStrictEqual(8));

test('Length', () => expect(analyzeArray([1,8,3,4,2,6]).length).toStrictEqual(6));