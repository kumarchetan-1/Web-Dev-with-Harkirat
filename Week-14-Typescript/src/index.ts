
function greet(name:string) {
    console.log(`Hello ${name}`)
}

greet("chetan")

// Sum of two functions

function sumOfTwoNums(a: number, b:number):number {
   let sum:number = a + b
   return sum
}

const ans = sumOfTwoNums(5, 6)
console.log(ans)

function isLegal(age:number) {
    if (age >18) {
        return true 
    }

    return false
}

console.log(isLegal(55))


function delayedCall(fn:()=>void) {
    
    setTimeout(fn, 1000)
}

delayedCall(()=> console.log('Hello there'))