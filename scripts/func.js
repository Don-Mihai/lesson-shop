function goOut() {
    console.log('Выходите с сайта!')
    console.log('Не возвращайтесь обратно!')

}

let age = prompt('Введите возраст:', '')


while(!age.length) {
    prompt('Введите возраст:')
}

if(+age < 18) {
    goOut('Вам меньше 18 лет')
}

if(+age > 100) {
    goOut('Вам больше 100 лет')
}



// function createDoc(fio, from, to = '') {
//     console.log(`Я ${fio} прошу выдать мне отпуск с ${from} по  ${to}`)
// }

// createDoc('Палиенко Михай Михайлович', '12.11.2005', '12.11.2025')

// createDoc('Владимир Владимирович', '12.11.2025')


// function getProcent () {
//     let variable =  prompt('Введите число для преобразования')

//     console.log(`${variable/100}%`)
// }





// let name = 'Владимир'

// function work() {
//     let name = 'Петя'

//     function getName() {
//         let name = 'Михаил'
    
//         console.log(name)
//     }

//     getName()


// }

// work()
