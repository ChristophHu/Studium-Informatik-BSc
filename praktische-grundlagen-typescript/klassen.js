"use strict";
exports.__esModule = true;
exports.Task = void 0;
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
exports.Task = Task;
var Person = /** @class */ (function () {
    function Person() {
        this.name = "";
    }
    return Person;
}());

const specTask = new Task("01.07.2021", "Specialtask", "")
console.log(specTask.getTitle())
