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

function displayCarDetails(ownerName) {
  return;
}

// 4.We want this code to log out “hey amy”, but it logs out “hey arnold” - fix that

function greet(person) {
  if (person.name == "amy") {
    return "hey amy";
  } else {
    return "hey arnold";
  }
}
const amy = { name: "arnold" };
console.log(greet(amy));

// 5.We want this code to log out the numbers 0, 1, 2, 3 in that order,
// but it doesn’t do what we expect - fix that(find two solutions)

let time = function (i) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
};

for (let i = 0; i < 4; i++) {
  time(i);
}
