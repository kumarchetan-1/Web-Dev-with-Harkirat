
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [messages, setMessages] = useState(["Hi there"])
  const [input, setInput] = useState()
  const wsRef = useRef()

  function sendMessage() {
    // @ts-ignore
    if ( wsRef.current && input.trim()) {
      // @ts-ignore
      wsRef.current.send(JSON.stringify({
        type: "chat",
        payload: {
          message: input
        }
      })) 
      // @ts-ignore
       setInput('')
    }
  }

  useEffect(()=>{
   const ws = new WebSocket("ws://localhost:8080")

    ws.onmessage = (event)=>{
      setMessages(oldmessages => ([...oldmessages, event.data]))
    }
// @ts-ignore
    wsRef.current = ws
 
    ws.onopen = ()=>{
      ws.send(JSON.stringify({
        type: "join",
        payload: {
          roomId: "red"
        }
      }))
    }
   
    return ()=> ws.close()
  }, [])

  return <div>
    <div className="h-screen bg-black ">
      <div className="bg-red-200 min-h-[90vh] px-8 py-10">
      <h1 className='text-center text-4xl'>WebSocket Chat App</h1>
      <div>
      <ul>
        {messages.map((message, index)=> <li key={index}> {message} </li>)}
        <li></li>
      </ul>
    </div>
      </div>
      <div className="bg-blue-300 min-h-[10vh] px-8 py-2 items-center flex justify-center">
    <input className='w-3/5 px-4 py-3 rounded-md' onChange={(e)=> setInput(e.target.value)}  type="text" name="message" placeholder='Type a message' />
    <button className='-ml-4 px-4 py-3 bg-purple-600 text-white rounded-md' onClick={sendMessage} type="submit">Message</button>
      </div>
    </div>

  </div>
}

export default App
