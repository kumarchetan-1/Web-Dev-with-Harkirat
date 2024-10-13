import { useState, useEffect } from "react"


// conditional rendering
// function App() {
//   const [counterVisible, setCounterVisible] = useState(true)

//   useEffect(() => {
//     setInterval(() => {
//       setCounterVisible(c => !c)
//     }, 5000)
//   }, [])

//   return (<div>
//     <h1>Hi </h1>
//     {counterVisible ? <Counter></Counter> : null}
//     <h2>There </h2>
//   </div>
//   )
// }

// // Lifecycle events (mounting, re-rendering, unmounting)
// function Counter() {
//   const [count, setCount] = useState(0)


//   // Hooking into the lifecycle events of React
//   console.log("Counter");
//   useEffect(function () {
//     console.log("mounted")
//     const clock = setInterval(() => {
//       console.log("Inside setInterval")
//       // setCount(count+1) // if we provide this variable in dependancy array
//       setCount(count => count + 1)
//     }, 1000)

//     return function () {
//       console.log("unmounted")
//       clearInterval(clock)
//     }
//   }, []) // Dependancy array, cleanup, fetch inside useEffect


//   return (<div>
//     <h1>{count}</h1>
//   </div>)
// }



// conditional rendering
function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  function increase() {
    setCount(c => c + 1 )
  }

  function decrease() {
    setCount2(c => c - 1 )
  }

  return <div>
    <Counter count = { count } count2 = { count2 }/>
    <button onClick= {increase} >Increase count </button>
    <button onClick= {decrease} >Decrease count </button>
  </div>
}

// Lifecycle events (mounting, re-rendering, unmounting)
function Counter(props) {
  
  console.log("Counter");
  useEffect(function () {
    console.log("mounted")

    return function () {
      console.log("unmounted")
    }
  }, []) // Dependancy array, cleanup, fetch inside useEffect

  useEffect(()=>{
    console.log("Inside second useEffect  ")

    return function () {
      console.log(" cleanup inside second useEffect")
    }
  }, [props.count])

  return (<div>
    <h1> Counter {props.count}</h1>
    <h1> Counter {props.count2}</h1>
  </div>)
}


export default App
