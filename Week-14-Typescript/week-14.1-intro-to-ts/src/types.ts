
// Types
// Union
type inputType = string | number

function sum(a:inputType, b: inputType) {
    // ts can sum string and number
    // ts can sum string and string
    // ts can sum number and number
    // ts can't sum (strin | number) + (string | number)

}


// Intersection

type Employee = {
    name: string,
    age: string 
}

type Manager = {
    name: string,
    department: string
}

type teamLead = Employee & Manager

function leader(emp:teamLead) {
    
}
