// ДЗ:
//
//
//
//     #67kfznmiMl
//
// – Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [2,58,64,-100,50, true, false, 'dog', 'search', 'javascript'];

console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);



// #LARqoUj5I
//
// – Створити 3 об’єкти які описують книги. Поля об’єкту : title ,pageCount, genre.

// let book1 = {
//     title:'Freedom1',
//     pageCount:10,
//     genre:'fantastic'
//
// }
// console.log(book1);
//
// let book2 = {
//     title:'Freedom2',
//     pageCount:10,
//     genre:'drama'
//
// }
// console.log(book2);
//
// let book3 = {
//     title:'Freedom3',
//     pageCount:10,
//     genre:'detective'
//
// }
// console.log(book3);


// #sA3Gg1sCp
//
// – Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors. Поле “автори” – являється  масивом. Кожен автор має поля name та age.

let book1 = {
    title:'Freedom1',
    pageCount:10,
    genre:'fantastic',
    authors: [
        {
            name: 'Artur',
            age: 30
        },
        {
            name: 'Alex',
            age: 40
        },
        {
            name: 'Anton',
            age: 50
        }
    ]

}
console.log(book1);

let book2 = {
    title:'Freedom2',
    pageCount:10,
    genre:'drama',
    authors: [
        {
            name: 'Anna',
            age: 30
        },
        {
            name: 'Alysa',
            age: 40
        },
        {
            name: 'Alexandra',
            age: 50
        }
    ]

}
console.log(book2);

let book3 = {
    title:'Freedom3',
    pageCount:10,
    genre:'detective',
    authors: [
        {
            name: 'Bob',
            age: 30
        },
        {
            name: 'Ben',
            age: 40
        },
        {
            name: 'Brain',
            age: 50
        }
    ]

}
console.log(book3);



//
// #jCHFnEbdmFd
//
// – Створити масив з 10 об’єктами, які описують сутніть “користувач”. Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {
        name: 'Bob',
        username: 'Marly',
        password: '123456'
    },
    {
        name: 'Henry',
        username: 'Maison',
        password: '789123'
    },
    {
        name: 'Charly',
        username: 'Shin',
        password: '654321'
    },
    {
        name: 'Luisa',
        username: 'Hay',
        password: '123_456'
    },
    {
        name: 'Pamella',
        username: 'Anderson',
        password: '987654'
    },
    {
        name: 'Crystal',
        username: 'Mallboro',
        password: '159753'
    },
    {
        name: 'John',
        username: 'Washington',
        password: '12_3456'
    },
    {
        name: 'Kate',
        username: 'Midllton',
        password: '1_23456'
    },
    {
        name: 'Lisy',
        username: 'Johnson',
        password: '12345_6'
    },
    {
        name: 'Jecky',
        username: 'Chan',
        password: '952587'
    }
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);



// #coYydZuaeEB
//
// – описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив – вам потрібно подумати. Нормальних варіантів опису – 2. Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу
 let weather = [
     {Monday:{morning: '+12', afternoon: '+24', evening: '+15'}},
     {Tuesday:{morning: '+12', afternoon: '+24', evening: '+15'}},
     {Wednesday:{morning: '+12', afternoon: '+24', evening: '+15'}},
     {Thursday:{morning: '+12', afternoon: '+24', evening: '+15'}},
     {Friday:{morning: '+12', afternoon: '+24', evening: '+15'}},
     {Saturday:{morning: '+12', afternoon: '+24', evening: '+15'}},
     {Sunday:{morning: '+12', afternoon: '+24', evening: '+15'}}
 ]
console.log(weather);

// #bAUsaq6LI
//
// – Є змінна х, якій ви надаєте довільне числове значення.
//
//     Якщо змінна x не дорівнює нулю, виведіть ‘Вірно’, інакше виведіть ‘Невірно’.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 0;
 x !== 0? console.log('Correct'): console.log('Incorrect');

 let a = 5;

 if (a === 1) {
     console.log('One');
 }
 else if (a === 0) {
     console.log('Zero');
 }
 else if (a === -3) {
     console.log('Three');
}
 else{
     console.log('Try again');
 }


// #3ckURgvs
//
// – Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//
// (в першу, другу, третю або четверту частину години).
//
// let time = 48
//     if (0 <= 15){
//         message('First decade');
//     }else if(16 <= 30){
//         console.log('Second decade');
//     } else if (31 <= 45){
//         console.log('Third decade');
//     }else if(46 <= 59){
//         console.log('Forth decade');
//     }
//
//     console.log(time(message)); виправити!!!





// #UMoNq4biWGe
//
// – У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).




// #KzrtqyQ
//
// – Скласти розклад на тиждень за домопогою switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа, що заплановано на цей день (можна замість плану на день, назву дня англійською).




// #uwsz1RnTQJ1
//
// – Користувач вводить або має два числа.
//
//     Потрібно знайти та вивести максимальне число з тих двох .
//
//     Також потрібно врахувати, коли введені рівні числа.




// #iBvqtjEm
//
// – є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код, який
//
// буде присвоювати змінній х значення “default”,  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).




// #awLXL6TBzg
//
// з файлу arrays.js ( лежить у вкладеннях)  взяти масив coursesAndDurationArray. За допомогою іф перевірити кожен його елемент на тривалість навчання. У випадку, якщо тривалість довша за 5 місяців, вивести в консоль “Супер”.