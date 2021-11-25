//submit homework to the repository that you created for git lecture

// 1. Compute the exponent of a number (using recursion);
//8^2 = 8 x 8 = 64

const exponent = (base, power) => {
  return power == 0 ? 1 : base * exponent(base, power - 1);
};
console.log(`Task 1:`, exponent(8, 2));

// 2. Write functions min and max that will find min and max number in array using apply

let arr = [2, 25, 30, 100, 10, 43, 21];

Array.prototype.max = function () {
  return Math.max.apply(null, this);
};

Array.prototype.min = function () {
  return Math.min.apply(null, this);
};

console.log(`Task 2: Max number is ${arr.max()}. Min number is ${arr.min()}`);

// 3. write a function displayCarDetails that will receive as argument ownerName
//    and return a string with car registration number, branch and color.
//    Please make examples for three different cars

function Car(brand, regNum, color) {
  this.brand = brand;
  this.regNum = regNum;
  this.color = color;
}
let car1 = new Car("Tesla", "BC2121", "silver");
let car2 = new Car("Opel", "AA1211", "blue");
let car3 = new Car("Nissan", "AO2332", "red");

function displayCarDetails(ownerName) {
  return `Task 3: ${ownerName} is the owner of this ${this.color} ${this.brand} regiseted under ${this.regNum}.`;
}

console.log(displayCarDetails.call(car1, "Oleh"));
console.log(displayCarDetails.call(car2, "Anna"));
console.log(displayCarDetails.call(car3, "Marta"));

// 4.We want this code to log out “hey amy”, but it logs out “hey arnold” - fix that

function greet(person) {
  if (person.name == "amy") {
    return "hey amy";
  } else {
    return "hey arnold";
  }
}
const amy = { name: "amy" };
const arnold = { name: "ivan" };
console.log(`Task 4: ${greet(amy)}`);
console.log(`Task 4: ${greet(arnold)}`);

// 5.We want this code to log out the numbers 0, 1, 2, 3 in that order,
// but it doesn’t do what we expect - fix that(find two solutions)

console.log(`Task 5.1`);
let time = function (i) {
  setTimeout(function () {
    console.log(i);
  }, 0);
};

for (let i = 0; i < 4; i++) {
  time(i);
}

setTimeout(() => console.log(`Task 5.2`), 0);
for (let i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0);
}
