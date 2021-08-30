let result = '0';

function resetValueToZero() {
    document.querySelector('#resultDiv').innerText = '0';
    result = '0'
}

function resetValueToNull() {
    document.querySelector('#resultDiv').innerText = '';
    result = '';
}

resetValueToZero();
document.querySelectorAll('button').forEach((button) => button.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (result === '0') {
        resetValueToNull();
    }
    switch (e.target.id) {
        case 'key-0':
        case 'key-1':
        case 'key-2':
        case 'key-3':
        case 'key-4':
        case 'key-5':
        case 'key-6':
        case 'key-7':
        case 'key-8':
        case 'key-9':
        case 'key-plus':
        case 'key-minus':
        case 'key-slash':
        case 'key-multiply':
        case 'key-dot':
            result += e.target.innerText;
            break;
        case 'key-del':
            result = result.replace(/\w$/, '');
            if (result === '') {
                resetValueToZero();
            }
            break;
        case 'key-reset':
            resetValueToZero();
            break;
        case 'key-equal':
            result = eval(result);
            break;

    }
    document.querySelector('#resultDiv').innerText = result;
}));

document.forms[0].addEventListener('submit', (e) => {
    console.log('on subkit called');
    e.preventDefault();
    e.stopPropagation();

    result = eval(result);
    document.querySelector('#resultDiv').innerText = result;
});
