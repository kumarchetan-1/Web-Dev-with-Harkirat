// Map, filter, find, reduce, arrow-functions

const nums = [1, 2, 4, 5, 6]

const b = nums.map((num)=> num*2) // returns new array with multiplying each element with 2
console.log(b)

const c = nums.filter((num)=>{
    return num%2 === 0
}) // returns all of the elements which are devided by 2 i.e even

console.log(c)

const fruits = ["Apple", "Banana", "Orange", "Pineapple"]
const wordCouts = fruits.reduce((accumulator, currentValue)=> accumulator + currentValue, 0)
const fruitsCount = fruits.reduce((acc, currVal)=> {
    acc[currVal] = (acc[currVal] || 0) + 1
    return acc;
}, {})

console.log(`wordCouts : ${wordCouts}`)
console.log(`fruitsCount : ${JSON.stringify(fruitsCount)}`)


const foundNum = nums.find(num => num>3) // Find the first number greater than 3
console.log(foundNum) // returns undefined if found nothing