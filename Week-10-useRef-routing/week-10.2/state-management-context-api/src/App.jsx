import { useState, createContext, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// Context API Example 1 Here you can see that the increase and decreaase buttons are also re-renderoing on changing the value
// This is what we don't want, Hence more cleaner way for State Management is using libraries like, recoil, mobex etc.
const CountContext = createContext()

function CountProvider({children}) {
  const [count, setCount] = useState(0)

  return <CountContext.Provider value={{ count, setCount}}>
    {children}
  </CountContext.Provider>

}

function Parent() {
  return <CountProvider>
    <Increase />
    <Decrease />
    <Value />
  </CountProvider>
}

function Increase() {
  const { setCount } = useContext(CountContext) 
  return <div>
    <button onClick={()=> setCount(count => count + 1)}>Increase Count</button>
  </div>
}

function Decrease() {
  const { setCount } = useContext(CountContext) 
  return <div>
    <button onClick={()=> setCount(count => count - 1)}>Decrease Count</button>
  </div>
}

function Value() {
  const {count} = useContext(CountContext)
  return <div>
    Value is { count }
  </div>
}

function App() {
  return <Parent />
}
// Basic implementaion of context api example 2
// const BulbContext = createContext()

// function ContextProvider({children}) {
//   const [bulbOn, setBulbOn ] = useState(true)

//   return <BulbContext.Provider value={{
//       bulbOn, 
//       setBulbOn
//     }}>
//     {children}
//   </BulbContext.Provider>
// }

// function App() {

//   return (
//     <ContextProvider>
//       <LightBulb />
//     </ContextProvider>
//   )
// }

// function LightBulb() {
  
//   return <div>
//     <BulbOn />
//     <ToggleBulb />
//   </div>
// }

// function BulbOn() {
//   const {bulbOn} = useContext(BulbContext)
//   return <div>
//     { bulbOn ? "Bulb On" : "Bulb Off"}
//   </div>
// }

// function ToggleBulb() {
//   const {bulbOn, setBulbOn} = useContext(BulbContext)

//   function ToggleBulb() {
//     setBulbOn(!bulbOn)
//   }

//   return <div>
//     <button onClick={ToggleBulb}>Toggle bulb</button>
//   </div>
// }

export default App
