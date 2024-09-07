// Promise in js is an object that represents the eventual-completion(or failure) of an asynchronous operation and its resulting value.

// Promises are used in js to do async tasks more efficiently than callback function, provides more cleaner and readable way to code.

// Ex - timers, fileread, network requests(API calls)

// function setTimeoutPromisified(ms){
//     let promise = new Promise(resolve=> setTimeout(resolve, ms))
//     return promise
// }

// function callback() {
//     console.log("3 sec have passed! ");
// }


function random(resolve){
setTimeout(resolve, 3000)
}

function callback(){
console.log("Promise succeed");
}

let p = new Promise(random)
// console.log(p)
p.then(callback)


