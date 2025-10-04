// #8Nmt60ZT
//
// – створити блок,
//
// – додати йому класи wrap, collapse, alpha, beta
//
// – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
//
// – додати цей блок в body.
//
// – клонувати його повністю, та додати клон в body.
//

let container = document.getElementById('container')

let block = document.createElement("div");

block.classList.add("wrap","collapse","alpha","beta");

block.style.background = 'lightblue';
block.style.color = 'darkblue';
block.style.fontSize = '24px';
block.style.padding = '20px';
block.style.margin = '10px';
block.textContent = 'Це оригінальний блок';

container.appendChild(block);


const clone = block.cloneNode(true);
clone.textContent = 'Це клон блоку';

document.body.appendChild(clone);


//
//
//     #OPLI89c9G
//
// – Є масив:
//
//     [‘Main’,’Products’,’About us’,’Contacts’]
//
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
//

let arrList = document.getElementsByClassName('arrList')[0];

let arr = ['Main', 'Products', 'About us', 'Contacts'];
for (const item of arr) {
    const li = document.createElement('li');
    li.innerText = item;

    arrList.appendChild(li);
}



//
// #jeBqHV525U5
//
// – Є масив
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
// Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration
//
// Завдання робити через цикли.
//

let divInfo = document.getElementsByClassName('divInfo')[0];
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const item of coursesAndDurationArray) {
    const div = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.innerText = item.title;

    const p  = document.createElement('p');
    p.innerText =  `Тривалість: ${item.monthDuration} місяців`;;

    div.append(h2, p);

    divInfo.appendChild(div);
}





//
// =========================
//
//     #Kx1xgoKy8
//
// – Є масив
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
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class=’item’> ,
// в якому буде <h1 class=’heading’>  з title  елементу, та <p class=’description’> з monthDuration елементу.
//
//     Завдання робити через цикли.
//

let blockInfo = document.getElementsByClassName('blockInfo')[0];

let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const course of coursesAndDurationArray1) {

    const div1 = document.createElement('div');
    div1.className = 'item';

    const h1 = document.createElement('h1');
    h1.className = 'heading';
    h1.style.color = 'darkblue';
    h1.innerText = course.title;

    const p  = document.createElement('p');
    p.className = 'description';
    p.style.color = 'red';
    p.innerText =  `Тривалість: ${course.monthDuration} місяців`;;

    div1.append(h1, p);

    divInfo.appendChild(div1);
}




//
// =========
//
// – Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
//
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
//
// Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом
//
//

let wrapper = document.getElementsByClassName('courseArray')[0];
wrapper.className = 'course';
wrapper.style.border = '2px solid red';
wrapper.style.margin = '10px';
wrapper.style.padding = '10px';

let coursesArrays2 = [
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

for (const course of coursesArrays2) {

    const courseDiv = document.createElement('div');
    course.className = 'course';
    courseDiv.style.border = '2px solid red';
    courseDiv.style.margin = '10px';
    courseDiv.style.padding = '10px';

    let titleDiv = document.createElement('div');
    titleDiv.className = 'title';
    titleDiv.innerText = course.title;
    titleDiv.className = 'course';
    titleDiv.style.border = '2px solid red';
    titleDiv.style.margin = '10px';
    titleDiv.style.padding = '10px';


    let durationDiv = document.createElement('div');
    durationDiv.className = 'duration';
    durationDiv.style.display = 'flex';
    durationDiv.style.gap = '10px';

    let monthDurationDiv = document.createElement('div');
    monthDurationDiv.innerText = `Місяців: ${course.monthDuration}`;
    monthDurationDiv.className = 'course';
    monthDurationDiv.style.border = '2px solid red';
    monthDurationDiv.style.margin = '10px';
    monthDurationDiv.style.padding = '10px';

    let hourDurationDiv = document.createElement('div');
    hourDurationDiv.innerText = `Годин: ${course.hourDuration}`;
    hourDurationDiv.className = 'course';
    hourDurationDiv.style.border = '2px solid red';
    hourDurationDiv.style.margin = '10px';
    hourDurationDiv.style.padding = '10px';


    durationDiv.append(monthDurationDiv,hourDurationDiv);
    durationDiv.className = 'course';
    durationDiv.style.border = '2px solid red';
    durationDiv.style.margin = '10px';
    durationDiv.style.padding = '10px';


    const modulesDiv = document.createElement('div');
    modulesDiv.className = 'modules';
    modulesDiv.className = 'course';
    modulesDiv.style.border = '2px solid red';
    modulesDiv.style.margin = '10px';
    modulesDiv.style.padding = '10px';


    const ul = document.createElement('ul');
    for (const module of course.modules) {
        const li = document.createElement('li');
        li.innerText = module;
        ul.appendChild(li);
        li.style.border = '2px solid red';
        li.style.margin = '10px';
        li.style.padding = '10px';
    }
    modulesDiv.appendChild(ul);

    courseDiv.append(titleDiv, durationDiv, modulesDiv);
    wrapper.appendChild(courseDiv);
}




