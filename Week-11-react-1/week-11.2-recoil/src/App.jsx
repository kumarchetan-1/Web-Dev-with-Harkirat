import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { counterAtom, evenSelector } from './store/atoms/counter'

function App() {
  
  return <div>
    <RecoilRoot>
    <Buttons />
    <Counters />
    <IsEven />
    </RecoilRoot>
  </div>
}

function Buttons() {
  const setCount = useSetRecoilState(counterAtom)

  return <div>
    <button onClick={()=> setCount(c => c + 2)}>Increment</button>
    <button onClick={()=> setCount(c => c - 1)}>Decrement</button>
  </div>
}

function Counters() {
  const count = useRecoilValue(counterAtom)

  return <div>
    counter {count}
  </div>
}

function IsEven() {
  const isEven = useRecoilValue(evenSelector)

  return <div>
    { isEven ? "Even" : "Odd" }
  </div>
}

// State management using recoil method
// function App() {

//   return (
//     <>
//     <RecoilRoot>
//       <Counter></Counter>
//       </RecoilRoot>
//     </>
//   )
// }

// function Counter() {

//   return <div>
//     <CurrentCount />
//     <Increase />
//     <Decrease />
//   </div>
// }

// function CurrentCount() {
//   const count = useRecoilValue(counterAtom)

//   return <div>
//     Count {count}
//   </div>
// }

// function Increase() {
//   const setCount = useSetRecoilState(counterAtom)

//   function increase(){
//     setCount(c=>c+1)
//   }

//   return <div>
//     <button onClick={increase}>Increase</button>
//   </div>
// }

// function Decrease() {
//   const setCount = useSetRecoilState(counterAtom)

//   function decrease(){
//     setCount(c=>c-1)
//   }
//   return <div>
//     <button onClick={decrease}>Decrease</button>
//   </div>
// }


// State management using useState hook, but this has a problem that it re-render the other components that are not required to re-render
// function App() {
//   return (
//     <>
//       <Counter></Counter>
//     </>
//   )
// }

// function Counter() {
//   const [count, setCount] = useState(0)

//   return <div>
//     <CurrentCount count={count} />
//     <Increase setCount={setCount}/>
//     <Decrease setCount={setCount} />
//   </div>
// }

// function CurrentCount({count}) {
//   return <div>
//     Count {count}
//   </div>
// }

// function Increase({setCount}) {
//   function increase(){
//     setCount(c=>c+1)
//   }

//   return <div>
//     <button onClick={increase}>Increase</button>
//   </div>
// }

// function Decrease({setCount}) {
//   function decrease(){
//     setCount(c=>c-1)
//   }
//   return <div>
//     <button onClick={decrease}>Decrease</button>
//   </div>
// }

export default App
