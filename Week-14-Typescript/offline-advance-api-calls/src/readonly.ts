
// readonly used to make properties of an object or variable immutable i.e their values can't be changed

// type User = {
//     name : string
//     age : number
// }

// const user:User = {
//     name : "Chetan",
//     age : 24
// }

// user.name = "Abhishek" // Here it allows changing the value defined inside the constant
//  object bcz the reference is constant but not the innervalue

// type User = {
//     readonly name: string
//     readonly age: number
// }

// const user: User = {
//     name: "Chetan",
//     age: 24
// }

// user.name = "Abhishek" // Here it will complain



// Another way to make complete object readonly, keep in mind to use Capital 'R' in Readonly

type User = {
     name: string
     age: number
}

const user: Readonly<User> = {
    name: "Chetan",
    age: 24
}
