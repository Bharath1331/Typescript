//console.log('Hello Typescript..');
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
// function add(a: number, b:number) : void {
//     console.log(a+b);
// }
// add(4,5);
/* interface */
// interface Person {
//     name : string;
//     age : number;
// }
// function greet(person:Person): string {
//     return `Hello, ${person.name}!`;
// }
// const myPerson : Person = {
//     name : "Bharath",
//     age : 20
// }
// const greetingMessage: string = greet(myPerson);
// console.log("Greeting message : "+greetingMessage)
/* Enum */
// enum Color {
//     Red,Yellow,White,Blue // here assign value start from 0 for each color
// }
// let myColor : Color = Color.White;
// console.log(myColor)
/* Inheritance */
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        return "Generic animal sound";
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        return "Bow";
    };
    return Dog;
}(Animal));
var myAnimal = new Animal("Lion");
console.log(myAnimal.name);
console.log(myAnimal.makeSound());
var myDog = new Dog("Ronie");
console.log(myDog.name);
console.log(myDog.makeSound());
