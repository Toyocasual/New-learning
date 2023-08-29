/* let car = {
    make: 'bmw',
    model: ' 745li',
    year: 2010
} */

function car(make, model, year){
    this.make = make;
    this.mode = model;
    this.year = year;
}

let mycar = new car('bmw', '745li', 2010)

console.log(mycar);

function Myfunction() {
    console.log('i am a simple function');
}

let myfunction = new Myfunction();

console.log(typeof myfunction);

//console.log(myfunction);

/* can't really do anything with this particular
object ... it's certainly not a function
reference anymore */

//STOP.

/* function Son(name, level, sex) {
    this.name = name;
    this.level = level;
    this.sex = sex;

}

let myson = new Son('Toyo', 'Bsc', 'Male')

console.log(typeof myson);
console.log(myson);

function Church(name, location, population) {
    this.name = name;
    this.loction = location;
    this.population = population;
}

let mychurch = new Church('Rccg', 'Ojodu', 200);
console.log(mychurch);

function Student(name, level, color) {
    this.name = name;
    this.level = level;
    this.color = color;
}

let ooustudent = new Student('Toyo', '400lvl', 'Blue')
console.log(ooustudent);

function State(name, region, population) {
    this.name = name;
    this.region = region;
    this.population = population;
}
let country = new State('lagos', 'west', 18000000);
console.log(country);


function course(name, department, faculty) {
    this.name = name;
    this.department = department;
    this.faculty = faculty;
}
 let mycourse = new course('mathematics', 'mathematical sciences', 'sciences');

 console.log(mycourse);


 function school(name, state, country) {
    this.name = name;
    this.state = state;
    this.country = country;

 }

 let myschool = new school('Oou', 'Ogun', 'Nigeria');
 console.log(myschool);
 */