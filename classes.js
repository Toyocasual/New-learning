/* //class declaration
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    
    }
    
    print() {
        console.log(`${this.make} ${this.model} (${this.year})`)
    }

}



let myCar =  new Car('bmw', '745li', 2010)

myCar.print();
//class expression
//let car = class {
//}


class Sportscar extends Car {
    revengine() {
        console.log('vrrrr goes the ' + this.model);
    }
}



let mysportscar = new Sportscar('dodge', 'viper', 2011);

mysportscar.print()
mysportscar.revengine(); */


class Show {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    print() {
        console.log(`my name: ${this.name}
my age: ${this.age}
my sex: ${this.sex}`)
    }
}

myshow = new Show('Toyo', 24, 'Male');

myshow.print();

class Shozy extends Show {
    nickname() {
        console.log('Kc life ' + this.name)
    }
}

myshozy = new Shozy('harmattan', 'winter', 'summer')

myshozy.print();

myshozy.nickname();
