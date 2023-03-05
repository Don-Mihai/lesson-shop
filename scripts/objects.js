// const user = {
//     name: 'Mihai',
//     age: 23,
//     birthDate: '19.11.1999',
//     yees: 'brown',
//     sayHi: () => {
//         console.log(`Приветствую ${name}`)
//     }
// };




const makeUser = (name, age, birthDate, yees) => {
    const user = {
        name,
        age,
        birthDate,
        yees,
        sayHi: () => {
            console.log(`Меня зовут ${name}`);
        }
    }

    console.log(user)


    return user
}


makeUser('mihai', 23, '19.11.1999', 'brown').sayHi()
makeUser('Vasia', 90, '19.11.1999', 'green').sayHi()


// console.log(
//     makeUser('mihai', 23, '19.11.1999', 'brown'), 
//     makeUser('Vasia', 90, '19.11.1999', 'green')
// );





// const key = prompt('Введите название свойства:')


// console.log(user[key])

