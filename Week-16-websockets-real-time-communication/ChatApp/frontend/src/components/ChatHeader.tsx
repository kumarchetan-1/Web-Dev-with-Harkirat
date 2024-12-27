import { MessageIcon } from "../icons/MessageIcon";

export default function ChatHeader() {
    return (
      <header className="bg-indigo-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex items-center space-x-2">
          <MessageIcon size={24} />
          <h1 className="text-2xl font-bold">Chatter Mutter</h1>
        </div>
      </header>
    )
  }