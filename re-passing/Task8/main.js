// #iz6emEsP2BA
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
// за допомогою map перетворити кожен елемент на наступний тип {id,title,monthDuration
//
//     Зробити все ВИКЛЮЧНО за допомогою інлайн конструкції
//
//

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
 let newArr= coursesAndDurationArray.map( (value,index)=> ({id: index + 1, ...value}));

console.log(newArr);



//
//
//
//     #AiN5CoUQ
//
//     Створити функцію, яка робить глибоку копію об’єкта.
//
//         Додати перевірки на undefined, null, NaN.
//
//         Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.
//


// function cloner(obj) {
//     if (obj) {
//         let functions = [];
//         for (const key in obj) {
//             if (typeof obj[key] === 'function') {
//                 const functionClone = obj[key].bind({});
//                 functions.push({functionClone, key});
//             }
//         }
//         const cloneObj = JSON.parse(JSON.stringify(obj));
//         for (const func of functions) {
//             cloneObj[func.key] = func.functionClone;
//         }
//
//         console.log(cloneObj);
//         return cloneObj
//
//     }
//
//     throw new Error('!!!!!');
//
// }
//
// const clone = cloner({id: 123, name: 'asdsad', greeting() {console.log('hello')}, foo() {console.log('bar')}});
// clone.foo();

function cloner(obj) {
    // Перевірки
       if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    // Якщо масив → клонувати як масив
    if (Array.isArray(obj)) {
        return obj.map(el => cloner(el));
    }

    // Якщо це об’єкт → клонувати рекурсивно
    if (typeof obj === 'object') {
        const cloneObj = {};
        for (const key in obj) {
            if (typeof obj[key] === 'function') {
                // Зберігаємо функцію як є (не bind!)
                cloneObj[key] = obj[key];
            } else {
                cloneObj[key] = cloner(obj[key]);
            }
        }
        return cloneObj;
    }

    // Якщо примітив → повертаємо напряму
    return obj;
}

// Тест
const original = {
    id: 123,
    name: 'asdsad',
    greeting() { console.log('hello', this.name); },
    foo() { console.log('bar'); },
    nested: { x: 10, y: NaN }
};

const clone = cloner(original);

console.log(clone);
clone.greeting(); // має працювати
clone.foo();
console.log(clone.nested);







