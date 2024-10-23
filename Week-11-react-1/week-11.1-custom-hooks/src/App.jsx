import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useFetch, usePostTitle } from './hooks/useFetch'
import { usePrev } from './hooks/usePrev'

// Approach 2 of useDebounce (Recommended)

function useDebounce(value, delay) {
  const [debouncedVal, setDebouncedVal] = useState(value)

  useEffect(()=>{
  const handler = setTimeout(()=>{
    setDebouncedVal(value)
  }, delay)

  return clearTimeout(handler)

  }, [value])

  return debouncedVal
}

function App() {
  const [inputVal, setInputVal ] = useState("")
  const debounceVal = useDebounce(inputVal, 200)
  
  function change(e) {
    setInputVal(e.taget.value)
  }

  useEffect(()=>{
  // expensive operation,
  // fetch
  console.log("Expensive operation");
  
  }, [debounceVal])

  return <div>
    <input type="text" name="search" onChange={change} />
  </div>
}

// Approach 1 of useDebounce hook
// function useDebounce(originalFn) {
//   const currentClock = useRef()

//   const fn = ()=>{
//     clearTimeout(currentClock.current)
//     currentClock.current = setTimeout(originalFn, 200)
//   }

//   return fn
// }

// function App() {

//   function sendDataToBackend() {
//     fetch("api.amazon.com/search")
//   }

//   const debounceFn = useDebounce(sendDataToBackend)

//   return <div>
//     <input type="text" name="search" onChange={debounceFn} />
//   </div>
// }

// basic logic of useDebounce hook in node.js(not in react.js)

// let currentClock

// function searchBackend() {
//   console.log("Request sent to backend")
//   // fetch  
// }

// function debounceSearchBackend() {
//   clearTimeout(currentClock)
//   currentClock = setTimeout(searchBackend, 200) // Start a clokc
// }

// debounceSearchBackend()
// debounceSearchBackend()
// debounceSearchBackend()
// debounceSearchBackend()
// debounceSearchBackend()
// debounceSearchBackend()


// usePrev Custom Hook
// function App() {
//   const [ state, setState ] = useState(0)
//   const prev = usePrev(state)

//   return <div>
//     <div>
//       {state}
//     </div>
//     <button onClick={()=>{
//       setState(state+1)
//     }}>Increase me</button>
// <div>{prev}</div>
//   </div>
// }

// // useFetch use-case 1 simple implementation
// function App() {
//   // const postTitle = usePostTitle();
//   const [currentPost, setCurrentPost] = useState(1)
//   const { finalData, loading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${currentPost}`, 10)
  
//   if (loading) {
//     return "loading..."
//   }
  
//   return <div>
//     {/* {postTitle} */}
//     <button onClick={()=>setCurrentPost(1)}>Post 1 </button>
//     <button onClick={()=>setCurrentPost(2)}>Post 2 </button>
//     <button onClick={()=>setCurrentPost(3)}>Post 3 </button>
//     <div>
//     {JSON.stringify(finalData.title)}
//     </div>
//   </div>
// }


// // Custom hook
// function useCount() {
//   const [count, setCount] = useState(0)

//   function increaseCount() {
//     setCount( c => c + 1 )
//   }

//   return {
//     count, increaseCount
//   }
// }

// function App() {

//   return ( <div>
//     <Increase />
//     <Increase />
//     <Increase />
//     </div>
//   )
// }

// function Increase(){
//   const {count, increaseCount } = useCount()
//   return <button onClick={increaseCount}>Increase Count {count}</button>
// }



export default App
