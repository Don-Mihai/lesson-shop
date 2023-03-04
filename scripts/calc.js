'usestrict';

let firstInput = document.querySelector('.calc__first');
let secondInput = document.querySelector('.calc__second');
let operation = document.querySelector('.calc__operation');
let button = document.querySelector('.calc__button');
let output = document.querySelector('.calc__result');


function sum(firstValue, secondValue) {
    if(!firstValue.length) {
        return 'Заполните первое поле!'
    }
    
    // если хоть в одном из полей приходит буква, то выводим ошибку
    if(isNaN(firstValue)) {
        return 'В первом поле введите число!'
    }

    if(isNaN(secondValue)) {
        return 'Во втором поле введите число!'
    }

    return +firstValue + +secondValue
}

button.addEventListener('click', function () {
    switch (operation.value) {
        case '+':
            output.innerHTML = sum(firstInput.value, secondInput.value);
            break;

        case '-':
            output.innerHTML = +firstInput.value - +secondInput.value;
            break;

        default:
            output.innerHTML = 'Нераспознаная операция!';
            break;
    }
});
