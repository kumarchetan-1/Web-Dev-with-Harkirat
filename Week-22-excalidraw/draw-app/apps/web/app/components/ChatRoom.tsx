import axios from "axios";
import { BACKEND_URL } from "../tsconfig";
import { ChatRoomClient } from "./ChatRoomClient";


async function getChats(roomId:string) {
    try {
        const response = await axios.get(`${BACKEND_URL}/chats/${roomId}`)
    return response.data.messages
    } catch (error) {
        console.error("Error fetching chats", error)
        return []
    }
}


export async function ChatRoom({ id }:{ id: string }) {
    const messages = await getChats(id)
    console.log("ChatRoom Id: " + id);
    

    return <ChatRoomClient id={id} messages={messages} />
}