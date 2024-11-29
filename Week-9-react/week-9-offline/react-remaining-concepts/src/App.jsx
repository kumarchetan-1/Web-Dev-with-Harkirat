import { useState, Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Error boundry

function App() {
  
  return <div>
    <Card1></Card1>
    <Card2></Card2>
  </div>
}

class ErrorBoundry extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error){
    return { hasError: true }
  }
}

function Card1() {
  throw new Error("Error while rendering");
  

  return <div style={{ color: "red", backgroundColor: "skyblue", borderRadius: 20}}>
    Hi There
  </div>
}

function Card2() {
  return <div style={{ color: "red", backgroundColor: "yellow", borderRadius: 20}}>
    Hello
  </div>
}

// // Class based component
// const App = ()=>{
//   return(
//     <div>
//       <ClassCounter></ClassCounter>
//     </div>
//   )
// }

// class ClassCounter extends Component {
//   state = { count : 0 } 

//   increment = ()=>{
//      this.setState({ count: this.state.count+1 })
//   }

//   render(){
//     return (
//       <div>
//         <h1>Counter {this.state.count }</h1>
//         <button onClick={this.increment}>Increase counter </button>
//       </div>
//     )
//   }
// }

// Lists and keys
// const ItemList = ({ items }) => {
//     return (
//         <ul>
//             {items.map(item => (
//                 <li key={item.id}>{item.name}</li>
//             ))}
//         </ul>
//     );
// };

// const App = () => {
//     const items = [
//         { id: 1, name: 'Item 1' },
//         { id: 2, name: 'Item 2' },
//         { id: 3, name: 'Item 3' },
//     ];

//     return <ItemList items={items} />;
// };

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
