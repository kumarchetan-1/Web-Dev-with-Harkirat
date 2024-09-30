// Map, filter, find, reduce, arrow-functions

const nums = [1, 2, 4, 5, 6]

const b = nums.map((num)=> num*2) // returns new array with multiplying each element with 2
console.log(b)

const c = nums.filter((num)=>{
    return num%2 === 0
}) // returns all of the elements which are devided by 2 i.e even

console.log(c)

const foundNum = nums.find(num => num>3) // Find the first number greater than 3
console.log(foundNum) // returns undefined if found nothing