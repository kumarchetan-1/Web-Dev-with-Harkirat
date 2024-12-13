"use strict";
// // Interface, conditional use of a key in interface
// interface Address {
//     pin: number,
//     city?: string,
//     country: string,
//     houseNumber?: number
// }
// interface User {
//     name: string,
//     email: string,
//     age: number,
//     address?: Address
// }
// interface Office {
//     address: Address
// }
// const user = {
//     name: "Chetan",
//     email: "kumarchetan.npr@gmail.com",
//     age: 24,
//     address: {
//         pin: 246701,
//         country: "India" // If I would not have used the conditional defining of the data type in address then 
//         // we have to render the whole addresss including housenumber and city.
//     }
// }
// function isLegal(user: User) {
//     if (user.age > 18) {
//         return true
//     }
//     return false
// }
// const ans = isLegal(user)
// if (ans) {
//     console.log("You are legal");
// } else {
//     console.log("You are illegal");
// }
// // Interface using object literals
// interface People {
//     name: string,
//     age: number,
//     greet: () => string,
//     greet2?(): string
// }
// const person: People = {
//     name: "Chetan",
//     age: 24,
//     greet: ()=> "Hi"
// }
// const greeting = person.greet()
// console.log(greeting)
// Interface used in class based ojbects
// interface People {
//     name: string,
//     age: number,
// }
// class Manager implements People {
//     name: string;
//     age: number;
//     constructor(name: string, age: number){
//      this.name = name
//      this.age = age
//     }
// }
// let user = new Manager("Chetan", 24)
// console.log(user)
// Extends and implements are both different things and implements keyword only work in typescript
class Shape {
    constructor() {
    }
    area() {
        console.log("Hi I am area of this shape");
    }
}
class Rectangle extends Shape {
    constructor() {
        super();
        this.width = 1;
        this.height = 2;
    }
}
const rectangle1 = new Rectangle();
rectangle1.area();
