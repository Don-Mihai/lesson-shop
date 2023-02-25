// let number = 0;

// while(true){
//     console.log(number)

//     if(number ===  10) {
//         break;
//     }

//     ++number;
// }

// for (let number = 0; number < 10; number++) {
//     console.log(number)
// }

// switch

let age = +prompt('Введите возраст:');

console.log(age)

switch (age) {
    case 18: // if (age === 18)
        console.log('Вам полных 18 лет?');
        break;
    case 19:
        console.log('Доступ получен!');
        break;

    case 17:
        console.log('Доступ запрещен!');
        break;

    default:
        console.log('Недопустимое значение!')
        break;
}