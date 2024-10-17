console.log("Start");

setTimeout(() => {
    console.log("Timeout 1");
}, 0);

Promise.resolve()
    .then(() => {
        console.log("Promise 1");
    })
    .then(() => {
        console.log("Promise 2");
        setTimeout(() => {
            console.log("Timeout 3");
        }, 0);
    });

setTimeout(() => {
    console.log("Timeout 2");
}, 0);

console.log("End");







// function fetchData(callback) {
//     setTimeout(() => {
//         const data = { name: "Chetan" };
//         callback(data);
//     }, 2000);
//     setTimeout(() => {
//         const data = { name: "Abhishek" };
//         callback(data);
//     }, 2000);
//     setTimeout(() => {
//         const data = { name: "Shivam" };
//         callback(data);
//     }, 2000);
// }

// // Callback function
// fetchData((e) => {
//     console.log(e); // Output: { name: "Chetan" }
// });