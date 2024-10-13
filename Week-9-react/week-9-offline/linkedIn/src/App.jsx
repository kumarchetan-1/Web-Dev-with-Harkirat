import { useState, useEffect } from 'react'
import { PostComponent } from './post'


function App() {
  const [showTimer, setShowTimer ] = useState(true)

  useEffect(()=>{
    setInterval(()=>{
      console.log("inside showtimers's hidden Setinteral");
      setShowTimer(currentValue => !currentValue)
    }, 5000)
  }, [])

  return <div>
    { showTimer && <Timer></Timer>}
  </div>
}

function Timer(params) {
  const [seconds, setSeconds] = useState(0)

  useEffect(()=>{
  const timer =  setInterval(()=>{
    console.log("inside timer's Setinteral");
      setSeconds(curentSecond => curentSecond + 1)
    }, 1000)

return ()=>{
  clearInterval(timer)
}

  }, [])

  return <div>
    {seconds} seconds elapsed
  </div>
}

// // App component
// function App(){
// const [taskNum, setTask] = useState(1)
// const [taskContent, setTaskContent] = useState({})
// const [loaderState, setLoaderState] = useState(true)

// // use effect
// useEffect(()=>{ 
//   setLoaderState(true)
//   fetch(`https://jsonplaceholder.typicode.com/posts/${taskNum}`)
//   .then(async (response)=>{
//    const data = await response.json()
//    setTaskContent( data)
//    setLoaderState(false)
//   })
// }, [taskNum])


//   return (
//     <div>
//       <button onClick={ ()=> setTask(task => 1) }>Task 1</button>
//       <button onClick={ ()=> setTask(task => 2) }>Task 2</button>
//       <button onClick={ ()=> setTask(task => 3) }>Task 3</button>
//       <button onClick={ ()=> setTask(task => 4) }>Task 4</button>
//       <div>
//         { loaderState ? "loading..": taskContent.title } // conditional Rendering
//       </div>
//     </div>
//   )
// }

// const parentStyle = { 
//   paddingTop: 40, 
//   height: "100vh", 
//   width: "100%", 
//   backgroundColor: "#c4c2c2", 
//   display: "flex", 
//   alignItems: "center", 
//   flexDirection: "column", 
//   gap: 30 
// }

// function App() {
//   const [posts, setPosts] = useState([])
 
//   const postComponents = posts.map((post)=>{
//     return (
//       <PostComponent
//       imgSrc = { post.imgSrc }
//       name = { post.name }
//       subtitle = { post.subtitle }
//       time = { post.time }
//       content = { post.content }
//       />
//     )
//   })

// function addPost() {
//   setPosts([...posts, 
//     {
//     imgSrc: "https://www.chetankumar.me/hs-fs/hubfs/Site%20V3%202024/logo%20v2.webp?width=160&height=160&name=logo%20v2.webp",
//     name: "Chetan Kumar",
//     subtitle: "200,000 followers",
//     time: "5 months ago",
//     content: "Want to know how to code fast, look at these guys code at 50 WPM using this amazing tool."
//     }
//   ])
// }

//   return (
//     <div style={ parentStyle }>
//       <h1>Linkedin Components</h1>
//       <button onClick={ addPost }> Add post</button>
//       { postComponents }
//     </div>
//   )
// }


// function App() {
  
//   return (
//     <div>
//       <Counter />
//     </div>
//   )
// }

// function Counter() {
//   const [isVisible, setIsVisible] =  useState("true")

// function toggle() {
//   setIsVisible(!isVisible)
// }
//   return (
//     <div>
//       <button onClick={toggle}> Toggle btn</button>
//       { isVisible && <p>Content will be toggled</p>}
//     </div>
//   )
  
// }







export default App
