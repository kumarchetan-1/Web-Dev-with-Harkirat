import { useState, Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const App = ()=>{
  return(
    <div>
      <ClassCounter></ClassCounter>
    </div>
  )
}

class ClassCounter extends Component {
  state = { count : 0 } 

  increment = ()=>{
     this.setState({ count: this.state.count+1 })
  }

  render(){
    return (
      <div>
        <h1>Counter {this.state.count }</h1>
        <button onClick={this.increment}>Increase counter </button>
      </div>
    )
  }
}



// Children
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//       <div>
//         <Card>
//           <h2>Card Title</h2>
//           <p>The is the description of first card</p>
//         </Card>
//         <Card>
//           <h2>Another Card Title</h2>
//           <p>The is the description of second card</p>
//         </Card>
//       </div>
//   )
// }

// function Card({children}) {
  
//   return (
//     <div style={
//       {
//         border: "1px solid #ccc",
//         borderRadius: 8,
//         padding: 20,
//         margin: 10,
//         boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)"
//       }
//     }>
//     {children}
//     </div>
//   )
// }



export default App
