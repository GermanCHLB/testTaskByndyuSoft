import findSumOfTwoMin from "../js/findSumOfTwoMin.js";

test('Numbers', () => {
    expect(findSumOfTwoMin('1,2,3,0')).toEqual(1);
    expect(findSumOfTwoMin('1, 2, -7, 10, 1, 7, 0, -4')).toEqual(-11);
});

test('Floats', () => {
    expect(findSumOfTwoMin('1.5, -1.7, -10.5, -15.6')).toEqual(-26.1);
    expect(findSumOfTwoMin('1.1, 2, 7.5, 10.1, 1, 17.9, 0.3, 4.3')).toEqual(1.3);
});

test('Strings', () => {
    expect(findSumOfTwoMin('1,2,3,0, abcde')).toEqual(1);
    expect(findSumOfTwoMin('1, 2, tea, -7, 10, 1, 7, dog, 0, -4')).toEqual(-11);
});

test('Empty', () => {
   expect(findSumOfTwoMin('')).toEqual('Недостаточно чисел');
   expect(findSumOfTwoMin('ababa, kldwoa, aldlall')).toEqual('Недостаточно чисел');
});

test('One number', () => {
    expect(findSumOfTwoMin('1')).toEqual('Недостаточно чисел');
    expect(findSumOfTwoMin('1, ababa, kldwoa, aldlall')).toEqual('Недостаточно чисел');
})