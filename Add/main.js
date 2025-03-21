// #WpkK0ZH1
//
// –створити масив з:
//
//  – з 5 числових значень
//
// – з 5 стрічкових значень
//
// – з 5 значень стрічкового, числового та булевого типу
//
// – та вивести його в консоль

const arr =[1,2,3,4,5,];
const array =['ola','hello','hi','chao','привіт'];
const arrayAll =[1,2,3,4,5,'ola','hello','hi','chao','привіт', true, false,true, false, true];

console.log(arr);
console.log(array);
console.log(arrayAll);



// #4aDbSgh
//
// — Створити пустий масив.
// Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
// Вивести в консоль

let users = [
    {
        name: 'John',
        username: 'john1',
        password: '123456'
    },
    {
        name: 'Anna',
        username: 'Anna_*',
        password: '654321'
    },
    {
        name: 'Nicol',
        username: 'Nic125',
        password: 'L21215'
    },
    {
        name: 'Vincent',
        username: 'Vincent#1',
        password: '025874'
    },
    {
        name: 'Olga',
        username: 'L_olga#2',
        password: '326598'
    },
    {
        name: 'Ihor',
        username: 'Igor@k',
        password: '753214'
    },
    {
        name: 'Lyda',
        username: 'Lid@4',
        password: '159753'
    },
    {
        name: 'Alex',
        username: 'Alex$',
        password: '654789'
    },
    {
        name: 'Tom',
        username: 'Tom&s',
        password: '321789'
    },
    {
        name: 'Antony',
        username: 'Tony_X',
        password: '248631'
    },
]

console.log(users [5]);

// #qLQLJSeN7i
//
// – є масив [2,17,13,6,22,31,45,66,100,-18] :
//
// 1. перебрати його циклом while
//
//     2. перебрати його циклом for
//
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
//
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
//
// 5. перебрати циклом while та вивести  числа тільки парні  значення
//
// 6. перебрати циклом for та вивести  числа тільки парні  значення
//
// 7. замінити кожне число кратне 3 на слово “okten”
//
// 8. вивести масив в зворотньому порядку.
//
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//


     const num= [2,17,13,6,22,31,45,66,100,-18];
     // 1.
       let i = 0;
       while (i < num.length){
           let number = (num[i]);
       console.log(number);
       i++;}
    // 2.

      for (let i=0; i < num.length; i++){
        console.log(num[i]);
    }
    // 3.
    //         let j = 0;
    //         while (j < num.length){
    //             j++;
    //             j % 2 !== 0;
    //             console.log(j);
    //         }



    // 4.
        for (let i=0; i < num.length; i++){
            if (i % 2 !== 0){
                console.log(i);
            }
        }

    // 5.
    // let j = 0;
    // while (j < num.length){
    //     j++;
    //     j % 2 === 0
    //     console.log(j);
    // }
    // 6.
        for (let i=0; i < num.length; i++){
            if (i % 2 === 0){
                console.log(i);
            }

        }
        // 7.
        for (let i=0; i < num.length; i++){
        if (i % 3 === 0){

            console.log('okten', i);
        }
    }
        //8.
      num.reverse();
        console.log(num);



//
// #yHAwJOyiC
//
// – Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

        let arrNum = [1,52,-3,4,35,16,27,8,-9,100];
      for (let i=0; i < arrNum.length; i++){
        console.log(arrNum[i]);
    }


//
//     #GamKju89ob
//
// – Створити масив з 10 стрічкових елементів. Вивести в консоль всі його елементи в циклі.

     let arrString = ['foo', 'bar', 'okten','hello','hi', 'connect', 'gap', 'html', 'pen', 'leg'];
    for (let i=0; i < arrString.length; i++){
        console.log(arrString[i]);
    }


//
//     #Bm76xmg
//
// – Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
     const arrElse =[1,2,3,'ola','hello','hi','chao','привіт', true, false];
    for (let i = 0; i < arrElse.length; i++){
        console.log(arrElse[i]);
}



//     #u3vmD0YJXh
//
// – Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи.

        const arrIf = [1, 2, 3, 'ola', 'hello', 'hi', 'chao', 'привіт', true, false];
        for (const arrIfElement of arrIf) {
            if (arrIfElement === true ||arrIfElement === false ) {
                console.log(arrIfElement,typeof arrIfElement );
            }
        }


//
// #9stMq2ou
//
// – Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи
        const arrIfNumber = [1, 2, 3, 'ola', 'hello', 'hi', 'chao', 'привіт', true, false];
        for (const Element of arrIfNumber) {
            if (Element === 1 || Element === 2 || Element === 3 ) {
                console.log(Element, typeof Element);
            }
        }



// #mK4pmM4
//
// – Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи
//
//
        const arrIfString = [1, 2, 3, 'ola', 'hello', 'hi', 'chao', 'привіт', true, false];
        for (const Element of arrIfString) {
            if (Element === 'ola' || Element === 'hello' || Element === 'hi'
                || Element === 'chao'|| Element === 'привіт' ) {
                console.log(Element, typeof Element);
            }
        }



// #0pm3EyTKy9
//
// – Створити порожній масив.
// Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.


        let arrayEmp = [];
        arrayEmp [0] = 125;
        arrayEmp [1] = true;
        arrayEmp [2] = 'hello';
        arrayEmp [3] = 3258;
        arrayEmp [4] = 'hi';
        arrayEmp [5] = 'okten';
        arrayEmp [6] = 15;
        arrayEmp [7] = 100;
        arrayEmp [8] = -90;
        arrayEmp [9] = false;

            console.log(arrayEmp);



//     #mDMWMW5a
//
// – Створити цикл for на 10  ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write
//
    for ( let i = 1; i<=10; i++) {
        document.write(`<h1>${i}</h1>`)
        console.log(i);
            }


