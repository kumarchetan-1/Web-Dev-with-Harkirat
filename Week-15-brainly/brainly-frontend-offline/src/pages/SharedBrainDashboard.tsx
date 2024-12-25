import axios from "axios";
import { BACKEND_URL } from "../config";
import { SidebarLeft } from "../components/Sidebar";
import { Card } from "../components/Card";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface SharedLinkInterface{
  content: []
}

export function SharedBrainDashboard() {
    const [sharedContents, setSharedContents] = useState([])
    const { shareLink } = useParams<{ shareLink: string }>()

   async function sharedContent() {
      try {
        const response =  await axios.post<SharedLinkInterface>(`${BACKEND_URL}/api/v1/brain/${shareLink}`)
        const contents = response.data.content
        if (contents.length === 0) {
          console.error("No content found on this url")
          return
        }
         setSharedContents(contents)
      } catch (error) {
        console.error(error)
      }
    }

    useEffect(()=>{
      sharedContent()
    }, [])

    return <div className='p-8 bg-gray-200 min-h-screen'>
          <SidebarLeft />
        <div className='ml-72'>
        <div className="flex gap-8 items-start ">
        { sharedContents.map(({title, type, link})=> <Card
                   key={title}
                   title={title} 
                   type={type} 
                   customClass='basis-1/3' 
                   link={link}/>
                   )}
        </div>
        </div>
      </div>
}