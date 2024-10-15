import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'

// A clock with a start and stop button
// In React, useRef is a hook that provides a way to create a reference to a value or a 
// DOM element that persists across renders but does not trigger a re-render when the value changes.
function App() {
  const [currentCout, setCurrentCout] = useState(0)
  // let timer = 0; // this will get to zero on every time the re-rendering happens after change in currentCout
  // const [timer, setTimer ] = useState(0)
  const timer = useRef()

  function startClock() {
   let value = setInterval(()=>{
      setCurrentCout(c => c+1)
    }, 1000)
    // timer = value
    // setTimer(value)
     timer.current = value
  }

  function stopClock() {
    clearInterval(timer.current)
  }

  return <div>
    <div>
    { currentCout }
    </div>
    <button onClick={ startClock }>Start</button>
    <button onClick={ stopClock }>Stop</button>
  </div>
}

// // useRef
// // It let you create a reference of a value or a DOM element such that when you change the value, the component does not RE-RENDER
// function App() {
//   const inputRef = useRef()

//   function focusOnInput() {
//     inputRef.current.focus()
//   }
//   return(
//     <div>
//       <input ref={inputRef } type="text" />
//       <input type="text" />
//       <button onClick={ focusOnInput }>Submit</button>
//     </div>
//   )
// }


// Routing in React application, Outlet, Navigation Links, useNavigate etc.
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//             <Route path='/' element={<Layout></Layout>}>
//             <Route path='/' element={<Landing/>}/>
//             <Route path='/neet/online-coaching-class-11' element={<Class11Program/>}/>
//             <Route path='/neet/online-coaching-class-12' element={<Class12Program/>}/>
//             <Route path='*' element={<ErrorPage/>}></Route>
//             </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// function Layout() {
//   return (
//     <div style={{ height: "100vh", background: "#cacaca" }}>
//       <div style={{ height: "10vh"}}><Header></Header></div>
//       <div  style={{ height: "80vh", background: "#c687c6" }}>
//         <Outlet></Outlet> 
//       </div>
//       <div style={{ height: "10vh", background: "#cacaca" }}> Footer </div>
//     </div>
//   )
// }

// function Header() {
//   return (
//     <nav>
//       <Link to="/"> Home </Link>
//       |
//       <Link to="/neet/online-coaching-class-11"> Class 11 </Link>
//       |
//       <Link to="/neet/online-coaching-class-12"> Class 12 </Link>
//     </nav>
//   )
// }

// function ErrorPage() {
//   return <div>
//     Page not found. <Link to="/">Go back home</Link>
//   </div>
// }

// function Landing() {
  
//   return <>
//     Allen.in Landing page
//   </>
// }

// function Class11Program() {
  
//   return <>
//     Class 11 Online coaching for NEET
//   </>
// }

// function Class12Program() {
//   const navigate = useNavigate()

//   function redirectUser() {
//     navigate('/')
//   }
  
//   return <>
//     <div>
//     Class 11 Online coaching for NEET
//     </div>
//     <button onClick={redirectUser}> Go back to LP</button>
//   </>
// }

export default App
