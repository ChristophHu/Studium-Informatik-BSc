"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
let rect = new Rectangle(5, 2);
rect.getArea(); // 10
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
let circle = new Circle(5);
circle.getArea(); // 78.53981633974483
class sumAreaofAllShapes {
    constructor(shapes) {
        this.sumArea = 0;
        this.shapes = [];
        this.shapes = shapes;
    }
    getSumArea() {
        for (let shape of this.shapes) {
            this.sumArea = this.sumArea + shape.getArea();
        }
        return this.sumArea;
    }
}
let sumArea = new sumAreaofAllShapes([new Rectangle(10, 2), new Circle(2)]);
console.log(sumArea.getSumArea()); // 42.56637061435917
class Fahrzeug {
    constructor(raeder) {
        this.raeder = 1;
        this.raeder = raeder;
    }
    hupen() {
        console.log('Meeep Meeep');
    }
}
class Flugzeug {
    constructor() { }
    fliegen() {
        console.log('Flugzeug fliegt');
    }
}
class Wasserfahrzeug {
    constructor() { }
    schwimmen() {
        console.log('Wasserfahrzeug schwimmt');
    }
}
let einRad = new Fahrzeug(1);
let fahrrad = new Fahrzeug(2);
let auto = new Fahrzeug(4);
class Auto extends Fahrzeug {
    constructor() {
        super(4);
    }
    hupen() {
        console.log('Huuuuuuuuuuup');
    }
}
let lightningMcQueen = new Auto();
lightningMcQueen.hupen(); // Huuuuuuuuuuup
class Amphibienfahrzeug extends Auto {
    constructor() {
        super();
    }
    fliegen() {
        console.log('Flugzeug fliegt');
    }
    schwimmen() {
        console.log('Wasserfahrzeug schwimmt');
    }
}
let amphibi = new Amphibienfahrzeug();
amphibi.hupen(); // Huuuuuuuuuuup
amphibi.schwimmen(); // Wasserfahrzeug schwimmt
