//console.log('Hello Typescript..');

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

class Animal {
    constructor(public name : string) {}

    makeSound() : string {
        return "Generic animal sound"
    }
}

class Dog extends Animal {
    makeSound(): string {
        return "Bow"
    }
}

const myAnimal : Animal = new Animal("Lion");
console.log(myAnimal.name);
console.log(myAnimal.makeSound())

const myDog : Dog = new Dog("Ronie");
console.log(myDog.name)
console.log(myDog.makeSound())

