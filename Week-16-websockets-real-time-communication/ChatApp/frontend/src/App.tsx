
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState()
  let socket: WebSocket;

  function sendMessage() {
    if (socket && input.trim()) {
       socket.send(input) 
       setInput('')
    }
  }

  useEffect(()=>{
    socket = new WebSocket("ws://localhost:8080")

    socket.onmessage = (event)=>{
     setMessages((prev)=> [...prev, event.data])
    }

    socket.onclose = ()=>{
      console.log("WebSocket disconnected");
    }

    socket.onerror = (error)=>{
      console.log(`Websocket error: ${error}`);
      
    }
  })

  return <div>
    <h1>WebSocket Chat App</h1>
    <div>
      <ul>
        {messages.map((message, index)=> <li key={index}> message </li>)}
        <li></li>
      </ul>
    </div>
     <input onChange={(e)=> setInput(e.target.value)}  type="text" name="message" placeholder='Type a message' />
     <button onClick={sendMessage} type="submit">Message</button>
  </div>
}

export default App
