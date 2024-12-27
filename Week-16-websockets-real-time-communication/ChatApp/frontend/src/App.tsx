
import { useEffect, useRef, useState } from 'react'
import './App.css'
import MessageInput from './components/MessageInput'
import MessageList from './components/MessageList'
import ChatHeader from './components/ChatHeader'

type Message = {
id: string
text: string
sender: string
timestamp: number
}


function App() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const wsRef = useRef<WebSocket | null>()
  const userId = useRef(`user-${Math.random().toString(36).substr(2, 9)}`)


  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080")

     ws.onmessage = (event)=>{
      let messageData: { type?: string; payload?: { message?: string; sender?: string } } | string;

      try {
        messageData = JSON.parse(event.data)
      } catch (error) {
        messageData = event.data;
      }

      if (typeof messageData === 'string') {
        // Handle plain text messages
        addMessage(messageData, 'Server');
      } else if (messageData.type === 'chat' && messageData.payload) {
        // Handle JSON-formatted chat messages
        addMessage(messageData.payload.message || '', messageData.payload.sender || 'Anonymous');
      }
      //  setMessages(oldmessages => ([...oldmessages, event.data]))
     }

 
     wsRef.current = ws
  
     ws.onopen = ()=>{
       ws.send(JSON.stringify({
         type: "join",
         payload: {
           roomId: "red",
           userId: userId.current
         }
       }))
     }
    
     return ()=> ws.close()
   }, [])

   const addMessage = (text: string, sender: string) => {
    setMessages(oldMessages => [...oldMessages, {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: Date.now()
    }])
  }

  function sendMessage() {

    if ( wsRef.current && input.trim()) {
      const message = {
        type: "chat",
        payload: {
          message: input,
          sender: userId.current
        }
      }

      wsRef.current.send(JSON.stringify(message)) 
      addMessage(input, userId.current)
       setInput("")
    }
  }


  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <ChatHeader />
      <MessageList messages={messages} currentUserId={userId.current} />
      <MessageInput 
        input={input} 
        setInput={setInput} 
        sendMessage={sendMessage} 
      />
    </div>
  )
}

export default App
