//Klassen für Fläche
var Rectangle = /** @class */ (function () {
    function Rectangle(a, b) {
        this.a = a;
        this.b = b;
    }
    Rectangle.prototype.areaCalculation = function () {
        return this.a * this.b;
    };
    return Rectangle;
}());
var Square = /** @class */ (function () {
    function Square(a) {
        this.a = a;
    }
    Square.prototype.areaCalculation = function () {
        return Math.pow((this.a), 2);
    };
    return Square;
}());
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.areaCalculation = function () {
        return Math.PI * Math.pow((this.radius), 2);
    };
    return Circle;
}());
var sumAreaOfAllShapes = /** @class */ (function () {
    function sumAreaOfAllShapes(shapes) {
        this.sum = 0;
        this.shapes = shapes;
    }
    sumAreaOfAllShapes.prototype.sumArea = function () {
        for (var _i = 0, _a = this.shapes; _i < _a.length; _i++) {
            var shape = _a[_i];
            this.sum = +shape.areaCalculation();
        }
        return this.sum;
    };
    return sumAreaOfAllShapes;
}());
var array = [new Rectangle(4, 5), new Square(5), new Circle(5)];
var sum = new sumAreaOfAllShapes(array);
console.log(sum.sumArea());
