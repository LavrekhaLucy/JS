// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//

document.getElementById('hideButton').onclick = function () {
    document.getElementById('text').hidden = true;
}


//         #j693ca8
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18,
//     та повідомити про це користувача


document.getElementById('checkAge').onclick = function () {
    const age = document.getElementById('ageInput').value;
    document.getElementById('output').innerHTML = age >= 18 ? 'Вік достатній' : 'Вік недостатній'
}


// #ymAmN2xJ
// Створити форму з трьома полями для name, surname, age та кнопкою.
// При натисканні на кнопку зчитати дані з полів, та вивести об'єкт в документ.
// Іншими словами : заповнити форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

        const myForm = document.forms.myForm;

        const userDiv=document.getElementById('userDiv');

         myForm.addEventListener( 'submit', (e) =>{
             e.preventDefault();
             const nameForm=myForm.name.value;
             const surnameForm=myForm.Surname.value;
             const ageForm=myForm.age.value;
             let obj={nameForm,surnameForm,ageForm}
             console.log(obj);

             userDiv.innerText = obj.nameForm +'' + obj.surnameForm + '' + obj.ageForm;
         });



// #2VaLt4vDczH
// є сторінка, на якій є блок, в якому знаходиться цифра.
// написати код, який при кожному перезавантажені сторінки буде додавати до неї +1


    let addNumber =+localStorage.getItem('number');
    addNumber += 1;
    localStorage.setItem('number', addNumber);

    document.getElementById('block').innerText = addNumber;



// #Jg0gPO00
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

        const inputKg = document.getElementById('converter-kg');
        const resultDivPd = document.getElementById('converter-pd');
        inputKg.oninput = function (){
            const kilogram=+this.value;
            resultDivPd.innerText = kilogram * 2.20462;
        };



// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію,
// які дістає потрібний вам масив з localStorage та додає в нього об'єкт сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

        function addToLocalStorage(arrayName,objToAdd){
            const localStorageItem = localStorage.getItem(arrayName);
            if(!localStorageItem){
                throw new Error('this is not found');
            }
            const array = JSON.parse(localStorageItem);
            if (typeof objToAdd === 'object'){
                array.push(objToAdd);
            }
            localStorage.setItem(arrayName,JSON.stringify(array))
        }
        addToLocalStorage('pageVisitInfo',{});



//     #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

        const table = document.getElementById('table');
        const tableForm = document.forms['tableForm'];

        tableForm.onsubmit = function (e) {
            table.innerText = '';
            e.preventDefault();
            const linesValue = +tableForm.line.value;
            const quantityValue = +tableForm.quantity.value;
            const contextValue = tableForm.context.value;
            console.log(linesValue, quantityValue, contextValue);

            for (let i = 0; i < linesValue; i++) {
                const row = document.createElement('row');
                for (let j = 0; j < quantityValue; j++) {
                    const amount = document.createElement('amount');
                    amount.innerText = contextValue;
                    row.appendChild(amount);
                }
                table.appendChild(row);
            }
        };






// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантаженні сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

    let newArray = [{number: '1'}, {number: '2'}, {number: '3'}, {number: '4'}, {number: '5'}, {number: '6'}, {number: '7'}, {number: '8'}, {number: '9'}, {number: '10'},
    {number: '11'}, {number: '12'}, {number: '13'}, {number: '14'}, {number: '15'}, {number: '16'}, {number: '17'}, {number: '18'}, {number: '19'}, {number: '20'},
    {number: '21'}, {number: '22'}, {number: '23'}, {number: '24'}, {number: '25'}, {number: '26'}, {number: '27'}, {number: '28'}, {number: '29'}, {number: '30'},];
    let myArray = document.createElement('div');

