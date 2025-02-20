// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

    function User(id, name, surname, email, phone){
        this.id=id;
        this.name=name;
        this.surname=surname;
        this.email=email;
        this.phone=phone;
    }
    let user1 = new User(1,'vasya','halych','halych@gmail.com','+380634521369')
    let user2 = new User(2,'vasya','halych','halych@gmail.com','+380634521369')
    let user3 = new User(3,'vasya','halych','halych@gmail.com','+380634521369')
    let user4 = new User(4,'vasya','halych','halych@gmail.com','+380634521369')
    let user5 = new User(5,'vasya','halych','halych@gmail.com','+380634521369')
    let user6 = new User(6,'vasya','halych','halych@gmail.com','+380634521369')
    let user7 = new User(7,'vasya','halych','halych@gmail.com','+380634521369')
    let user8 = new User(8,'vasya','halych','halych@gmail.com','+380634521369')
    let user9 = new User(9,'vasya','halych','halych@gmail.com','+380634521369')
    let user10 = new User(10,'vasya','halych','halych@gmail.com','+380634521369')
    console.log(user1)
    console.log(user2)
    console.log(user3)
    console.log(user4)
    console.log(user5)
    console.log(user6)
    console.log(user7)
    console.log(user8)
    console.log(user9)
    console.log(user10)

    let users=[
        new User (1,'vasya','halych','halych@gmail.com','+380634521369'),
        new User(2,'vasya','halych','halych@gmail.com','+380634521369'),
        new User(3,'vasya','halych','halych@gmail.com','+380634521369'),
        new User(4,'vasya','halych','halych@gmail.com','+380634521369'),
        new User(5,'vasya','halych','halych@gmail.com','+380634521369'),
        new User(6,'vasya','halych','halych@gmail.com','+380634521369'),
        new User(7,'vasya','halych','halych@gmail.com','+380634521369'),
        new User(8,'vasya','halych','halych@gmail.com','+380634521369'),
        new User(9,'vasya','halych','halych@gmail.com','+380634521369'),
        new User(10,'vasya','halych','halych@gmail.com','+380634521369'),
    ]
    console.log(users);



// #2ikXsE2WiKZ
// - Взяти масив з User[] з попереднього завдання, та відфільтрувати,
// залишивши тільки об'єкти з парними id (filter)
//
    const coworkers =[
        new User (1,'petya','halych','halych@gmail.com','+380634521369'),
        new User(2,'Anna','halych','halych@gmail.com','+380634521369'),
        new User(3,'kolya','halych','halych@gmail.com','+380634521369'),
        new User(4,'Asia','halych','halych@gmail.com','+380634521369'),
        new User(5,'Maria','halych','halych@gmail.com','+380634521369'),
        new User(6,'Olha','halych','halych@gmail.com','+380634521369'),
        new User(7,'Volodymyr','halych','halych@gmail.com','+380634521369'),
        new User(8,'Natalya','halych','halych@gmail.com','+380634521369'),
        new User(9,'Oxana','halych','halych@gmail.com','+380634521369'),
        new User(10,'Maryna','halych','halych@gmail.com','+380634521369'),
    ];
    function even(coworker){
        return coworker.id % 2 === 0
    }
    const evenId=coworkers.filter(even);
    console.log(evenId);



// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
    const sortUser =[
        new User(8,'Natalya','halych','halych@gmail.com','+380634521369'),
        new User(3,'kolya','halych','halych@gmail.com','+380634521369'),
        new User(6,'Olha','halych','halych@gmail.com','+380634521369'),
        new User(7,'Volodymyr','halych','halych@gmail.com','+380634521369'),
        new User (1,'petya','halych','halych@gmail.com','+380634521369'),
        new User(10,'Maryna','halych','halych@gmail.com','+380634521369'),
        new User(4,'Asia','halych','halych@gmail.com','+380634521369'),
        new User(5,'Maria','halych','halych@gmail.com','+380634521369'),
        new User(2,'Anna','halych','halych@gmail.com','+380634521369'),
        new User(9,'Oxana','halych','halych@gmail.com','+380634521369'),
    ];

    function sorter(user1, user2){
        return user1.id-user2.id;
    }
    console.log(sortUser.sort(sorter));



// #nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone,order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

    function Client(id, name, surname , email, phone,order){
        this.id=id;
        this.name=name;
        this.surname=surname;
        this.email=email;
        this.phone=phone;
        this.order=order;
    }
    let clients=[
        new Client(1,'Marya','Volkova','Volkova@ukr.net)','+380636009290',['perfume','lipstick']),
        new Client(2,'Marya','Volkova','Volkova@ukr.net)','+380636009290',['perfume','lipstick']),
        new Client(3,'Marya','Volkova','Volkova@ukr.net)','+380636009290',['perfume','lipstick']),
        new Client(4,'Marya','Volkova','Volkova@ukr.net)','+380636009290',['perfume','lipstick']),
        new Client(5,'Marya','Volkova','Volkova@ukr.net)','+380636009290',['perfume','lipstick']),
        new Client(6,'Marya','Volkova','Volkova@ukr.net)','+380636009290',['perfume','lipstick']),
        new Client(7,'Marya','Volkova','Volkova@ukr.net)','+380636009290',['perfume','lipstick']),
        new Client(8,'Marya','Volkova','Volkova@ukr.net)','+380636009290',['perfume','lipstick']),
        new Client(9,'Marya','Volkova','Volkova@ukr.net)','+380636009290',['perfume','lipstick']),
        new Client(10,'Marya','Volkova','Volkova@ukr.net)','+380636009290',['perfume','lipstick']),
    ]
    console.log(clients);

// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//

    let shopWoman=[
        new Client(1,'Marya','Volkova','Volkova@ukr.net)','+380636009290',['perfume','lipstick','powder']),
        new Client(2,'Marya','Volkova','Volkova@ukr.net)','+380636009290',['perfume','lipstick','eye shadow']),
        new Client(3,'Marya','Volkova','Volkova@ukr.net)','+380636009290',['perfume',]),
        new Client(4,'Marya','Volkova','Volkova@ukr.net)','+380636009290',['perfume','lipstick','shampoo','powder','eye shadow']),
        new Client(5,'Marya','Volkova','Volkova@ukr.net)','+380636009290',['perfume','lipstick']),
        new Client(6,'Marya','Volkova','Volkova@ukr.net)','+380636009290',['perfume','lipstick']),
        new Client(7,'Marya','Volkova','Volkova@ukr.net)','+380636009290',['perfume','lipstick','eye shadow']),
        new Client(8,'Marya','Volkova','Volkova@ukr.net)','+380636009290',['perfume','lipstick','shampoo','powder','eye shadow']),
        new Client(9,'Marya','Volkova','Volkova@ukr.net)','+380636009290',['perfume','lipstick','powder']),
        new Client(10,'Marya','Volkova','Volkova@ukr.net)','+380636009290',['perfume','lipstick']),
    ];
    const sort=shopWoman.sort((a,b) =>a.order.length-b.order.length);
    console.log(sort);



// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

    function Car(model,producer,year,maxSpeed,engineVolume){
    this.model=model;
    this.producer=producer;
    this.year=year;
    this.maxSpeed=maxSpeed;
    this.engineVolume=engineVolume;

    this.drive=function (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info=function (){
        for (const key in this) {
            console.log(key, this[key]);
        }
    };
    this.increaseMaxSpeed=function (speed){
        if(speed>0) this.maxSpeed=this.maxSpeed+speed;
    };
    this.changeYear=function (year){
        if(year>1815) this.year=year;
    };
    this.addDriver=function (driver){
        if(driver)this.driver=driver;
    };
}


    const dataCar = new Car ('Rav4','Toyota Motor Corporation', 2020, 110, 4.8);
    console.log(dataCar);

    dataCar.drive();
    dataCar.info();
    dataCar.increaseMaxSpeed(70);
    dataCar.changeYear(2022);
    dataCar.addDriver({});
    console.log(dataCar);


//
// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
        class Motocar {
            constructor(model, producer, year, maxSpeed, engineVolume) {
                this.model = model;
                this.producer = producer;
                this.year = year;
                this.maxSpeed = maxSpeed;
                this.engineVolume = engineVolume;
            }

            drive (){
                console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
            };
            info(){
                for (const key in this) {
                    console.log(key, this[key]);
                }
            };
            increaseMaxSpeed(speed){
                if(speed>0) this.maxSpeed=this.maxSpeed+speed;
            };
            changeYear (year){
                if(year>1815) this.year=year;
            };
            addDriver(driver){
                if(driver)this.driver=driver;
            };
        }


        const dataMotorCar = new Motocar ('Rav4','Toyota Motor Corporation', 2020, 110, 4.8);
        console.log(dataMotorCar);

        dataMotorCar.drive();
        dataMotorCar.info();
        dataMotorCar.increaseMaxSpeed(70);
        dataMotorCar.changeYear(2022);
        dataMotorCar.addDriver({});
        console.log(dataMotorCar);




//
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

    class Cinderella{
        constructor(name, age, footSize) {
            this.name = name;
            this.age = age;
            this.footSize = footSize;
        }

    }
    class prince{
        constructor(name, age, shoeFound) {
            this.name = name;
            this.age = age;
            this.shoeFound = shoeFound;
        }

    }
    const Cinderellas=[
        new Cinderella('Emily',16,35),
        new Cinderella('Anny',18,36),
        new Cinderella('Eveline',17,37),
        new Cinderella('Eva',18,38),
        new Cinderella('Olga',17,35.5),
        new Cinderella('Oxana',18,36.5),
        new Cinderella('Nata',18,37.5),
        new Cinderella('Yra',18,38.5),
        new Cinderella('Lucy',19,39),
        new Cinderella('Kate',18,39.5),
    ];

    let Prince = new prince('Edward', 20, 37);

    const CinderellaWichNeeded = Cinderellas.find(Cinderella=> Cinderella.footSize === Prince.shoeFound);

    console.log(CinderellaWichNeeded);



// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

    Array.prototype.ownForEach= function (greeting){
        const myArray=this;
        for (const myArrayElement of myArray) {
            greeting(myArrayElement);

        }
    };
    ['hi','hello','ola'].ownForEach((x)=>console.log(x));



    Array.prototype.ownFilter= function (employees){
        const arr =[];
        for (const Element of this) {
            if (employees(Element))  {
                arr.push(Element);
            }
        }
        return arr;
    };
    getUsers=[
        {id:1,name: 'vasya', age: 31,},
        {id:2,name: 'petya', age: 28,},
        {id:3,name: 'kolya', age: 29,},
        {id:4,name: 'olya', age: 28,},
        {id:5,name: 'max', age: 30,},
        {id:6,name: 'Kolya', age: 28,},
        {id:7,name: 'Alex', age: 30,},];

    const result=getUsers.ownFilter((user)=>user.age === 28);
    console.log(result);