//
// #4sXhaa5YMM
//
// – Створити цикл for на 100 ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write

    for ( let i = 1; i<=100; i++){
        document.write(`<li>${i}</li>`)
        console.log(i);
    }



// #s24slNyz7
//
// – Створити цикл for на 100 ітерацій з кроком 2.
// Вивести поточний номер кроку через console.log та document.write.

    for ( let i = 2; i<=100; i++){
        document.write(`<li>${i}</li>`)
        console.log(i);
    }


//
// #zananT5FR1
//
// – Створити цикл for на 100 ітерацій.
// Вивести тільки парні кроки. через console.log + document.write
        for ( let i = 0; i<=100; i++){
            if (i % 2 === 0){
            document.write(`<li>${i}</li>`)
            console.log(i);
        }
        }


//
// #Tfrwls7FM
//
// – Створити цикл for на 100 ітерацій.
// Вивести тільки непарні кроки. через console.log + document.write
            for ( let i = 0; i<=100; i++){
            if (i % 2 !== 0){
            document.write(`<li>${i}</li>`)
            console.log(i);
        }
        }


// #reLkOkTB29Q

// створити масив книжок (назва, кількість сторінок, автори, жанри).
let books = [
    {
    title: 'Charlie and the chocolate Factory',
    pageCount: '240',
    genre: ['Fantasy','Adventures'],
    authors: [
        {
            name: 'Roald Dahl',
            age: 45
        },
        {
            name: 'Roald Dahl',
            age: 45
        }
    ]
},

    {
    title: 'Murder on the Orient Express',
    pageCount: '240',
    genre: 'Detective',
    authors: [
        {
            name: 'Agatha Christie',
            age: 86
        }
    ]
},

    {
    title: 'Moby-Dick',
    pageCount: '672',
    genre: 'Adventures',
    authors: [
        {
            name: 'Herman Melville',
            age: 58
        },
        {
            name: 'Herman Melville',
            age: 58
        },
        {
            name: 'Herman Melville',
            age: 58
        }
    ]
}
            ]
        console.log(books);

// – знайти найбільшу книжку.

        console.log(books[2].pageCount);

// – знайти книжку/ки з найбільшою кількістю жанрів

       console.log(books[0].genre);

// – знайти книжку/ки з найдовшою назвою
     console.log(books[0].title);

     // – знайти книжку/ки які писали 2 автори
    console.log(books[0].authors);


// – знайти книжку/ки які писав 1 автор
    console.log(books[1].authors);


// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
        let emptyArray =[];
        let start = 100;

        for(start; start>0; start--){
           emptyArray.push(start--);
        }
        console.log(emptyArray);


//
//     b. заповнити його 50 непарними числами за допомоги циклу.

        let result =[];
        let startnon = 101;

        for(startnon; startnon>1; startnon--){
            result.push(startnon--);
        }
        console.log(result);

//
//   c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

        const getRandom = (start = 1, end = 100) => {
            return Math.floor(Math.random() * (end - start + 1) + start);
        };

        let randomArr = [];

        for (let i= 0; i< 20; i++) {
          randomArr.push(getRandom());
        }
        console.log(randomArr);

//
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)


        const randomNumber = (start = 8, end = 732) =>{
            return Math.floor (Math.random() * (end - start +1) + start);
        };
        let randomNumbers =[];

        for (let i =0; i < 20; i++){
            randomNumbers.push(randomNumber());
        }
        console.log(randomNumbers);


// 2. Вивести за допомогою console.log кожен третій елемент

    for (let i=0; i < emptyArray.length; i++){
    if (i % 3 === 0){

        console.log(i);
    }
}

//
// 3. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним.

//
// 4. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним та
//    записати їх в новий масив
//
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
//
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
//
// 6. Є масив з числами [100,250,50,168,120,345,188],
// Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
//
//
// 7. Створити масив з рандомними значеннями,
// помножити всі його елементи на 5 та перемістити їх в інший масив.



// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд…).
// пройтись по ньому, і якщо елемент є числом – додати його в інший масив.
//


// – Дано 2 масиви з рівною кількістю об’єктів.
//
//     Масиви:
//
// let usersWithId = [
//
//     {id: 1, name: ‘vasya’, age: 31, status: false},
//
// {id: 2, name: ‘petya’, age: 30, status: true},
//
// {id: 3, name: ‘kolya’, age: 29, status: true},
//
// {id: 4, name: ‘olya’, age: 28, status: false}
//
// ];
//
//
//
// let citiesWithId = [
//
//     {user_id: 3, country: ‘USA’, city: ‘Portland’},
//
// {user_id: 1, country: ‘Ukraine’, city: ‘Ternopil’},
//
// {user_id: 2, country: ‘Poland’, city: ‘Krakow’},
//
// {user_id: 4, country: ‘USA’, city: ‘Miami’}
//
// ];
//
//
//
// З’єднати в один об’єкт користувача та місто з відповідними “id” та “user_id” .
//
// Записати цей об’єкт в новий масив
//
// Example:
//
//         let usersWithCities = [
//
//             {
//                 id: 1, // <===
//                 name: ‘vasya’,
//                  age: 31,
//                  status:false,
//                 address:{
//                  user_id: 1, // <===
//                  country: 'Ukraine',
//                  city: 'Ternopil'}
//                  }
//                 TO BE CONTINUED …..]


//
// – Взяти масив з 10 чисел або створити його.
// Вивести в консоль тільки ті елементи, значення яких є парними.



//
//
// – Взяти масив з 10 чисел або створити його.
// Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
//
//
//
//
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for зібрати всі букви в слово.
//
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу while зібрати всі букви в слово.
//
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for of зібрати всі букви в слово.