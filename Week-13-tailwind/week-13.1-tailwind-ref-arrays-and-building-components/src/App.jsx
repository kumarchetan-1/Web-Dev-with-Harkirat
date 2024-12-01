import { useState } from 'react'
import './App.css'
import { Hero } from './components/hero'
import { Otp } from './components/otp'


function App() {
  const [count, setCount] = useState(0)

  return <div className=' bg-blue-700 py-16 min-h-screen'>
      <Hero />
    </div>
}

export default App
