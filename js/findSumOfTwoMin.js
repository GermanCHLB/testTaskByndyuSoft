function isInt(n) {
    return Number(n) == n && n % 1 === 0;
}

function isFloat(n) {
    return Number(n) == n && n % 1 !== 0;
}

function filter(arr) {
    const filtered = arr.filter((num) => isInt(num) || isFloat(num));
    const numbers = filtered.map((num) => Number(num));
    return numbers;
}

export default function findSumOfTwoMin(str) {
    const notFilteredArr = String(str).split(',');
    const arr = filter(notFilteredArr);
    if (arr.length < 2) {
        return 'Недостаточно чисел';
    }
    const twoMin = arr.reduce((mins, num) => {
        const newMins = mins;
        if (newMins[0] === undefined) {
            newMins[0] = num;
        } else if (newMins[1] === undefined) {
            if (num < newMins[0]) {
                newMins[1] = newMins[0];
                newMins[0] = num;
            }
            else {
                newMins[1] = num;
            }
        } else if (num <= newMins[0]) {
            newMins[1] = newMins[0];
            newMins[0] = num;
        } else if (num < newMins[1]) {
            newMins[1] = num;
        }
        return newMins;
    }, []);
    const sum = twoMin[0] + twoMin[1];
    return sum;
}