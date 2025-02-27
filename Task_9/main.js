// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

  let wrapperDiv=document.getElementById('wrapper');

    let divWrap  = document.createElement('div');
        divWrap.classList.add  ('wrap');
        divWrap.innerText = 'wrap';
    let divCollapse  = document.createElement('div');
        divCollapse.classList.add ('collapse');
        divCollapse.innerText = 'collapse';
    let divAlpha = document.createElement('div');
        divAlpha.classList.add ('alpha');
        divAlpha.innerText = 'alpha';
    let divBeta = document.createElement('div');
        divBeta.classList.add ('beta');
        divBeta.innerText = 'beta';

    wrapperDiv.append(divWrap, divAlpha,divCollapse,divBeta);

        let cloneBlock = wrapperDiv.cloneNode(true);

            document.body.appendChild(cloneBlock);
            console.log(cloneBlock);
            console.log(wrapperDiv ===cloneBlock);



//     #OPLI89c9G
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

 // 1 way;
    let arrInfo=document.getElementsByClassName('arr')[0];
        let arr=['Main','Products','About us','Contacts'];
        for (const item of arr) {
        let li=document.createElement('li');
            li.innerText=item;
          arrInfo.appendChild(li);
        }

 // 2 way;
    document.write(`<ul>`);
    for (let element of arr) {
        document.write(`<li>${element}</li>`);
    }
    document.write(`</ul>`);



// #jeBqHV525U5
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//

        let coursesAndDurationArray = [
            {title: 'JavaScript Complex', monthDuration: 5},
            {title: 'Java Complex', monthDuration: 6},
            {title: 'Python Complex', monthDuration: 6},
            {title: 'QA Complex', monthDuration: 4},
            {title: 'FullStack', monthDuration: 7},
            {title: 'Frontend', monthDuration: 4}
        ];

        for (const [key, value] of Object.entries(coursesAndDurationArray)) {
        console.log(key, value);}


// =========================
//     #Kx1xgoKy8
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//
// ==========================
//
        let course=document.getElementById('coursesAndDurationArr');

        let coursesAndDurationArr = [
            {title: 'JavaScript Complex', monthDuration: 5},
            {title: 'Java Complex', monthDuration: 6},
            {title: 'Python Complex', monthDuration: 6},
            {title: 'QA Complex', monthDuration: 4},
            {title: 'FullStack', monthDuration: 7},
            {title: 'Frontend', monthDuration: 4}
        ];

        for (const Element of coursesAndDurationArr) {
            let div = document.createElement('div');
            div.className='item';

            let h1 = document.createElement('h1');
            h1.classList.add('heading');
            h1.innerText = Element.title;

            let p = document.createElement('p');
            p.classList.add('description');
            p.innerText = Element.monthDuration;

            div.append(h1,p);

          course.appendChild(div);

}
