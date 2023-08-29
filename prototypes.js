let originalCar = {
    make: 'bmw',
    model: '745li',
    year: 2010
};
console.log(originalCar);
let newCar = Object.create(originalCar);

console.log(newCar.make);

console.log(Object.getPrototypeOf(newCar));

let myPrototype = Object.getPrototypeOf(newCar);
console.log(myPrototype.make);

originalCar.doors = 4;
console.log(newCar.doors);

console.log(originalCar.hasOwnProperty('doors'));

console.log(Object.getPrototypeOf(newCar));
console.log(newCar.hasOwnProperty('doors'));

/* let originalschool = {
    name: 'OOU',
    state: 'Ogun',
    country: 'Nigeria',
    Year: 2023
};

let NewSchool = Object.create(originalschool);

console.log(Object.getPrototypeOf (NewSchool));

originalschool.free = 'Known';

myprototype = Object.getPrototypeOf(NewSchool);

//console.log(NewSchool); 
console.log(Object.getPrototypeOf (NewSchool));

console.log(originalschool.hasOwnProperty('free'));
console.log(NewSchool.hasOwnProperty('free'));

 */