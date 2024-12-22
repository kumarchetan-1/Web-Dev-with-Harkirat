import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"

interface ContentResponseInterface {
    content: string[];
}

export function useContent() {
    const [contents, setContents] = useState<string[]>([])

    function refresh() {
      axios.get<ContentResponseInterface>(`${BACKEND_URL}/api/v1/content`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }).then((response) => setContents(response.data.content))
          .catch(error => console.log("Failed to fetch content " + error))
    }

    useEffect(() => {
        refresh()
       const interval = setInterval(()=> refresh(), 10*1000)
            
       return ()=> clearInterval(interval)
    }, [])

    return {contents, refresh}
}