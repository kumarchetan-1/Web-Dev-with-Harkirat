import { SendIcon } from "../icons/SendIcon"

type MessageInputProps = {
  input: string
  setInput: (input: string) => void
  sendMessage: () => void
}

export default function MessageInput({ input, setInput, sendMessage }: MessageInputProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage()
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border-t border-gray-200 p-4">
      <div className="flex space-x-2">
        <input
          className="flex-grow px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <SendIcon size={20} />
        </button>
      </div>
    </form>
  )
}

