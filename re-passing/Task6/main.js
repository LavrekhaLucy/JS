// #dFeorS3m7u
//
// – Знайти та вивести довжину наступних стрінгових значень
//
//  ‘hello world’
//
// ‘lorem ipsum’
//
// ‘javascript is cool’
//
//

        let h ='hello world';
        console.log(h.length);

        let l = 'lorem ipsum';
        console.log(l.length);

        let j = 'javascript is cool';
        console.log(j.length);


//
// #8lld9HMxXWB
//
// – Перевести до великого регістру наступні стрінгові значення
//
//       ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’
//
        let h1 = 'hello world';
        console.log(h.toUpperCase());
        let l1 = 'lorem ipsum';
        console.log(l1.toUpperCase());
        let j1 = 'javascript is cool';
        console.log(j1.toUpperCase());



//
//
// #ClDsAm7xba7
//
// – Перевести до нижнього регістру наступні стрінгові значення
//
//       ‘HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’
//

let h2 = 'HELLO WORLD';
console.log(h.toLowerCase());
let l2 = 'LOREM IPSUM';
console.log(l1.toLowerCase());
let j2 = 'JAVASCRIPT IS COOL';
console.log(j1.toLowerCase());



//
//
// #0b89BkYZwu
//
// – Є “брудна” стрінга let str = ‘ dirty string   ‘ . Почистити її від зайвих пробілів.
//
//

let str = ' dirty string   ';
console.log(str.split(' '));


//
//     #bfoJuse4ZzP
//
// – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//
//     let str = ‘Ревуть воли як ясла повні’;
//
// let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]
//
//
let str1 = 'Ревуть воли як ясла повні';
console.log(str1.split(' '));



//
//
//
// #Rbr5kEQ
//
// – є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об’єкти в масиві на стрінгові.
//


let numArr = [10,8,-7,55,987,-1011,0,1050,0];
let numArrString = numArr.map(value => value.toString() );
console.log(numArrString);


//
//
// #5hqyKTfmc
//
// – створити функцію sortNums(array,direction),
// яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.
//
//     let nums = [11,21,3];
//
// sortNums(nums,’ascending’) // [3,11,21]
//
// sortNums(nums,’descending’) // [21,11,3]
//

let nums = [11,21,3];
nums.sort((a,b) => a - b);
console.log(nums);


nums.sort((a,b) => b - a);
console.log(nums);


//
// ==========================
//
// #yo06d74c1C
//
// – є масив
//
// let coursesAndDurationArray = [
//
//     {title: ‘JavaScript Complex’, monthDuration: 5},
//
// {title: ‘Java Complex’, monthDuration: 6},
//
// {title: ‘Python Complex’, monthDuration: 6},
//
// {title: ‘QA Complex’, monthDuration: 4},
//
// {title: ‘FullStack’, monthDuration: 7},
//
// {title: ‘Frontend’, monthDuration: 4}
//
// ];
//
//  — відсортувати його за спаданням за monthDuration
//
//  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
//
//  — за допомоги map перетворити кожен елемент на наступний тип {id, title, monthDuration}
//

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}];


//  — відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((a,b) => {
    return b.monthDuration - a.monthDuration;
});
console.log(coursesAndDurationArray);

//  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filter);

//  — за допомоги map перетворити кожен елемент на наступний тип {id, title, monthDuration}
// let newArray = coursesAndDurationArray.map(
//     function (value, index) {
//         let obj =  {
//             id: index + 1,
//             title:value.title,
//             monthDuration: value.monthDuration,
//         }
//         return obj;
//     }
// );
// console.log(newArray);





//
//
//
// #4LJn7zBx
//
// взяти з arrays.js масив coursesArray
//
// –написати пошук всіх об’єктів, в яких в modules є sass
//
// –написати пошук всіх об’єктів, в яких в modules є docker
//

let coursesArray2 = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let sass = coursesArray2.filter(courses => courses.modules.includes('sass') )
console.log(sass);

let docker = coursesArray2.filter(courses => courses.modules.includes('docker') )
console.log(docker);



//
//
//
// #bolvdlhP
//
// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
//
// Після опису, використовуючи функції масивів:
//
//     – знайти піковий туз
//
//  – всі шістки
//
//  – всі червоні карти
//
//  – всі буби
//
//  – всі трефи від 9 та більше
//
//
//
// Приклад моделі об’єкту карти:
//
// {
//
//     cardSuit: ”, // ‘spade’, ‘diamond’, ’heart’, ‘clubs’
//
//     value: ”, // ‘6’-’10’, ‘ace’, ’jack’, ’queen’, ’king’
//
//     color:”, // ‘red’, ’black’
//
// }
//
let suits = ['spade','diamond','heart','clubs'];
let  values=  ['6','7','8','9','10', 'ace', 'jack', 'queen', 'king'];

let deckOfCard = [];
for (const suit of suits) {
    for (let value of values) {
        let color = (suit === 'diamond' || suit === 'heart') ? 'red' : 'black'
        deckOfCard.push(suit, value,color)
    }

}
console.log(deckOfCard);

// console.log(deckOfCard.find(value =>value.cardSuit === 'spade' && value.value === 'ace' ));
//
//



//
// #EP5I1UUzAX
//
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
//
// Приклад моделі кінцевого об’єкту
//
// {
//
//     spades:[],
//
//         diamonds:[],
//
//     hearts:[],
//
//     clubs:[]
//
// }