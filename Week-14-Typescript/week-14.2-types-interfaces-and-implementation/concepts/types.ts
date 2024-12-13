
// difference b/w types and interfaces 
// types allow Unions and Intersections but interfaces doesn't
// interfaces allow implementation using implements types doesn't
// difference in defination in types we have 

// interface user {
//     name: string
//     email: string
// }


// Union => must have properties from both A and B
type Employee1 = {
    name: string;
    startDate: string;
  };
  
  type Manager1 = {
    name: string;
    department: string;
  };
  
  type TeamLead = Employee1 & Manager1;

  let employee: Employee1 = {
    name: "chetan",
    startDate: "12-12-2024"
}

  let manager: Manager1 = {
    name: "Chetan",
    department: "Computer Science"
}
  
  const teamLead: TeamLead = {
    name: "harkirat",
    startDate: "12-12-2024",
    department: "Software developer"
  };


//   Intersection ==> Must have properties from either A, B or Both.

type Admin = {
    name: string
    permissions: string
}

type User3 = {
    name: string
    age: number
}

type AdminOrUser = Admin | User3

function greet(user:AdminOrUser) {
    console.log(`Hello ${user.name}`)
}

interface user4{
    age: number | string // can use union or intersection inside interface an on interfaces but can't create interface using union and intersection.
}


type User5 = {
   firstName: string
   lastName: string
   age:number
}

function legalUsers(users:User5[]) {
  let legalUsrs =  users.filter((user)=> (user.age > 18))
  return legalUsrs
}

const fbUser:User5 = {
    firstName: "jgjg",
    lastName: "string",
    age: 33,
    asdf:"hkjh"
}