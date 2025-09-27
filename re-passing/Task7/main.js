//
// const d = new Date(24, 10, 18);
// console.log(d);
//
// #XjJuucOMR0
//
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
//
// створити пустий масив, наповнити його 10 об’єктами new User(….)
//
//

class User {
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }


}
//
//
const arrOfUsers= [
    new User(1, 'vasya', 'Petrov', 'Petrov@gmail', '380939475125'),
    new User(8, 'katya', 'Petrov', 'Petrov@gmail', '380939475125'),
    new User(4, 'maria', 'Petrov', 'Petrov@gmail', '380939475125'),
    new User(5, 'olya', 'Petrov', 'Petrov@gmail', '380939475125'),
    new User(10, 'petya', 'Petrov', 'Petrov@gmail', '380939475125'),
    new User(6, 'vera', 'Petrov', 'Petrov@gmail', '380939475125'),
    new User(2, 'Alina', 'Petrov', 'Petrov@gmail', '380939475125'),
    new User(7, 'yra', 'Petrov', 'Petrov@gmail', '380939475125'),
    new User(9, 'lina', 'Petrov', 'Petrov@gmail', '380939475125'),
    new User(3, 'olena', 'Petrov', 'Petrov@gmail', '380939475125'),
]

console.log(arrOfUsers);

let arrUsers= [];
for (let i = 0; i <=10; i++) {
 arrUsers.push(new User(
     i,
     `Name: ${i}`,
     `Surname:${i}`,
     `user${i}@gmail.com`,
     `3809357212${20+i}`
 ))

}console.log(arrUsers);



//
// #2ikXsE2WiKZ
//
// – Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)
//

let newAUsers = arrUsers;
console.log(newAUsers);

function coupleId(user){
    return user.id %2 === 0;
}
const numDoubId= newAUsers.filter(coupleId);
console.log(numDoubId);



//
// #pOeHKct
//
// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//


function sorted(user1, user2) {
    return user1.id-user2.id;
}

arrOfUsers.sort(sorted);
console.log(arrOfUsers);


//
// #nkMXISv
//
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//
// створити пустий масив, наповнити його 10 об’єктами Client
//


class Client{

    constructor(id, name, surname, email, phone,order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;


    }
}
let newClient =[];
for (let i = 0; i <10; i++) {
    newClient.push(new Client(
        i,
        `Name: ${i}`,
        `Surname:${i}`,
        `user${i}@gmail.com`,
        `3809358234${20+i}`,
        `[item${i}, item${i+1}, item${i+2}]`

    ))

}console.log(newClient);






//
// #8abtVjRv
//
// – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)
//


// function sort (user1, user2) {
//     return user1.order.length-user2.order.length;
// }
newClient.sort((a,b) => a.order.length - b.order.length);
console.log(newClient);


//
// #vV9a6584I5
//
// – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car
//


function createCar1 (model, producer, year, maxSpeed,engineVolume ) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
    };
    this.info = function () {
        for (const key in this) {
            console.log(key, this[key])
        }
    };
    this.increaseMaxSpeed = function (newSpeed) {
    if (newSpeed >0) this.maxSpeed = this.maxSpeed+newSpeed};

    this.changeYear = function (newValue){
        if(newValue > 1815) this.year = newValue;
    }
    this.addDriver = function (driver){
        if(driver) this.driver = driver;
    }
}

        let  car = new createCar1('Volvo','Sweden', 2014, 260, 2.0 );
         console.log(car);

        car.drive();
        car.info();
        car.increaseMaxSpeed(70);
        car.changeYear(2020);
        car.addDriver({name:'Ihor'});
        console.log(car);



//
// #5kla3yMpgp
//
// – (Те саме, тільки через клас)
//
// Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//
//     — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт car
//
//
//
//
//

class carCreate {
    constructor(model, producer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }
    drive()  {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    info(){
        for (const key in this) {
            console.log(key, this[key])
        }
    }
    increaseMaxSpeed (newSpeed) {
        if (newSpeed > 0) this.maxSpeed = this.maxSpeed + newSpeed;

    }
    changeYear (newYear) {
        if (newYear > 1815) this.year = newYear;
    }
    addDriver (driver) {
        if (driver) this.driver = driver;
    }
}
let car1 = new carCreate('Rav4','Toyota Motor Corporation', 2020, 110, 4.8);
console.log(car1);
car1.drive();
car1.info();
car1.increaseMaxSpeed(70);
car1.changeYear(2020);
car1.addDriver({name: 'Ihor'});
console.log(car1);



//
//
//
//
// #zg6Fifnqig
//
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
//
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку
//




class cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class princeName {
    constructor(name, age, shoeFound) {
        this.name = name;
        this.age = age;
        this.shoeFound = shoeFound;
    }

}


let cinderellasArr = [
    {name:'Anna',age:17, footSize:36},
    {name:'Olha',age:18, footSize:37},
    {name:'Anita',age:17, footSize:38},
    {name:'Angelina',age:19, footSize:36},
    {name:'Lucia',age:17, footSize:39},
    {name:'Anna',age:16, footSize:36},
    {name:'Vera',age:17, footSize:39},
    {name:'Yulia',age:18, footSize:35},
    {name:'Galina',age:17, footSize:38},
    {name:'Alisa',age:19, footSize:36},
]


let prince = new princeName ('Ihor', 20, 35);


for (const cinderella of cinderellasArr) {
    if (cinderella.footSize === prince.shoeFound) {
        console.log("Попелюшка, яка підходить:", cinderella);
        break; // зупиняємо цикл, бо ми знайшли
    }
}

let CinderellaWichNeeded = cinderellasArr.find (cinderella => cinderella.footSize === prince.shoeFound);
console.log(CinderellaWichNeeded);




//
//
// #gsKLAsNWM
//
// *Через Array.prototype. створити власний foreach, filter
//

function Car (model, producer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
}
Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i],i, this);

    }
}
let cars = [
    new Car ('BMW','Germany',2010,220,3.0),
    new Car ('Opel','Germany',2010,220,3.0),
    new Car ('Volvo','Germany',2010,220,3.0),
    new Car ('Toyota','Germany',2010,220,3.0),
    new Car ('Jeep','Germany',2010,220,3.0),
]
cars.myForEach((cars, index)=>{
    console.log(`Car#${index+1}:`,cars.model, cars.year);
});

function Car1 (model, producer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
}
Array.prototype.myForEach = function(callback) {
    let result =[];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i],i, this)){
            result.push(this[i]);
        }
    }
    return result;
   };

let cars1 = [
    new Car1 ('BMW','Germany',2010,220,3.0),
    new Car1 ('Opel','Germany',2010,250,3.0),
    new Car1 ('Volvo','Germany',2010,100,3.0),
    new Car1 ('Toyota','Germany',2010,260,3.0),
    new Car1 ('Jeep','Germany',2010,170,3.0),
]
let mySpeedCars = cars1.filter(car=> car.maxSpeed >200);
    console.log('The fast Cars:', mySpeedCars);
