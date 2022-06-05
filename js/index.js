import findSumOfTwoMin  from './findSumOfTwoMin.js';

const form = document.querySelector('form');
const input = form.querySelector('input[type="text"]');
const resultDiv = form.querySelector('.result');
input.focus();
form.addEventListener('submit', (e) => {
    e.preventDefault();
    resultDiv.innerHTML = '';
    const value = input.value;
    input.value = '';
    const result = findSumOfTwoMin(value);
    const resultP = document.createElement('p');
    resultP.textContent = result;
    resultDiv.append(resultP);
});