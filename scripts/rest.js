
const sum = (...rest) => {
    let counter = 0;

    // Цикл, увеличивает каунтер
    for (let i = 0; i < rest.length; ++i) {
        counter = counter + rest[i];
    }

    return counter;
};

const result = sum(3.6);

console.log('результат:', result);

// const sayInfo = (name, age, ...rest) => {
//     alert(`Ваше имя: ${name}`)
//     alert(`Ваш возраст: ${age}`)

//     for (let i = 0; i < rest.length; ++i) {
//         alert(`Дополнительная информация: ${rest[i]}`)
//     }
// }

// console.log(sayInfo())
