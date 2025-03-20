import axios from "axios";
import { BACKEND_URL } from "../../tsconfig";

async function getRoomId(slug:string) {
   const response = await axios.get(`${BACKEND_URL}/room/${slug}`)
   return response.data.room.id()
}


export default async function ChatRom({
    params
}: {
    params: {
        slug : string
    }
}
) {
    const slug = await(params).slug;
    const roomId = getRoomId(slug)
}