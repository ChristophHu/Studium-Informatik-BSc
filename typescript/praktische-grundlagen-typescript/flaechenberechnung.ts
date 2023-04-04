interface Shape {
	
	areaCalculation(): number
}

//Klassen für Fläche
class Rectangle implements Shape{
    a: number
    b: number

    constructor(a: number, b: number){
        this.a = a
        this.b = b
    }

    areaCalculation(): number {
        return this.a * this.b
    }
}

class Square implements Shape{
    a: number

    constructor(a: number){
        this.a = a
    }

    areaCalculation(): number {
        return (this.a)**2
    }
}

class Circle implements Shape{
    radius: number

    constructor(radius: number){
        this.radius = radius
    }

    areaCalculation(): number {
        return Math.PI * (this.radius)**2
    }
}


class sumAreaOfAllShapes{
    sum: number = 0
    private shapes: Shape[]
    constructor(shapes: Shape[]) {
        this.shapes = shapes
    }

    sumArea(): number {
        for( const shape of this.shapes){
            this.sum =+ shape.areaCalculation()
        }
        return this.sum
    } 
}

const array: Shape[] = [new Rectangle(4, 5), new Square(5), new Circle(5)]
const sum = new sumAreaOfAllShapes(array)

console.log(sum.sumArea())