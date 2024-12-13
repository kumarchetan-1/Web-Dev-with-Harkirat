export {};

interface User {
    name: string
    age: number
    id: string
    email: string
    password: string
}


// It can pick data from interfaces and types 
type UpdateProps = Pick<User, 'name'| 'age' | 'password' >

function updateProps(updateProps:UpdateProps) {
    // Hit the database to update the user properties
}