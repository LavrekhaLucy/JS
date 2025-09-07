// ДЗ:
//
//     #dYQNrBV
//
// Створити змінні. Присвоїти кожному з них значення: ‘hello’,’owu’,’com’, ‘ua’, 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
//
//
// let h ='hello';
// console.log(h);
// let o = 'owu';
// console.log(o);
// let c = 'com';
// console.log(c);
// let u = 'ua';
// console.log(u);
// let a = 1;
// console.log(a);
// let b = 10;
// console.log(b);
// let x = -999;
// console.log(x);
// let y = 123;
// console.log(y);
// let z = 3.14;
// console.log(z);
// let d = 2.7;
// console.log(d);
// let e = 16;
// console.log(e);
// let f = true;
// console.log(f);
// let g = false;
// console.log(g);

// #6Qb97gsv
//
// – Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З’єднати їх в одну змінну person (Не об’єкт, просто за допомогою конкатенації)

    let firstName ='Liudmyla';
    let middleName = 'Mykolaivna';
    let lastName = 'Lavrekha';

    let fullName = firstName + ' '+ middleName +' '+ lastName;
    console.log(fullName);
    let fullNameAgain = `${firstName} ${middleName} ${lastName}`;
    console.log(fullNameAgain);






//
// #4N0y5tufA
//
// – За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//
//     let a = 100; let b = ‘100’; let c = true;

let a = 100;
console.log(typeof a);
let b = '100';
console.log(typeof b);
let c = true;
console.log(typeof c);


//
// #ruUtWDUI
//
// Додаткове для тих, хто цікавився prompt`oм
//
// – За допомогою 3-х різних prompt() отримати 3 слова які являються вашими Імʼям, По-батькові та роками. Та вивести в консоль


let firstMyName = prompt("Введіть ваше імʼя:");
let middleMyName = prompt("Введіть ваше по-батькові:");
let age = prompt("Введіть ваш вік:");

// Вивід у консоль
console.log("Мене звати " + firstMyName + " " + middleMyName + ", мені " + age + " років.");

// Або через шаблонний рядок (сучасний варіант)
console.log(`Мене звати ${firstMyName} ${middleMyName}, мені ${age} років.`);