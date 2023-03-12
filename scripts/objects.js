'usestrict'

// const sayHi = function () {
//     console.log(`Приветствую ${this.name}`)
// }

// const user = {
//     name: 'Mihai',
//     age: 23,
//     birthDate: '19.11.1999',
//     yees: 'brown',
//     // languages: ['ru', 'en']
// };



// if(user.languages) {
//     console.log(user.languages.length)
// } else {
//     console.log(undefined)
// }


// console.log(user.languages?.length)





// const user2 = {
//     name: 'Petia',
//     age: 23,
//     birthDate: '19.11.1999',
//     yees: 'brown',
// };

// user2.hi = sayHi

// user2.hi()


// for (key in user) {
//     if(!user[key]) {
//         console.log(`Вы не заполнили поле: ${key}`)
//     }
// }


// клонирование через spread оператор
// const a = {name: 'Михаил'}

// const b = {...a}

// b.name = 'Петя'

// console.log(a, b)


// клонирование через Object.assign
// const a = {name: 'MIhail'}

// const b = Object.assign({}, a)

// b.name = 'Petia'

// console.log(a, b)


// многоуровневое клонирование
// const a = {
//     name: 'Михаил',
//     languages: {
//         ru: true,
//         en: false
//     }
// }

// const b = _.cloneDeep(a)


// b.languages.ru = 'изменил'
// b.name = 'Петя'

// console.log(a, b)

// const makeUser = (name, age, birthDate, yees) => {
//     const user = {
//         name,
//         age,
//         birthDate,
//         yees,
//         sayHi: () => {
//             console.log(`Меня зовут ${name}`);
//         }
//     }
//     return user
// }


// makeUser('mihai', 23, '19.11.1999', 'brown').sayHi()
// makeUser('Vasia', 90, '19.11.1999', 'green').sayHi()


// console.log(
//     makeUser('mihai', 23, '19.11.1999', 'brown'), 
//     makeUser('Vasia', 90, '19.11.1999', 'green')
// );





// const key = prompt('Введите название свойства:')


// console.log(user[key])