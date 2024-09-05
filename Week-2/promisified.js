// const { resolve } = require("path")

function wait(td){
    return new Promise((resolve)=>{
        setTimeout(resolve, td)
    })
}

(async()=>{
    console.log("Waiting..");
    await wait(3000);
    console.log("Two seconds later");
    
})()


// Promisification of fetch

(async()=>{
    try {
        const response =  await fetch('https://randomuser.me/api/')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("Error:", error);
        
    }
})()

// promisification of setTimeout

function delay(ms){
    return new Promise((resolve, reject)=>{
        setTimeout(resolve, ms)
    })
}

(async()=>{
    try {
        console.log("Waiting");
        await delay(2000)
        console.log("Data is printed after delay")
    } catch (error) {
        console.log(error)
    }
})();

// Promisification of fs.readfile

const fs = require("fs");


function fileReadAsync(fileName) {
    return new Promise((resolve, reject)=>{
      fs.readFile(fileName, "utf-8", (error, data)=>{
         if(error){
            reject(error)
         }else{
            resolve(data)
         }
      })
    })
}

(async()=>{
    try {
        const content = await fileReadAsync("/Users/iosys/Desktop/Web dev with Harkirat/Week-2/chapter1.txt")
        console.log(content)
    } catch (error) {
        console.log("Error reading file", error)
    }
})()