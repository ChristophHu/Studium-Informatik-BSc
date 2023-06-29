function alerter() { 
    alert('app')
}
// Kommentare
// Einzeiler
/*  Mehrzeiler  */

// Datentypen

// allgemein
// <art_der_zuweisung> <var-name>: <type>> = <wert>
let myName: string = 'Max'
var myAge: number = 27
const anything: any = 'Max'

// Boolean
let isDone: boolean = true

// Number
let decimal: number = 6
let float: number = 6.1

// String
let color: string = 'blue'

// working with strings
let sentence: string = "Hello, my name is Max."
let sentence1: string = `Hello, my name is ${myName}.`
let sentence2: string = 'Hello, my name is ' + myName + "."

// slice
var now = new Date().toISOString() // yyyy-mm-ddThh:mm:ss.sssZ
var sliced: string = now.slice(1, 10) // String
// output: "2021-03-09"

// split
var arr: string[] = sentence.split(' ') // Array
// output: ["Hello,", "my", "name", "is", "Max."]

// Array
let ages: number[] = [1, 2, 3, 4, 5]
let ages1: Array<number> = [1, 2, 3, 4, 5]
let ages2: any[] = [0, 1, 2, 3, 4, 5, 'Max', true, null]

// working with arrays
let fruits: string[] = ['Apple', 'Orange', 'Banana']
let first: string = fruits[0] // Apple
let len: number = fruits.length // 3
let last: string = fruits[len - 1] // Banana

// push() - hinzufügen
fruits.push('Mango') // ["Apple", "Orange", "Banana", "Mango"]

// pop() - letzten entfernen
fruits.pop() // ["Apple", "Orange", "Banana"]

// unshift() - ersten hinzufügen
fruits.unshift('Mango') // ["Mango", "Apple", "Orange", "Banana"]

// shift() - ersten entfernen
fruits.shift() // ["Apple", "Orange", "Banana"]

// splice() - entfernen
fruits.splice(1, 2) // ["Apple"]

// slice()
let avaleble_fruits: string[] = fruits.slice(1, 2) // ["Orange", "Banana"]

// indexOf()
let index: number = fruits.indexOf('Banana') // 2
let not_found: number = fruits.indexOf('Mango') // -1

// merge
let fruits1: string[] = ['Apple', 'Orange', 'Banana']
let fruits2: string[] = ['Mango', 'Pineapple', 'Peach']
let all_fruits: string[] = [...fruits1, ...fruits2] // ["Apple", "Orange", "Banana", "Mango", "Pineapple", "Peach"]

// Set
let set: Set<number> = new Set([1, 2, 3, 4, 5])

// Object
// das Inteface
interface IPerson {
    name: string
    age: number
}
// das Objekt
let person: IPerson = {
    name: 'Max',
    age: 27
}
console.log(person.name) // Max

// Klassen
class Person {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log('Hi, my name is ' + this.name + ' and I am ' + this.age + ' years old.')
    }
}
// das Objekt der Klasse
let max: Person = new Person('Max', 27)
max.greet() // Hi, my name is Max and I am 27 years old.

// Funktionen
// function <funktions_name>(<parameter>: <type>,...): <return_type> {}
function increaseAge() {
    max.age + 1
}
function add(a: number, b: number): number {
    return a + b
}
function divide(a: number, b: number): number {
    return (a / b)
}

// setter und getter
class OldPerson {
    private name: string
    private age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log('Hi, my name is ' + this.name + ' and I am ' + this.age + ' years old.')
    }

    // setter
    setAge(age: number) {
        this.age = age
    }
    // getter
    getAge() {
        return this.age
    }

}
let tom: OldPerson = new OldPerson('Tom', 36)
tom.setAge(37)
console.log(tom.getAge()) // 38

// Vererbung
class ErbendePerson implements IPerson {
    name: string // gem. IPerson
    age: number // gem. IPerson

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log('Hi, my name is ' + this.name + ' and I am ' + this.age + ' years old.')
    }

    sayHello(): string {
        return 'Hello!'
    }
}

let moritz: ErbendePerson = new ErbendePerson('Moritz', 26)
moritz.age = 27
console.log(moritz.age)
console.log(moritz.name) // ''
moritz.greet() // Hi, my name is Moritz and I am 27 years old.
