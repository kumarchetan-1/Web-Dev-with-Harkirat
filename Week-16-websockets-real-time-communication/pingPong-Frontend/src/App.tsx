import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState()
  const inputRef = useRef()

  function sendMessage() {
    if (!socket) {
      return
    }
   // @ts-ignore
    const message = inputRef.current.value
    // @ts-ignore
    socket.send(message)
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080")
    // @ts-ignore
    setSocket(ws)

    ws.onmessage = (event) => {
      alert(event.data)
    }
  }, [])

  return <div>
    <input ref={inputRef} type='text' placeholder='Message...'></input>
    <button onClick={sendMessage}> Send </button>
  </div>
}

export default App
