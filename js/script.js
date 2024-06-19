var a = 1
const b = 3

if (b > 2) {
    let c = 2
}

//c = 8 //Uncaught ReferenceError: c is not defined
//b = 8 //Assignment to constant variable.

//HOISTING
console.log(x); // undefined (promenljiva je hoisted, ali ne i vrednost)
var x = 10;
console.log(x); // 10

//VRSTE PROMENLJIVIH
var price = 2.8
var isRaining = false

let name = "John";
let greeting = 'Hello';
let template = `Hi, ${name}!`;
let cena = `Price ${4 * 5}`

console.log(cena)

let person = {
    name: "Alice",
    age: 25
};

console.log(person)
console.log(person.name + " " + person.age)

let colors = ["red", "green", "blue"];

console.log(colors[2])

function greet() {
    return "Hello!";
}

const greetArrow = () => "Hello!";

console.log(greetArrow());

let add = (a, b) => a + b;
console.log(add(3, 4));// 7

let multiply = (a, b) => {
    let result = a * b;
    return result;
};
console.log(multiply(3, 4)); // 12


console.log(5 == "5"); // true (jednakost bez tipa)
console.log(5 === "5"); // false (stroga jednakost)

console.log(typeof 123); // "number"
console.log(typeof "Hello"); // "string"
console.log([1, 2, 3] instanceof Array); // true

//SPREAD
let array1 = [1, 2, 3];
let array2 = [...array1, 4, 5, 6];
console.log(array2); // [1, 2, 3, 4, 5, 6]

//REST
let [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest); // [2, 3, 4]

//IF
var z = 5
if (z == 0) {
    console.log('Nula');
} else if (z > 0) {
    console.log('Pozitivan broj');
} else {
    console.log('Negativan broj');
}

//SWITCH
let dan = 5;
switch (dan) {
    case 6:
        danIme = 'Subota';
        break;
    case 7:
        danIme = 'Nedelja';
        break;
    case 1, 2, 3, 4, 5:
        danIme = 'Radni dan';
        break;
    default:
        danIme = 'Nepoznat dan';
}
console.log(danIme); // Output: radni dan

//FOR
for (let i = 0; i < 5; i++) {
    console.log(i);
}// Output: 0, 1, 2, 3, 4

const arr = [3, 5, 7];
arr.foo = 'hello';
for (let i in arr) {
    console.log(i); // loguje "0", "1", "2", "foo"
}
for (let i of arr) {
    console.log(i); // loguje 3, 5, 7 
}

//WHILE
let m = 0;
while (m < 5) {
  console.log(m);
  m++;
}
let n = 0;
do {
  console.log(n);
  n++;
} while (n < 5);
