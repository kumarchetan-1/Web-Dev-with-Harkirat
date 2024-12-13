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
type UpdatePropsOptional = Partial <UpdateProps > // it allows selecting any one of the propeties(optionally)


function updateProps(updateProps:UpdatePropsOptional) {
    // Hit the database to update the user properties
}