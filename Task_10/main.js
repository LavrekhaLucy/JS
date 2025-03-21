'use strict';

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


        let locations = [
            {
                "title": "м. Київ",
                "type": "city"
            },
            {
                "title": "Житомирська область",
                "type": "oblast"
            },
            {
                "title": "Харківська область",
                "type": "oblast"
            },
            {
                "title": "Вінницька область",
                "type": "oblast"
            },
            {
                "title": "Чернігівська область",
                "type": "oblast"
            },
            {
                "title": "Дніпропетровська область",
                "type": "oblast"
            },
            {
                "title": "Черкаська область",
                "type": "oblast"
            },
            {
                "title": "Волинська область",
                "type": "oblast"
            },
            {
                "title": "Київська область",
                "type": "oblast"
            },
            {
                "title": "Миколаївська область",
                "type": "oblast"
            },
            {
                "title": "Рівненська область",
                "type": "oblast"
            },
            {
                "title": "Сумська область",
                "type": "oblast"
            },
            {
                "title": "Тернопільська область",
                "type": "oblast"
            },
            {
                "title": "Краматорський район",
                "type": "raion"
            },
            {
                "title": "Кіровоградська область",
                "type": "oblast"
            },
            {
                "title": "Хмельницька область",
                "type": "oblast"
            },
            {
                "title": "Запорізька область",
                "type": "oblast"
            },
            {
                "title": "Одеська область",
                "type": "oblast"
            },
            {
                "title": "Полтавська область",
                "type": "oblast"
            },
            {
                "title": "Львівська область",
                "type": "oblast"
            },
            {
                "title": "м. Кривий Ріг",
                "type": "city"
            },
            {
                "title": "Криворізька територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Івано-Франківська область",
                "type": "oblast"
            },
            {
                "title": "Чернівецька область",
                "type": "oblast"
            },
            {
                "title": "Ізюмський район",
                "type": "raion"
            },
            {
                "title": "Бахмутська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "м. Васильків",
                "type": "city"
            },
            {
                "title": "Васильківська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Білоцерківська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "м. Біла Церква",
                "type": "city"
            },
            {
                "title": "Донецька область",
                "type": "oblast"
            },
            {
                "title": "Покровський район",
                "type": "raion"
            },
            {
                "title": "Уманська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Бахмутський район",
                "type": "raion"
            },
            {
                "title": "Закарпатська область",
                "type": "oblast"
            },
            {
                "title": "Лубенська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "м. Лубни",
                "type": "city"
            },
            {
                "title": "Полтавська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "м. Полтава",
                "type": "city"
            },
            {
                "title": "м. Старокостянтинів",
                "type": "city"
            },
            {
                "title": "Старокостянтинівська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "м. Миколаїв",
                "type": "city"
            },
            {
                "title": "Миколаївська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Торецька територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Кропивницький район",
                "type": "raion"
            },
            {
                "title": "Першотравенська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Нікопольська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "м. Нікополь",
                "type": "city"
            },
            {
                "title": "м. Першотравенськ",
                "type": "city"
            },
            {
                "title": "Одеський район",
                "type": "raion"
            },
            {
                "title": "м. Черкаси",
                "type": "city"
            },
            {
                "title": "Черкаська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Добропільська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Херсонська область",
                "type": "oblast"
            },
            {
                "title": "Сумська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "м. Суми",
                "type": "city"
            },
            {
                "title": "Первомайська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Краматорська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Макарівська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "м. Краматорськ",
                "type": "city"
            },
            {
                "title": "Миргородська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "м. Бориспіль",
                "type": "city"
            },
            {
                "title": "Броварська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "м. Миргород",
                "type": "city"
            },
            {
                "title": "Бориспільська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "м. Бровари",
                "type": "city"
            },
            {
                "title": "м. Вознесенськ",
                "type": "city"
            },
            {
                "title": "Коростенський район",
                "type": "raion"
            },
            {
                "title": "м. Первомайськ",
                "type": "city"
            },
            {
                "title": "Миронівська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Вознесенський район",
                "type": "raion"
            },
            {
                "title": "Синельниківський район",
                "type": "raion"
            },
            {
                "title": "Фастівська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Вознесенська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Житомирський район",
                "type": "raion"
            },
            {
                "title": "Дружківська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "м. Фастів",
                "type": "city"
            },
            {
                "title": "Слов'янська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Запорізький район",
                "type": "raion"
            },
            {
                "title": "м. Слов'янськ",
                "type": "city"
            },
            {
                "title": "м. Кременчук",
                "type": "city"
            },
            {
                "title": "Ніжинський район",
                "type": "raion"
            },
            {
                "title": "м. Ватутіне",
                "type": "city"
            },
            {
                "title": "Ватутінська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Кременчуцька територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Пологівський район",
                "type": "raion"
            },
            {
                "title": "Дніпровська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "м. Дніпро",
                "type": "city"
            },
            {
                "title": "Лозівський район",
                "type": "raion"
            },
            {
                "title": "Покровська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "м. Обухів",
                "type": "city"
            },
            {
                "title": "Узинська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Шепетівський район",
                "type": "raion"
            },
            {
                "title": "Пирятинська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Сумський район",
                "type": "raion"
            },
            {
                "title": "Харківський район",
                "type": "raion"
            },
            {
                "title": "Жашківська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "м. Пирятин",
                "type": "city"
            },
            {
                "title": "Павлоградський район",
                "type": "raion"
            },
            {
                "title": "Голованівський район",
                "type": "raion"
            },
            {
                "title": "Обухівська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Подільський район",
                "type": "raion"
            },
            {
                "title": "м. Охтирка",
                "type": "city"
            },
            {
                "title": "Мар'їнська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "м. Мелітополь",
                "type": "city"
            },
            {
                "title": "Куп’янський район",
                "type": "raion"
            },
            {
                "title": "Святогірська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "м. Рівне",
                "type": "city"
            },
            {
                "title": "Бородянська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Роздільнянський район",
                "type": "raion"
            },
            {
                "title": "Запорізька територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Шосткинська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Болградський район",
                "type": "raion"
            },
            {
                "title": "Прилуцький район",
                "type": "raion"
            },
            {
                "title": "Олешківська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Березівський район",
                "type": "raion"
            },
            {
                "title": "Очаківська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Смілянська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "м. Очаків",
                "type": "city"
            },
            {
                "title": "Рівненська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Первомайський район",
                "type": "raion"
            },
            {
                "title": "Ізмаїльський район",
                "type": "raion"
            },
            {
                "title": "Сквирська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "м. Шостка",
                "type": "city"
            },
            {
                "title": "Мелітопольська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Маріупольський район",
                "type": "raion"
            },
            {
                "title": "Охтирська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Білгород-Дністровський район",
                "type": "raion"
            },
            {
                "title": "м. Запоріжжя",
                "type": "city"
            },
            {
                "title": "м. Коростень",
                "type": "city"
            },
            {
                "title": "Луганська область",
                "type": "oblast"
            },
            {
                "title": "м. Житомир",
                "type": "city"
            },
            {
                "title": "Курахівська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Черкаський район",
                "type": "raion"
            },
            {
                "title": "Новоград-Волинський район",
                "type": "raion"
            },
            {
                "title": "Костянтинівська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Переяславська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Новоукраїнський район",
                "type": "raion"
            },
            {
                "title": "Уманський район",
                "type": "raion"
            },
            {
                "title": "Коростенська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "м. Переяслав",
                "type": "city"
            },
            {
                "title": "Шосткинський район",
                "type": "raion"
            },
            {
                "title": "Великоновосілківська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Чернігівський район",
                "type": "raion"
            },
            {
                "title": "Радомишльська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Вугледарська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Звенигородський район",
                "type": "raion"
            },
            {
                "title": "м. Конотоп",
                "type": "city"
            },
            {
                "title": "Вишгородська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Гребінківська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Сарненський район",
                "type": "raion"
            },
            {
                "title": "Бердянський район",
                "type": "raion"
            },
            {
                "title": "Миколаївський район",
                "type": "raion"
            },
            {
                "title": "Гостомелська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Дубровицька територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Українська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Сарненська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Воскресенська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "м. Маріуполь",
                "type": "city"
            },
            {
                "title": "Чугуївський район",
                "type": "raion"
            },
            {
                "title": "Охтирський район",
                "type": "raion"
            },
            {
                "title": "Житомирська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "м. Сарни",
                "type": "city"
            },
            {
                "title": "Широківська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Славутицька територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Золотоніський район",
                "type": "raion"
            },
            {
                "title": "Конотопська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Волноваський район",
                "type": "raion"
            },
            {
                "title": "Донецький район",
                "type": "raion"
            },
            {
                "title": "Маріупольська територіальна громада",
                "type": "hromada"
            },
            {
                "title": "Вараський район",
                "type": "raion"
            },
            {
                "title": "м. Славутич",
                "type": "city"
            }
        ];

        let current_page = 1;
        let records_per_page = 10;

        function prevPage() {
            if (current_page > 1) {
                current_page--;
                changePage(current_page);
            }
        }

        function nextPage() {
            if (current_page < numPages()) {
                current_page++;
                changePage(current_page);
            }
        }

        function changePage(page) {
            let locationInfo = document.getElementById('locationInfo');
            let info = document.getElementsByClassName('info');

            if (page < 1) page = 1;
            if (page > numPages()) page = numPages();

            locationInfo.innerHTML = '';

            for (let i = (page - 1) * records_per_page; i < (page * records_per_page); i++) {
                locationInfo.innerHTML += locations [i].title + ' ' + locations [i].type + '<br>';
            }
            info.innerHTML = page;
        }

        function numPages() {
            return Math.ceil(locations.length / records_per_page);
        }

        window.onload = function () {
            changePage(1)
        };





