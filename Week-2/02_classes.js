// class Rectangle{
//     constructor(width, height, color){
//         this.width = width
//         this.height = height
//         this.color =  color

//     }

//      area() {
//         return this.width * this.height
//     }
     
//     printArea(){
//         console.log("Painting with color ", this.color);
        
//     }
// }

// const rect = new Rectangle(2, 4, "Red")
// console.log(rect)
// console.log(rect.area())
// rect.printArea()

// Inheritance
class Shape {
    constructor(color) {
        this.color = color;
    }

    paint() {
			console.log(`Painting with color ${this.color}`);
    }

    area() {
        throw new Error('The area method must be implemented in the subclass');
    }

    getDescription() {
        return `A shape with color ${this.color}`;
    }
}

class Rectangle extends Shape{
    constructor(width, height, color){
        super(color)
        this.width= width
        this.height = height
    }
    area(){
        return this.height*this.width;
    }
    getDescription(){
        console.log(`A rectangle with width ${this.width}, height ${this.height}, and color ${this.color}`)
    }
}

class Circle extends Shape{
    constructor(radius, color){
        super(color)
        this.radius = radius
    }
    area(){
        const areaOfCircle = Math.PI*this.radius*this.radius;
        return areaOfCircle
    }
    getDescription() {
        return `A circle with radius ${this.radius} and color ${this.color}`;
    }
}


const circle = new Circle(20);
console.log(circle.area());


// Inbuilt JS classes

const now = new Date()
console.log(now.getDay())

// Map class

const map = new Map()
map.set("name", "Chetan")
map.set("age", 24)
console.log(map.get("name"))