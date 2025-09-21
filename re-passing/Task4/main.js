// #I2XsG6f
//
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами  а і б
//


function S (a,b){
    return  a * b;
}
let r1 = S (5,6);
console.log(r1);



//
//
// #ETGAxbEn8l
//
// – створити функцію, яка обчислює та повертає площу кола з радіусом r
//

// S = πr², де S — це площа, r — радіус, а π (пі) — математична стала, що приблизно дорівнює 3,14159

function areaOfACircle(r){
    return     Math.PI * (r * r);

}
   let Square = areaOfACircle(5);
     console.log(Square);

//
//
// #Mbiz5K4yFe7
//
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
//
//  S=2пr (r+h).

function SquareWithHigh (h,r){
   return  2 * Math.PI * r * (r+h);

}
let areaOfTheCylinder = SquareWithHigh (8,5);
console.log(areaOfTheCylinder);

//
// #SIdMd0hQ
//
// – створити функцію, яка приймає масив та виводить кожен його елемент
//
//

        let users = [
            {name: 'vasya', age: 31, status: false},
            {name: 'petya', age: 30, status: true},
            {name: 'kolya', age: 29, status: true},
            {name: 'olya', age: 28, status: false},
            {name: 'max', age: 30, status: true},
            {name: 'anya', age: 31, status: false},
            {name: 'oleg', age: 28, status: false},
            {name: 'andrey', age: 29, status: true},
            {name: 'masha', age: 30, status: true},
            {name: 'olya', age: 31, status: false},
            {name: 'max', age: 31, status: true}
        ];

        function myFunction(arr) {
            for (const item of arr) {
                console.log(item);
            }

        }

        myFunction(users);


//
// #59g0IsA
//
// – створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
//



function showArgs (text){
     document.write(`<p>${text}</p>`)

}
 showArgs ('Hello World');


//
//
// #hOL6126
//
// – створити функцію, яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
//


function newArgs (text){

    document.write(`<ul>`)
        document.write(`<li>${text}</li>`)
        document.write(`<li>${text}</li>`)
        document.write(`<li>${text}</li>`)
    document.write(`</ul>`)

}
newArgs( 'Hello World');


//
//
// #0Kxco1edSN
//
// – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
//

function createList(text, count) {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

createList("Hello World", 3);



//
// #gEFoxMMO
//
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
//
//

function createListFromArray (items) {
    document.write(`<ul>`);
    for (const item of items) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
createListFromArray(["Hello World", 125, true, "Javascript"]);


//
// #bovDJDTIjt
//
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.
//



function createArray (users) {
    for (const user of users) {
        document.write(`<div> ID:${user.id},  Name:${user.name},  Age:${user.age} </div>`);
    }

}
 let usersArray =
     [{id:1, name:'Olya',age: 30},
     {id:2, name:'Kolya',age: 20},
     {id:3, name:'Vasya',age: 35} ];

createArray(usersArray);


//
//
//     #pghbnSB
//
// – створити функцію яка повертає найменьше число з масиву
//


function lessNumber (numbers){
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < min){
          min = numbers[i];
      }
    }
    return min;
}
let numbersArray = [1,58,26,-4,25,40];
 let minNumber = lessNumber(numbersArray);
 console.log(minNumber);


//
//
// #EKRNVPM
//
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
//
//
function sumAll(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    } return sum;
}
console.log(sumAll([2,56,4,20,39]));


//
// #kpsbSQCt2Lf
//
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
//
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//
//
function swap (arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]] ;

    return arr;
}
let numbers = swap([11,22,33,44,],0,1);
console.log(numbers);




//
// #mkGDenYnNjn.html
//
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)

// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400


function exchange (sumUAH,currencyValues,exchangeCurrency) {
    let currency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            currency = item;
        }
    } return sumUAH/currency.value;
}
console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));







