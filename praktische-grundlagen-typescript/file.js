var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var person = /** @class */ (function () {
    function person() {
        this.name = "";
        this.age = 0;
    }
    return person;
}());
var chris = { name: "chris", age: 34 };
var oskar = { name: "oskar", age: 22 };
var persons = [];
var p2 = [];
persons.push(chris);
p2.push(oskar);
// merge
var newArray = __spreadArray(__spreadArray([], persons), p2);
console.log(persons);
function firstLetterUppercase(persons) {
    persons.map(function (person) {
        person.name = person.name.charAt(0).toUpperCase() + person.name.slice(1);
    });
    console.log(persons);
}
firstLetterUppercase(newArray);
var Task = /** @class */ (function () {
    function Task(deadline, title, db) {
        this.deadline = deadline;
        this.title = title;
        this.db = db;
    }
    //Funktionen
    Task.prototype.getTitle = function () {
        return this.title;
    };
    Task.prototype.save = function () {
    };
    return Task;
}());
var specTask = new Task("01.07.2021", "Specialtask", "");
console.log(specTask.getTitle());
