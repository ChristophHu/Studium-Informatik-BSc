# `Typescript`

[TOC]

## Vorbereitung

### Installation

#### NPM

Um Typescript nutzen zu können muss `npm` installiert werden. Bei der Installation von NodeJS ist npm enthalten. NodeJS kann unter der folgenden Seite heruntergeladen werden: [Node.js](https://nodejs.org/de/). Nach der Installation können die folgenden Kommandos genutzt werden um die installierte Version angezeigt zu bekommen:

> `node -v` - Version von NodeJS
>
> `nvm -v` - Version des Node Version Manager
>
> `npm -v` - Version des Node Package Manager

#### Typescript

> `npm install typescript --save-dev`

Sind diese relevanten Teile installiert, kann mit Typescript gearbeitet werden.



### Transpile Typescript to Javascript
> `tsc file.ts`

### Transpile in Watch Mode
> `tsc file.ts --watch`

### Kompilieren des Projektordners
> `tsc --init` - initialisiert ein Typescript-Projekt

Damit wird die Datei `tsconfig.json` erstellt.

> `tsc` oder `tsc --watch` - Projekt kompilieren

### tsconfig.json
#### Exclude
Sollen einzelne Dateien oder Ordner von der Kompilierung ausgeschlossen werden, so werden sie in der `tsconfig.json`-Datei unter `"exclude"` geführt:
```json
[...],
"exclude": [
	"node_modules", // exclude node_modules from compiling
	"**/*.dev.ts"   // exclude aller '.dev.ts'-Dateien
]
```



## 2. Grundlagen

### 2.1. Datentypen
#### Number
```ts
num: number
num = 5 // or 5.0
```

#### String
```ts
str: string
str = 'String'
```

##### Work with Strings

###### toLowerCase()

###### toUpperCase()

###### startsWith()

###### endsWith()

###### includes()

###### splice()

###### charAt()

```typescript
person.name = person.name.charAt(0).toUpperCase() + person.name.slice(1)
// der erste Buchstabe eines Namens wird mit charAt(0).toUpperCase() großgeschrieben
```



###### slice()

```typescript
person.name = person.name.charAt(0).toUpperCase() + person.name.slice(1)
// der restliche Teil des Namens ohne den ersten Buchstaben wird anghängt
```



###### split()

###### replace()

###### repeat()



#### Boolean

```ts
boo: boolean
boo = True // or False
```

#### Objects

```ts
const person = {
	name = 'chris'
	age = 34
}
console.log(person.name)
```


##### Working with Objects

###### Destructing

```typescript
const { name, age } = person
console.log('My name is ${name} and i\'m ${age}.') // My name is chris and i'm 34
```



---

### 2.2. Weitere Datentypen

#### Never
```ts
newBoolean: 'TrUe' | 'FaLsE'
```

#### Union
```typescript
function combine(input1: number | string, input2: number | string) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return result
}
console.log(combine(1,2))
console.log(combine('Anna', 'Max'))
```

#### Vereinigungsmenge
Ein Objekt kann in Typescript auch als Vereinigung zweier Typen durch den &-Operator typisiert werden.
```ts
const personWithTopics: Person & Topic = {
	name = 'Max'
	topics: ['ts','react','cs']
}
```

#### Aliases
```ts
// combination is of type number or string
type combination = number | string

// function will return a string
function combine(input: combination): string {
	if (typeof input === 'number') {
		return input.toString()
	} else {
		return input
	}
}
```

#### Unknown
```ts
let userInput: unknown
userInput = 5
userInput = 'Max' // will work

let userName: string
userName = userInput // Error of Type
```
Der Datentype 'unknown' ist die bessere Wahl vor 'any'.

#### Any
Der `any`-Type deaktiviert alle Typenüberprüfungen von Typescript.
```ts
let userInput: any
let userName: string
userName = userInput // no error of Type
```

#### Void

Void steht für keinen Datentyp. Funktionen und Methoden, die mit `void` versehen sind, geben nichts zurück.

#### Undefined && Null

```typescript
value = value ?? 'defalut'
// dont:
if(value === undefined && value === null) {
    value = 'default'
}
```



---

### 2.3. Datenfelder

#### Set

Ein Set unterscheidet sich zum Array dadurch, dass alle Elemente nur ein einziges Mal vorkommen.

```typescript
const hobbies = ['programming', 'developing', 'programming']
const hobbiesWithSet = new Set(hobbies)
console.log(hobbiesWithSet) // ['developing', 'programming']

const cleanHobbies = [...hobbiesWithSet]
console.log(cleanHobbies) // ['developing', 'programming']
```



#### Arrays

```ts
ages: numbers[] = [33,34,35]
hobbies: string[] = ['a','b','c']
newHobbies: string[] = ['d']

// Push and Pop
hobbies.pop()

```

##### Work with Arrays

###### Push()

```typescript
newHobbies.push('e')
// ['d', 'e']
```

###### Pop()

```typescript
newHobbies.pop()
// ['d']
```

###### Shift()
```typescript
const arr = [1, 2, 3];
const x = arr.shift();
// output [2, 3]
```

###### Unshift()
```typescript
const arr = [2, 3];
const x = arr.unshift(1);
// output [1, 2, 3]
```

###### Slice()

```typescript
hobbies.slice(1,2)
// ['b']
```

###### Splice()

```typescript
hobbies.push('f')
// ['b', 'c', 'f']

hobbies.splice(1,1)
// ['b', 'f']
```

###### Map()

```typescript
ages.map(x => x * 2)
// [66, 68, 70]
```

###### Reduce()

```typescript
ages.push(68) // [66, 68, 70, 68]
const resultAges = ages.reduce((tempArray, item) => {
    if(!tempArray.includes(item)) {
        tempArray.push(item)
    }
    return tempArray
})
console.log(resultAges) // [66, 68, 70]
```

Ähnlich dem `map()` wird durch `reduce()` auf jedes Element eines Arrays eine Funktion angewandt.

###### ToString()

```typescript
hobbies.toString();
// 'a,b,c'
```

###### Fill()

```typescript
var mArray = new Array(10).fill('A')
// ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A']
```

###### Merge

```typescript
var allHobbies = [...hobbies, ...newHobbies]
// ['a', 'b', 'c', 'd']

// alternativ: hobbies = hobbies.concat(newHobbies)
// alternativ: hobbies = hobbies.push(...newHobbies)
```

###### Includes()

```typescript
if (!allHobbies.includes('a'))
    allHobbies.push('a')
```

###### Some()
Anders als `includes()` prüft `some()`mithilfe eines Callbacks. Nur ein Element muss die Bedingung erfüllen.
```typescript
const array = [10, 30, 50, 10, 5];
const greaterThan10 = (element) => element > 10;
console.log(array.some(greaterThan10));
// outputs true
```

###### Every()
Die `every()`-Funktion kann als Gegenstück zu `some()` gesehen werden. Der Aufbau mit dem Callback ist der gleich. Alle Elemente müssen die Bedingungen erfüllen.
```typescript
const array = [10, 30, 50, 10, 5];
const greaterThan10 = (element) => element > 10;
console.log(array.every(greaterThan10));
// outputs false
```

###### Filter()

```typescript
export const selectDataByPatrol = (id_streife: string) => createSelector(
    selectAllData,
    data => data.filter(el => el.id_streife == id_streife)
)
```

###### Find()

Die Funktion prüft das Vorhandensein eines Elementes. Der erste Treffer wird daraufhin zurückgegeben.
```typescript
const array = [10, 30, 50, 10, 5];
const greaterThan10 = (element) => element > 10;
console.log(array.find(greaterThan10));
// outputs 30
```

###### Überschneidungen zweier Arrays

```typescript
var setA = [1,2,3]
var setB = [3,4,5]
var overlap = [...new Set(setA)].filter((x) => setB.includes(x))
// [3]
```

###### foreach()

```typescript
ages: numbers[] = [33,34,35]
ages.forEach((item) => {
    console.log(item * 2) // [66, 68, 70]
})
```

###### flat()
```typescript
const x = [1, 2, [3, [4 , 5 , 6]]];
x.flat(2);
// equivalent: x.reduce((acc, val) => Array.isArray(val) ? acc.concat(...val) : acc.concat(val), []).filter((item) => !!item);
// result [1, 2, 3, 4, 5, 6]
```

###### flatMap()
FlatMax kombiniert die Funktionen `flat()` und `map()`.
```typescript
const x = [1, 3, 5, 7];
x.flatMap(x => [x, x + 1]);
// equivalent: x.map(x => [x, x + 1]).flat();
// equivalent: x.reduce((acc, val) => acc.concat([val, val + 1]), []);
// result: [1, 2, 3, 4, 5, 6, 7, 8]
```

#### Tuples

```ts
const role: [number, string] = [1, 'user']

role.push('admin')
role[0] = 2
```

#### Enums

```ts
const Role {Admin, User}
role: Role.Admin
```

------



### 2.4. Funktionen

```ts
function func(): void {
    console.log('func')
}
```

#### Parameter
```ts
function paramFunc(param: number): void {
    console.log(param)
}
```

#### Rückgabewert
```ts
function returnFunc(param: number): number {
    return param
}
```

#### Arrow-Functions
```ts
const add = (a: number, b: number) => {
	return a + b
}

// short alternative
const sub = (a: number, b: number) => a - b

// shorter alternative
button.addEventListener('click', event => console.log(event))
```

#### Callbacks
```ts
function callbackFunc(callback: (num: number) => void): void {
    caons result = num
    callback(result)
}

callbackFunc((result) => {console.log(result)})
```

#### Default-Parameter
```ts
function divide(a: number = 1, b: number = 1): number {
	return a/b
}
```

#### Rest-Parameters
Der Spread-Operator kann auch bei der Übergabe von Parametern angewandt werden. So kann die Funktion `add()` nicht weiter nur zwei Parameter aufnehmen, um diese zu addieren, sondern eine endliche Menge von bspw. Zahlen:
```ts
Const add = (...numbers: number[]) => {
	return numbers.reduce((curentResult, curentValue) => {
		return curentResult + curentValue
	})
}

Console.log(add(1,1,2,3,5,8)) // Output: 20
```

In der Folge werden alle als Parameter hinterlegten Zahlen addiert.



---

### 2.5. Operatoren

##### Spread-Operator
Soll eine begrenzte aber unbekannte Menge von Werten gleichen Typs behandelt werden, so wird der Spread-Operator genutzt.

```ts
hobbys: string[] = ['a','b','c']
newHobbys: string[] = ['d', 'e']
hobbys.push(...newHobbys)
```

Die `push()`-Funktion pusht nun alle Werte von newHobbys zu Hobbys.

---



### 2.6. Kontrollstrukturen (Programmschleifen)

#### For-Schleife
```ts
for (const hobby of person.hobies) {
    console.log(hobby.toUpperCase())
} // dont do: for (let i = 0; i < hobies.length; i++)
```



#### Switch-Case

```typescript
switch(expression) { 
   case constant-expression1: { 
      //statements; 
      break; 
   } 
   default: { 
      //statements; 
      break; 
   } 
}
```



------

### 2.7. Klassen

#### Klassendefinition
```ts
class Department {
	property: string
	constructor(name: string) {
		this.property = name
	}
	
	methode() {
		console.log('Department: ' + this.property)
	}
}
const accounting = New Department('Accounting')
console.log(accounting)
accounting.methode()
```

##### Shorthand initialization
Bei der Shorthand initialization werden Properties im Konstruktor deklariert.

```ts
// property: string
constructor(private property: string) {}
```

##### Readonly Properties
```ts
constructor(private readonly id: number) {}
```

#### Zugriffskontrolle
Properties oder Methoden können in Klassen als 'private', 'public', 'protected' oder 'static' deklariert werden.

##### Private und Public
```ts
class Protected {
	private property: string = 'default'
	public setProperty(newProperty: string) {
		this.property = newProperty
	}
	public getProperty(): string {
		return this.property
	}
}
Const p = new Protected()
p.setProperty('new')
console.log(p.getProperty())
```

##### Protected
Soll auf eine private Property einer vererbten Klasse aus einer Sub-Klasse zugegriffen werden, so ist dies nicht möglich. Die Property muss dann als `protected` deklariert werden.
Ein Zugriff von außerhalb wird weiter nicht gestattet, doch kann die Klasse selbst als auch die Sub-Klasse die Property bearbeiten.

##### Static
Als 'static' deklarierte Properties und Methoden existieren in der Klasse, nicht im instanziierten Objekt. Ein Zugriff auf diese erfolgt innerhalb als auch außerhalb der Klasse durch den Klassennamen, da der Konstruktion selbst zum Objekt gehört

```ts
Class Department {
	static counter
	constructor() {
		Department.counter += 1
	}
}
```

#### Extends
```ts
class ITDepartment extends Department {
	admins: string[]
	constructor(id: string, admins: string[]) {
		super(id) // use constructor of class Department
		this.admins = admins
	}
}
Const it = new ITDepartment('it1', ['Max'])
```

#### Getter und Setter
```ts
private lastReport: string
get getLastReport() { return this.lastReport }
set setLastReport(value: string) { this.lastReport = value }

class.setLastReport = 'Test'
const lastR = class.getLastReport
```

---

### 2.8. Interface

#### Interface ohne Klassen
Mit Interfaces können einfach Objekte erstellt werden, ohne zuvor eine Klasse deklariert zu haben.

```ts
interface Person {
	name: string
	age: number
	
	greet(): void
}

const user: Person
user = {
	name: 'Max',
	age: 33,
	greet() {
		console.log('Hello')
	}
} 
```

#### Interface mit Klassen
```ts
interface Greetable {
	name: string
	greet(): void
}

class Person implements Greetable {
	name: string
	age: number
	constructor(name: string, age: number) {
		this.name = name
		this.age = age
	}
	
	greet() {
		console.log('Hello ' + this.name)
	}
}

Const user = new Person('Max', 33)
User.greet()
```
---

#### Interface as Function - Type
Neben dem Standard einer Klasse/eines Objektes, kann ein Interface auch ein Standard für eine Funktion darstellen.

```ts
interface AddFn (
	(a: number, b: number): number
)

let add: AddFn

add = (n1: number, n2: number) => { return n1 + n2 }
```

#### Optional Parameter und Properties
``` 
outputName?: string
```

<hr>



### 2.4. Generics

#### Gererics Klassen

Durch Generics lassen sich Typen allgemeiner und dennoch spezifisch definieren. Hier soll ein Stack mittels Generics erstellt werden. Dazu muss einfach eine einfache Klasse um ein Array als Wrapper definiert werden.

##### Einfacher Stack

```typescript
class Stack {
    private items: any[]
    
    public constructor() {
        this.items = []
    }
    
    public push(value: any): void {
        this.items.unshift(value)
    }
    public isEmpty(): boolean {
        return this.items.length === 0
    }
    public top(): any {
        return this.items[0]
    }
    public pop(): any {
        return this.items.shift()
    }
}
```

<p style="color: red">Der einfache Stack ist jedoch nicht typensicher (siehe auch die ständige Verwendung von `any`). Es soll jedoch ein Stack für einen vordefinierten Typ erstellt werden.</p>

##### Typensicherer Stack

###### Generischer Stack

```typescript
class Stack<T> {
    private items: T[]
    
    public constructor() {
        this.items = []
    }
    
    public push(value: T): void {
        this.items.unshift(value)
    }
    public isEmpty(): boolean {
        return this.items.length === 0
    }
    public top(): T {
        return this.items[0]
    }
    public pop(): T {
        return this.items.shift()
    }
}
```

Soweit wurden alle Typendefinitionen `any` durch `T` ersetzt. `T` fungiert hier als Platzhalter. Es kann jeder mögliche Typ genutzt werden.

###### Aufruf des Stack

```typescript
const stringStack = new Stack<any>()	// der einfache Stack mit 'any'
const numberStack = new Stack<number>()	// der generische Stack mit 'number'
const stringStack = new Stack<string>()

const personStack = new Stack<person>()	// ein generischer Stack mit 'person'

const personStack = new Stack<string | number>()	// ein generischer Stack mit 'string' oder 'number' (Union)
```

#### Generics Interface

Neben Klassen können auch Interfaces mit Generics arbeiten.

```typescript
interface Stack<T> {
    push(value: T): void
    isEmpty(): boolean
    top(): T
    pop(): T
}
```

#### Generics Funktionen

```typescript
const identitym = function<T>(value: T): T {
    return value
}

const x = identity<number>(23)	// x = 23
```

Die vorliegende Funktion erhält als Parameter einen Wert vom Typ `T` und wird einen Wert vom Typ `T` zurückgeben. Da keine weitere Logik existiert, wird der Wert direkt zurückgegeben.

#### Vorgefertigte Funktionen

In Typescript existieren bereits vorgefertigte Funktionen.

```typescript
interface Person {
    firstName: string
    lastName: string
    age: number
}

const person: Partial<Person> = {
    firstName: 'Jane'
    lastName: 'Doe'
}
```

Die `Partial<T>`-Funktion versieht alle Attribute eines Interface als optional. Es kann also auf die Angabe des `age` verzichtet werden.

<hr>



### 2.9. Zusammenfassung von Datentypen, Types, Klassen, Interfaces und Objekten

```ts
// Type
type Combinable = string | number
type Numeric = numeric | boolean
type Universal = Combinable & Numeric // combination of types

type Admin = {	// type as object
	name: string
	priviledges: string[]
}

// Interface
interface Ticket {
  showTicketId(): number 
}
interface Task {
	title: string
	description: string
	taskDate: Date
}
interface ErrorTask extends Ticket, Task {}

// Class
class AlertTask implements ErrorTask {
	errorCode: number
	constructor(private id: number, title: string, description: string, taskDate: Date, errorCode: number) {
		this.errorCode = errorCode
	}
	showTaskId() {
		return id
	}
}

// Object
const T1 = new AlertTask(123, 'alert', 'throw error', '2020-07-07'. 123)
T1.showTaskId()
```

#### TypeGuards

Als TypeGuard wird eine Kontrollstruktur bezeichnet, die sicherstellt, dass die möglichen Typen der Ausgabe entsprechen.

##### Typeof

`typeof` kontrolliert den Type einer Variable.

```ts
type combine = string | number
function add(n1: combine, n2: combine) {
  if (typeof n1 === 'string' && typeof n2 === 'string') {
    return n1.toString() + n2.toString()
  }
  return n1 + n2
}
```

##### In

Durch `in` wird das Vorhandensein einer Property oder Methode in einem Type oder Object kontrolliert.
```ts
type Admin = {	// type as object
	name: string
	priviledges: string[]
}

let chris: Admin

function checkPriviledges() {
	if ('priviledges' in chris) {}
}
```

##### Typecasting

Typecasts werden genutzt um Typescript zu versichern, um welchen Type es sich handeln muss.

```ts
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!
const userInputElement = document.getElementById('user-input')! as HTMLInputElement

// (userInputElement as HTMLInputElement).value = 'Hi there!'
userInputElement.value = 'Hi there!'
```

---

### Features

Folgende [Features](https://kangax.github.io/compat-table/es6/) werden durch die angezeigten Browser unterstützt.

#### Const

```ts
const userName = 'Max'
userName = 'Maxi' // will return an Error
```

#### Let

### Promises

```ts
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is done!')
  }, 2000)
})

promise.then(data => {
  data.split(' ') // use of string-things
})
```

---

&nbsp;

## Decorators

Zur Durchführen dieses Abschnitts, muss in der `tsconfig.json` folgende Einstellung vorhanden sein:

```json
"compilerOptions": {
  "target": "es6",
 	"experimentalDecorators": true
 }
```

### Class Decorator

Ein Klassen-Dekorator wird ausgeführt, wenn die Klasse durch TS erkannt also instanziiert wird. Die Decorator-Funktion wird also nicht explizit in einer Funktion ausgeführt.

Dekaratoren werden bestimmte Parameter übergeben, abhängig von ihrer Verwendung.

```ts
function Logger(constructor: Function) {
  console.log('Logging...')
  console.log(constructor)
}

@Logger
class Person {
  name = 'Max'
  constructor() {
    console.log('Create Person...')
  }
}

const pers = new Person()
```

### Decorator-Factories (constructor)

Decorator-Factories bieten mehr Funktionalität. So wird durch diese eine Funktion zurückgegeben. Dem Decorator können so auch Parameter übergeben werden.

```ts
function LoggerDecorator(logString: string) {
  return function(constructor: Function) {
  	console.log('Logging...')
	  console.log(constructor) 
  }
}

@LoggerDecorator('Logging Person...')
[...]
```

### Bsp. Template Decorator (constructor)

```html
<div id="app"></div>
```

```ts
function TemplateDecorator(template: string, hookId: string) {
  return function(constructor: Function) {
  	const hookEl = document.getElementById(hookId)
    if (hookEl) {
      hookEl.innerHTML = template
    }
  }
}

@TemplateDecorator('<p>A New Paragraph!</p>', 'app')
```

Ähnlich dem `@Component({})`-Decorator in Angular wird bei dem vorliegenden Dekorator im `document` die `id="app"` gesucht und in den Tag ein neuer Paragraph hinzugefügt.

### Multiple Decorator

Werden mehrere Class-Decorator vor der Klasse notiert, dann werden sie zwar in der Reihenfolge nacheinander ausgeführt, doch die Deckorator-Funktion die `return`-ed wird werden von der Klasse bottom-up ausgeführt.

### Property-, Accessor-, Methode- und Parameter-Decorator

Decorator sind immer abhängig vom Standort ihres Einsatz. Ein Property-Decorator befindet sich vor einer Eigenschaft. Damit werden die Parameter `target` und `propertyName` relevant. Das `target` stellt sich in der Konsole als `Product` heraus.

Neben Klassen und Eigenschaften kann ein Decorator auch in den Accessor und Parametern genutzt werden:

```ts
function PropertyLog(target: any, propertyName: string) {
  console.log('Property-Decorator')
  console.log(target, propertyName)
}
function AccessorLog(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator!')
  console.log(target, name, descriptor)
}
function MethodeLog(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Methode decorator!')
  console.log(target, name, descriptor)
}
function ParameterLog(target: any, name: string, position: number) {
  console.log('Parameter decorator!')
  console.log(target, name, position)
}

class Product {
  @PropertyLog
  title: string
  private _price: number
  
  @AccessorLog
  set price(value: number) {
    this._price = value
  }
  
  constructor(price: number, title: string) {
    this.title = title
    this._price = price
  }
  
  @MethodeLog
  getPriceWithTax(@ParameterLog tax: number) {
    return this._price + (this._price / 100 * tax)
  }
}
```



### Class in einem Decorator

---

&nbsp;

## Error

### Try-Catch

### Throw

