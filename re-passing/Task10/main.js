// #sH8c4er
//
// – Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.
//
//

document.getElementById('btn').onclick = function () {
    document.getElementById('text').hidden = true;
}


//
//
//
// #j693ca8
//
// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача
//
//

document.getElementById('enter').onclick = function () {
    const age = document.getElementById('ageInput').value;
    document.getElementById('result').innerText = age >= 18 ? 'Adult' : 'Kids'
}


//
// #ymAmN2xJ
//
// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом
//
//

document.getElementById('submit').onclick = function () {
    const myForm = document.getElementById('form');
    const user = {
        name: myForm.name.value,
        surname: myForm.surname.value,
        age: myForm.age.value
    }


    document.getElementById('info').innerText = JSON.stringify(user, null, 2);

}

//
//
//
// #2VaLt4vDczH
//
// є сторінка, на якій є блок, в кому знаходиться цифра. Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
//

let addNumber =+localStorage.getItem("number");
addNumber +=1;
localStorage.setItem("number", addNumber);
document.getElementById('block').innerText = addNumber;

 document.getElementById('submit2').onclick = function () {
        localStorage.clear();
        document.getElementById('block').innerText = 0;
 }



//
//
// #LhSfdhM3
//
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM
//

// --- Логіка запису в Local Storage ---

const STORAGE_KEY = 'sessionsList';

function recordVisit() {
    // 1. Створюємо об'єкт для поточного відвідування
    const now = new Date();
    const visitData = {
        timestamp: now.getTime(), // Час у мілісекундах для сортування
        dateTime: now.toLocaleString('uk-UA', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        })
    };

    // 2. Отримуємо існуючий список
    //    JSON.parse() перетворює рядок на масив. Якщо його немає, використовуємо порожній масив [].
    const existingSessions = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    // 3. Додаємо нове відвідування на початок масиву (для відображення найновіших першими)
    existingSessions.unshift(visitData);

    // 4. Зберігаємо оновлений масив назад у Local Storage (конвертуючи назад у рядок)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existingSessions));
}

// Записуємо інформацію про відвідування одразу після завантаження DOM
document.addEventListener('DOMContentLoaded', recordVisit);








//
// #Jg0gPO00
//
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
//
//

const inputKg = document.getElementById('converter-kg');
const resultDivPd = document.getElementById('converter-pd');
inputKg.oninput = function (){
    const kilogram=+this.value;
    resultDivPd.innerText = kilogram * 2.20462;
};





//
// #RbQGnH5DuC
//
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
//
// сигнатура функції –
//
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
//
//
//
//
//
//     #kUSgFqWY
//
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
//
//     При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.
//
//
//
//
//
//     #bq1zkx7WP
//
// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
//
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається
//
//
//
//
//
// #NKB0tgWIK1G
//
// ***PAGINATION
//
// зробити масив на 100 об’єктів та дві кнопки prev next
//
// при завантаженні сторінки з’являються перші 10 об’єктів.
//
//     При натисканні next виводяться наступні 10 об’єктів
//
// При натисканні prev виводяться попередні 10 об’єктів