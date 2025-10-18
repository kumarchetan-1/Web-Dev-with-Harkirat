import axios from "axios";
import { BACKEND_URL } from "../../tsconfig";
import { ChatRoom } from "../../components/ChatRoom";


async function getRoomId(slug: string) {
    try {
        const response = await axios.get(`${BACKEND_URL}/room/${slug}`)
        return response.data.room.id
    } catch (error) {
        console.log(error)
    }
}


export default async function ChatRoom1({ params }: { params: { slug: string } }) {
    try {
        const slug = params.slug;
        const roomId = await getRoomId(slug)
        console.log("room/slug " + roomId);
        
        return <ChatRoom id={roomId} />
    } catch (error) {
        console.log(error)
    }
}