


const fs =  require("fs")


// function cleanFile(file){
//  return new Promise((resolve, rejects)=>{
//     if (file) {
//         resolve(file)
//     }else{
//         rejects("File name is not provided")
//     }
//  })
// }


// function fileClean(fileName){
//     fs.readFile(fileName, "utf-8", function(error, data){
//         if (!error) {
//           const cleanedData = data.trim()
//         //   console.log(cleanedData)
//           fs.writeFile(fileName, cleanedData, (err)=>{
//             if(!err){
//                 console.log("File cleaned successfully")
//             } else{
//                 console.log("Error is cleaning the file", err);
//             }
//           })
//         }else{
//            console.log("Error in filereading: ", error)
//         }
//    })
// }

// const newPromise = new cleanFile('./chapter1.txt')
// newPromise.then(fileClean)


// Alternate way of writing this code

// function readFileTxt(file){
//     return new Promise((resolve, rejects)=>{
//         fs.readFile(file, "utf-8", function(error, data){
//             if (!error) {
//               resolve({fileName: file, fileData: data})
//             }else{
//                rejects("Error in filereading: ", error)
//             }
//        })
//     })
//    }
   
   
//    function cleanFile({fileName, fileData}){
//     const cleanedData = fileData.trim()
//     console.log(fileData)
//     fs.writeFile(fileName, cleanedData, (err)=>{
//       if(!err){
//           console.log("File cleaned successfully")
//       } else{
//           console.log("Error is cleaning the file", err);
//       }
//     })
//    }
   
//    const newPromise =  readFileTxt('Week-2/chapter1.txt')
//    newPromise.then(cleanFile)


//    Writing our own promise class

// class Promise2{
//     constructor(fn){
//         let afterDone = ()=>{
//             this.resolve()
//         }
//         fn(afterDone)
//     }
//     then(callback){
//         this.resolve = callback
//     }
// }

// function readTheFile(resolve){
// setTimeout(function(){
//     console.log("callback based settimeout completed");
//     resolve()
// }, 3000)
// }

// function setTimeoutPromisified2(){
//     return new Promise2(readTheFile)
// }

// const p = setTimeoutPromisified2()

// function callback2(){
//     console.log("Callback 2 has beeen called");
// }

// p.then(callback2)



class promise3 {
    constructor(func) {
        func(()=>{
            this.resolve()
        })
    }
    then(callback){
        this.resolve = callback
    }
}


function customPromisifiedSetTimeout() {
    return new promise3((resolve)=>{
        setTimeout(()=>{
            console.log("Inner Settimeout")
            resolve()
        }, 2000)
    })
}

const customValue = customPromisifiedSetTimeout()
customValue.then(()=>{
    console.log("Resolved called")
})