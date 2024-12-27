import { useEffect, useRef } from 'react'

type Message = {
  id: string
  text: string
  sender: string
  timestamp: number
}

type MessageListProps = {
  messages: Message[]
  currentUserId: string
}

export default function MessageList({ messages, currentUserId }: MessageListProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => {
        const isCurrentUser = message.sender === currentUserId
        return (
          <div key={message.id} className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex flex-col ${isCurrentUser ? 'items-end' : 'items-start'}`}>
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-xs text-gray-500">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </span>
                <span className={`font-semibold ${isCurrentUser ? 'text-indigo-600' : 'text-green-600'}`}>
                  {isCurrentUser ? 'You' : message.sender}
                </span>
              </div>
              <div 
                className={`rounded-lg p-3 break-words max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg ${
                  isCurrentUser 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-white text-gray-800 border border-gray-200'
                }`}
              >
                {message.text}
              </div>
            </div>
          </div>
        )
      })}
      <div ref={messagesEndRef} />
    </div>
  )
}

