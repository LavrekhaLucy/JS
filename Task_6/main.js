// #dFeorS3m7u
// - Знайти та вивести довжину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

    let text='hello world';
    console.log(text.length);

    let words='lorem ipsum';
    console.log(words.length);

    let java='javascript is cool';
    console.log(java.length);



// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

    let h='hello world';
    const hello= h.toUpperCase();
    console.log(hello);

    let l='lorem ipsum';
    const lorem= l.toUpperCase();
    console.log(lorem);

    let j='javascript is cool';
    const js =j.toUpperCase();
    console.log(js);



// #ClDsAm7xba7
// - Перевести до нижнього регістру наступні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

    let w='HELLO WORLD';
    const world= w.toLowerCase();
    console.log(world);

    let ip='LOREM IPSUM';
    const ipsum= ip.toLowerCase();
    console.log(ipsum);

    let c='JAVASCRIPT IS COOL';
    const cool =c.toLowerCase();
    console.log(cool);



// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

    let dir=' dirty string   ';
    const s=dir.trim();
    console.log(s);
    console.log(dir.length);
    console.log(s.length);



//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

    let str='Ревуть воли як ясла повні';
    let split=str.split(' ');
    console.log(split);



// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0].
// за допомоги map перетворити всі об'єкти в масиві на стрінгові.

    let arr=[10,8,-7,55,987,-1011,0,1050,0];
    const string=arr.map(number=>number+'')
    console.log(string);


// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка приймає масив чисел,
// та сортує його від більшого до меншого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// ==========================
    let numbs = [11,21,3];
    let ascending=numbs.sort((n1,n2)=>{return n1-n2});
    console.log(ascending);

    let nums = [11,21,3];
    let descending=nums.sort((n1,n2)=>{return n2-n1});
    console.log(descending);


// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// =========================

    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    let sort=coursesAndDurationArray.sort((a,b)=>{
        if(a.monthDuration < b.monthDuration){return 1;}
        if(a.monthDuration > b.monthDuration){return -1;}
        if(a.monthDuration === b.monthDuration){return 0;} });
    console.log(sort);

    let filteredMonthDuration=coursesAndDurationArray.filter(value =>value.monthDuration>5);
    console.log(filteredMonthDuration)

   let courses=coursesAndDurationArray.map(function (value, index){
       return {
        title:value.title,
        monthDuration:value.monthDuration,
        id:index+1}
   });
    console.log(courses)



//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
//
// =========================
    let cards=[
    {cardSuit:'spade', value:'6', color:'black'},
    {cardSuit:'spade', value:'7', color:'black'},
    {cardSuit:'spade', value:'8', color:'black'},
    {cardSuit:'spade', value:'9', color:'black'},
    {cardSuit:'spade', value:'10', color:'black'},
    {cardSuit:'spade', value:'jack', color:'black'},
    {cardSuit:'spade', value:'queen', color:'black'},
    {cardSuit:'spade', value:'king', color:'black'},
    {cardSuit:'spade', value:'ace', color:'black'},
        {cardSuit:'diamond', value:'6', color:'red'},
        {cardSuit:'diamond', value:'7', color:'red'},
        {cardSuit:'diamond', value:'8', color:'red'},
        {cardSuit:'diamond', value:'9', color:'red'},
        {cardSuit:'diamond', value:'10', color:'red'},
        {cardSuit:'diamond', value:'jack', color:'red'},
        {cardSuit:'diamond', value:'queen', color:'red'},
        {cardSuit:'diamond', value:'king', color:'red'},
        {cardSuit:'diamond', value:'ace', color:'red'},
            {cardSuit: 'heart', value: '6', color: 'red'},
            {cardSuit: 'heart', value: '7', color: 'red'},
            {cardSuit: 'heart', value: '8', color: 'red'},
            {cardSuit: 'heart', value: '9', color: 'red'},
            {cardSuit: 'heart', value: '10', color: 'red'},
            {cardSuit: 'heart', value: 'jack', color: 'red'},
            {cardSuit: 'heart', value: 'queen', color: 'red'},
            {cardSuit: 'heart', value: 'king', color: 'red'},
            {cardSuit: 'heart', value: 'ace', color: 'red'},
        {cardSuit:'clubs', value:'6', color:'black'},
        {cardSuit:'clubs', value:'7', color:'black'},
        {cardSuit:'clubs', value:'8', color:'black'},
        {cardSuit:'clubs', value:'9', color:'black'},
        {cardSuit:'clubs', value:'10', color:'black'},
        {cardSuit:'clubs', value:'jack', color:'black'},
        {cardSuit:'clubs', value:'queen', color:'black'},
        {cardSuit:'clubs', value:'king', color:'black'},
        {cardSuit:'clubs', value:'ace', color:'black'},

    ]

    console.log(cards.find(card=>card.cardSuit==='spade' && card.value === 'ace'));

    let sixAll=cards.filter(value => (value.value === '6'));
    console.log(sixAll);

    let colorRed=cards.filter(value => (value.color === 'red'));
    console.log(colorRed);

    let diamond=cards.filter(value => (value.cardSuit === 'diamond'));
    console.log(diamond);

    let card=cards.filter(value => value.cardSuit === 'clubs' &&
    (value.value === '10' || value.value === 'jack' || value.value === 'queen' || value.value === 'king'||value.value ==='ace'));
    console.log(card);


//
//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================

    const reduce = cards.reduce((accum, card) => {
        switch (card.cardSuit) {
            case 'spade':
                accum.spades.push(card);
                break;
            case 'diamond':
                accum.diamonds.push(card);
                break;
            case 'clubs':
                accum.clubs.push(card);
                break;
            case 'heart':
                accum.hearts.push(card);
                break;
        }
        return accum;
    }, {
        spades: [], diamonds: [], hearts: [], clubs: []
    });
    console.log(reduce);



// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker

    coursesArray = [
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
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
        },
        {
            title: 'Python Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
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
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
        },
        {
            title: 'Frontend',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
        }
    ];
    console.log(coursesArray.filter(course => {
        return course.modules.includes('sass');
    }));

    console.log(coursesArray.filter(course => {
        return course.modules.includes('docker');
    }));