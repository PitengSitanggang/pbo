// function Car(name, model, weight, color) {
//   this.name = name;
//   this.model = model;
//   this.weight = weight;
//   this.color = color;

//   this.start = function () {
//     console.log(`${this.name} Dinyalakan.`);
//   };
//   this.drive = function () {
//     console.log(`${this.name} Sedang Berjalan.`);
//   };
// }

// let car1 = new Car("Toyota", 2020, "blue", "1000kg");
// let car2 = new Car("Toyota", 2021, "red", "950kg");

// car1.start();
// car2.drive();

// class Car {
//   constructor(name, model, weight, color) {
//     this.name = name;
//     this.model = model;
//     this.weight = weight;
//     this.color = color;
//   }

//   start() {
//     console.log(`${this.name} dinyalakan.`);
//   }

//   drive() {
//     console.log(`${this.name} sedang berjalan.`);
//   }
// }
// let car1 = new Car("Toyota", "2020", 1200, "Hitam");
// let car2 = new Car("Honda", "2021", 1300, "Putih");
// car1.start();
// car1.drive();
// car2.start();
// car2.drive();

class Bike {
  constructor(merk, gear, color) {
    this.merk = merk;
    this.gear = gear;
    this.color = color;
  }

  start() {
    console.log(`Sepeda ${this.merk} mulai dikayuh.`);
  }

  drive() {
    console.log(`Sepeda ${this.merk} mengerem.`);
  }
}

let car1 = new Bike("Polygon", 2020, "blue", "1000kg");
car1.start();
