<!--#I2XsG6f-->
<!-- - створити функцію яка обчислює та повертає площу прямокутника зі сторонами, а і б-->

// <!--// let S=a*b-->

function calc1(a, b) {
    return a * b;
}

let S = calc1(10, 20);
console.log(S);


<!--#ETGAxbEn8l-->
<!-- - створити функцію яка обчислює та повертає площу кола з радіусом r-->
// R = 5;
// PI=3.1415;
// S = PI * R**2


function calc2(a, b,) {
    return a * b * b;
}

let Square = calc2(3.1415, 5);
console.log(Square);


<!--#Mbiz5K4yFe7-->
<!-- - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r-->

// <!--// S=2*Math.PI*rh;-->


function calc(height, radius) {
    return 2 * Math.PI * radius * height;
}

let cylinder = calc(10, 4);
console.log(cylinder);

<!--#SIdMd0hQ-->
<!-- - створити функцію яка приймає масив та виводить кожен його елемент-->


<!--#59g0IsA-->
<!-- - створити функцію яка створює параграф з текстом та виводить його через document.write. -->

<!--Текст задати через аргумент-->

function writer(productTitle, price, describtion) {
    document.write(`<div>
          <h1>${productTitle} ${price}</h1>
          <p>${describtion}</p>

</div>`);
}

writer('Pepper', 32, 'Green pepper');
writer('Apple', 40, 'Red apple');
writer('Cheese', 350, 'Mozzarella');


<!--#hOL6126-->
<!-- - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. -->

<!--Текст li задати через аргумент всім однаковий-->


function productList(productTitle) {
    document.write(
        `<ul>
          <li>${productTitle}</li>
          <li>${productTitle}</li>
          <li>${productTitle}</li>
        </ul>`);
}

productList('Tomato');


<!--#0Kxco1edSN-->
<!-- - створити функцію яка створює ul з  елементами li.-->
<!--Текст li задати через аргумент всім однаковий.-->
<!--Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)-->

<!--та виводить його через document.write-->

function writerProduct(productTitle, quantity) {
    document.write(`<ul>`);
    for (let i = 0; i < quantity; i++)
        document.write(`<li>${productTitle}</li>`);

    document.write(`</ul>`);

}

writerProduct('Cheese',50);


<!--#gEFoxMMO-->
<!-- - створити функцію яка приймає масив примітивних елементів (числа, стрінги, булеві),-->

<!--та будує для них список (ul li) та виводить його через document.write-->

function List(array) {
    document.write(`<ul>`);
    for (const item of array) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`);
}

List([150, 25, 30, 'name', true, false, 3256])


// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними
// полями id, name, age, та виводить їх в документ. Для кожного об'єкту окремий блок.

function getUsers(users) {
    for (const user of users) {
        document.write(`<div>
         ${user.id} ${user.name} ${user.age}
</div>`)
    }
}
getUsers([
    {id:1,name: 'vasya', age: 31,},
    {id:2,name: 'petya', age: 30,},
    {id:3,name: 'kolya', age: 29,},
    {id:4,name: 'olya', age: 28,},
    {id:5,name: 'max', age: 30,},])




