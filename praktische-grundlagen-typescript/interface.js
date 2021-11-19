var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var user = {
    name: 'Max',
    age: 33,
    greet: function () {
        return 'Hello';
    }
};
console.log(user.greet());
var Vogel = /** @class */ (function () {
    function Vogel() {
        this.gattung = '';
    }
    Vogel.prototype.fliegt = function () {
        return 'fliegt';
    };
    Vogel.prototype.setGattung = function (gattung) {
        this.gattung = gattung;
    };
    return Vogel;
}());
var Hund = /** @class */ (function () {
    function Hund(name) {
        this.name = name;
    }
    Hund.prototype.laeuft = function () {
        return 'laeuft';
    };
    Hund.prototype.schwimmt = function () {
        return 'schwimmt';
    };
    return Hund;
}());
var Ente = /** @class */ (function (_super) {
    __extends(Ente, _super);
    function Ente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ente.prototype.schwimmt = function () {
        return 'schwimmt';
    };
    Ente.prototype.taucht = function () {
        return 'taucht';
    };
    return Ente;
}(Vogel));
var ente1 = new Ente;
console.log(ente1.fliegt());
ente1.setGattung('Flugente');
console.log(ente1.gattung);
var bello = new Hund('ballo');
console.log(bello.name);
var Haustier = /** @class */ (function (_super) {
    __extends(Haustier, _super);
    function Haustier(name, halter) {
        var _this = _super.call(this, name) || this;
        _this.halter = halter;
        return _this;
    }
    return Haustier;
}(Hund));
var fifi = new Haustier('fifi', 'Herrmann');
console.log("Name: " + fifi.name + ", Halter " + fifi.halter);
console.log('Name ' + fifi.name + 'Halter ' + fifi.halter);
