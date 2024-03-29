"use strict";
function alerter() {
    alert('app');
}
// Kommentare
// Einzeiler
/*  Mehrzeiler  */
// Datentypen
// allgemein
// <art_der_zuweisung> <var-name>: <type>> = <wert>
let myName = 'Max';
var myAge = 27;
const anything = 'Max';
// Boolean
let isDone = true;
// Number
let decimal = 6;
let float = 6.1;
// String
let color = 'blue';
// working with strings
let sentence = "Hello, my name is Max.";
let sentence1 = `Hello, my name is ${myName}.`;
let sentence2 = 'Hello, my name is ' + myName + ".";
// slice
var now = new Date().toISOString(); // yyyy-mm-ddThh:mm:ss.sssZ
var sliced = now.slice(1, 10); // String
// output: "2021-03-09"
// split
var arr = sentence.split(' '); // Array
// output: ["Hello,", "my", "name", "is", "Max."]
// Array
let ages = [1, 2, 3, 4, 5];
let ages1 = [1, 2, 3, 4, 5];
let ages2 = [0, 1, 2, 3, 4, 5, 'Max', true, null];
// working with arrays
let fruits = ['Apple', 'Orange', 'Banana'];
let first = fruits[0]; // Apple
let len = fruits.length; // 3
let last = fruits[len - 1]; // Banana
// push() - hinzufügen
fruits.push('Mango'); // ["Apple", "Orange", "Banana", "Mango"]
// pop() - letzten entfernen
fruits.pop(); // ["Apple", "Orange", "Banana"]
// unshift() - ersten hinzufügen
fruits.unshift('Mango'); // ["Mango", "Apple", "Orange", "Banana"]
// shift() - ersten entfernen
fruits.shift(); // ["Apple", "Orange", "Banana"]
// splice() - entfernen
fruits.splice(1, 2); // ["Apple"]
// slice()
let avaleble_fruits = fruits.slice(1, 2); // ["Orange", "Banana"]
// indexOf()
let index = fruits.indexOf('Banana'); // 2
let not_found = fruits.indexOf('Mango'); // -1
// merge
let fruits1 = ['Apple', 'Orange', 'Banana'];
let fruits2 = ['Mango', 'Pineapple', 'Peach'];
let all_fruits = [...fruits1, ...fruits2]; // ["Apple", "Orange", "Banana", "Mango", "Pineapple", "Peach"]
// Set
let set = new Set([1, 2, 3, 4, 5]);
// das Objekt
let person = {
    name: 'Max',
    age: 27
};
console.log(person.name); // Max
// Klassen
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log('Hi, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
    }
}
// das Objekt der Klasse
let max = new Person('Max', 27);
max.greet(); // Hi, my name is Max and I am 27 years old.
// Funktionen
// function <funktions_name>(<parameter>: <type>,...): <return_type> {}
function increaseAge() {
    max.age + 1;
}
function add(a, b) {
    return a + b;
}
function divide(a, b) {
    return (a / b);
}
// setter und getter
class OldPerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log('Hi, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
    }
    // setter
    setAge(age) {
        this.age = age;
    }
    // getter
    getAge() {
        return this.age;
    }
}
let tom = new OldPerson('Tom', 36);
tom.setAge(37);
console.log(tom.getAge()); // 38
// Vererbung
class ErbendePerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log('Hi, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
    }
    sayHello() {
        return 'Hello!';
    }
}
let moritz = new ErbendePerson('Moritz', 26);
moritz.age = 27;
console.log(moritz.age);
console.log(moritz.name); // ''
moritz.greet(); // Hi, my name is Moritz and I am 27 years old.
