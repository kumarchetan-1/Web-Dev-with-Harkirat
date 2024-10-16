import { useState, createContext, useContext } from 'react'
import './App.css'

const BulbContext = createContext() // # 21. Context API

// Context api wrapper function
function BulbContextProvider({ children }) { 
  const [count, setCount] = useState(0)

  return (<BulbContext.Provider value={{
    count, setCount
  }}>
        { children }
    </BulbContext.Provider>
  )
}

function App() {

  return (
    <div>
      <BulbContextProvider>
      <LightBulb/>
      </BulbContextProvider>
    </div>
  )
}

function LightBulb() {
  const [ bulbOn, setBulbOn ] = useState(true) // Rolling up the state, unoptimal re-renders

  return <div>
      <BulbState  bulbOn = {bulbOn}></BulbState>
      <ToggleBulbState bulbOn ={bulbOn} setBulbOn = {setBulbOn}></ToggleBulbState>
  </div> 
}

function BulbState({bulbOn}) {
  const { count } = useContext(BulbContext)

  return <div>
    {bulbOn ? `Bulb On ${Math.floor(count / 2)+1} times` : `Bulb Off ${Math.floor(count / 2)+1} times`}
    </div>
}

function ToggleBulbState({bulbOn, setBulbOn }) {
  const { setCount } = useContext(BulbContext)

  function changeBulbState() {
    setCount(currentCount => currentCount + 1)

    setBulbOn(!bulbOn)
    // setBulbOn(currentBulbState => !currentBulbState)
  }

  return <div>
    <button onClick={changeBulbState }>Toggle bulb</button>
  </div>
}

export default App
