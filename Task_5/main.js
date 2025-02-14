'use strict';

// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами, а і б

        let calc1= (a, b) => a * b;

        let S = calc1(10, 20);
        console.log(S)


// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

        let calc2=(a, b,) => a * b * b;

        let Square = calc2(3.1415, 5);
        console.log(Square);

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r

        let  calc=(height, radius) => 2 * Math.PI * radius * height;

        let cylinder = calc(10, 4);
        console.log(cylinder);



// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

        function books(array){
                for (const book of array) {
                        console.log(book);
                }
        }



// #59g0IsA
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

        function writer(productTitle) {
                document.write(`
                          <p>${productTitle}</p>`);
        }
        writer('Pepper');
        writer('Apple');
        writer('Cheese');



// #hOL6126
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

        function productListVeg(productTitle) {
                document.write(
                    `<ul>
                          <li>${productTitle}</li>
                          <li>${productTitle}</li>
                          <li>${productTitle}</li>
                        </ul>`);
        }
        productListVeg('Tomato');



// #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

        function milkProduct(productTitle, quantity) {
                document.write(`<ul>`);
                for (let i = 0; i < quantity; i++)
                        document.write(`<li>${productTitle}</li>`);
                document.write(`</ul>`);
        }
        milkProduct('Cheese',50);



// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа, стрінги, булеві), та будує для них список

        function List(array) {
                document.write(`<ul>`);
                for (const item of array) {
                        document.write(`<li>${item}</li>`)
                }
                document.write(`</ul>`);
        }
        List([150, 25, 30, 'name', true, false, 3256])



// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id, name, age,
// та виводить їх в документ. Для кожного об'єкту окремий блок.

        function getUsersList(users) {
                for (const user of users) {
                        document.write(`<div>
                         ${user.id} ${user.name} ${user.age}
                </div>`)
                }
        }
        getUsersList([
                {id:1,name: 'vasya', age: 31,},
                {id:2,name: 'petya', age: 30,},
                {id:3,name: 'kolya', age: 29,},
                {id:4,name: 'olya', age: 28,},
                {id:5,name: 'max', age: 30,},])



//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву


        function arrayNumb(numbers) {
                let min = numbers[0];
                for (const number of numbers) {
                        if (number < min) {
                                min = number
                        }
                }
                return min;
        }
        console.log(arrayNumb([10, 20, 30, 50, 1, 13]));



// #EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

        function sumM(arr){
                let total=0;
                for (const number of arr) {
                        total=total+number;
                }
                return total;
        }
        console.log(sumM([1,2,10]));



// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


        function flatter(arr,index1,index2,) {
                let temp=arr[index1];
                arr [index1]=arr [index2];
                arr [index2]=temp;
                return arr;
        }
        console.log(flatter([11,22,33,44],0,1));



// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

        function currency(sumUAH, currencyValues,exchangeCurrency){
                let chooseCurrency;
                for (const item of currencyValues ){
                        if (item.currency === exchangeCurrency){
                                chooseCurrency = item;
                        }}

                return sumUAH/chooseCurrency.value;
        }
        console.log(currency(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))