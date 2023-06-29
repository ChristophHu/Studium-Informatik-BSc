interface IShape {
    getArea(): number;
}
class Rectangle implements IShape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    getArea(): number {
        return this.width * this.height;
    }
}

let rect: Rectangle = new Rectangle(5, 2);
rect.getArea(); // 10

class Circle implements IShape {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }
    getArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

let circle: Circle = new Circle(5);
circle.getArea(); // 78.53981633974483

class sumAreaofAllShapes {
    private sumArea: number = 0;
    private shapes: IShape[] = []

    constructor(shapes: IShape[]) {
        this.shapes = shapes
    }

    getSumArea(): number {
        for (let shape of this.shapes) {
            this.sumArea = this.sumArea + shape.getArea()
        }
        return this.sumArea
    }
}

let sumArea: sumAreaofAllShapes = new sumAreaofAllShapes([new Rectangle(10, 2), new Circle(2)])
console.log(sumArea.getSumArea()) // 42.56637061435917

class Fahrzeug {
    raeder: number = 1
    constructor(raeder: number) {
        this.raeder = raeder
    }
    hupen() {
        console.log('Meeep Meeep')
    }
}

class Flugzeug implements IFlugzeug {
    constructor() {}
    fliegen() {
        console.log('Flugzeug fliegt')
    }
}
interface IFlugzeug {
    fliegen(): void
}

class Wasserfahrzeug implements IWasserfahrzeug {
    constructor() {}
    schwimmen() {
        console.log('Wasserfahrzeug schwimmt')
    }
}
interface IWasserfahrzeug {
    schwimmen(): void
}

let einRad: Fahrzeug = new Fahrzeug(1)
let fahrrad: Fahrzeug = new Fahrzeug(2)
let auto: Fahrzeug = new Fahrzeug(4)

class Auto extends Fahrzeug {
    constructor() {
        super(4)
    }
    hupen() {
        console.log('Huuuuuuuuuuup')
    }
}

let lightningMcQueen: Auto = new Auto()
lightningMcQueen.hupen() // Huuuuuuuuuuup

// Vererbung
class Amphibienfahrzeug extends Auto implements IWasserfahrzeug, IFlugzeug {
    constructor() {
        super()
    }
    fliegen() {
        console.log('Flugzeug fliegt')
    }
    schwimmen() {
        console.log('Wasserfahrzeug schwimmt')
    }
}

let amphibi: Amphibienfahrzeug = new Amphibienfahrzeug()
amphibi.hupen() // Huuuuuuuuuuup
amphibi.schwimmen() // Wasserfahrzeug schwimmt

