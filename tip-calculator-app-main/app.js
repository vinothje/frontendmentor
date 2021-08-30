let tipPercent = 0;

document.querySelector('#fivePercent').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('button').forEach((button) => button.classList.remove('buttonclicked'));
    e.target.classList.add('buttonclicked');
    tipPercent = 0.05;
});
document.querySelector('#tenPercent').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('button').forEach((button) => button.classList.remove('buttonclicked'));
    e.target.classList.add('buttonclicked');
    tipPercent = 0.1;
});
document.querySelector('#fifteenPercent').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('button').forEach((button) => button.classList.remove('buttonclicked'));
    e.target.classList.add('buttonclicked');
    tipPercent = 0.15;
});
document.querySelector('#twentyFivePercent').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('button').forEach((button) => button.classList.remove('buttonclicked'));
    e.target.classList.add('buttonclicked');
    tipPercent = 0.25;
});
document.querySelector('#fiftyPercent').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('button').forEach((button) => button.classList.remove('buttonclicked'));
    e.target.classList.add('buttonclicked');
    tipPercent = 0.5;
});
document.querySelector('#customPercent').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('button').forEach((button) => button.classList.remove('buttonclicked'));
    e.target.classList.add('buttonclicked');
    tipPercent = 0.5;
});


document.querySelector('#myForm').addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();

    const bill = Number(document.querySelector('#bill').value) || 0;
    const numberOfPeople = Number(document.querySelector('#numberOfPeople').value) || 1;
    const tipAmountResult = document.querySelector('#tipAmountResult');

    const tipAmountResultCalculate = ((bill * tipPercent)/numberOfPeople).toFixed(2);
    tipAmountResult.innerText =  '$' + tipAmountResultCalculate;

    const totalResult = document.querySelector('#totalResult');
    const totalResultCalculate = ((bill/numberOfPeople) + Number(tipAmountResultCalculate)).toFixed(2);
    totalResult.innerText = '$' + totalResultCalculate;
});


document.querySelector('#resetButton').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#myForm').reset();
    document.querySelector('#tipAmountResult').innerText = '$0.00';
    document.querySelector('#totalResult').innerText = '$0.00';
    document.querySelectorAll('button').forEach((button) => button.classList.remove('buttonclicked'));
})
