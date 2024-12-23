import axios from "axios";
import { BACKEND_URL } from "../config";
import { SidebarLeft } from "../components/Sidebar";
import { Card } from "../components/Card";
import { useState } from "react";

interface SharedLinkInterface{
  content: []
}

export function SharedBrainDashboard({sharedBrainLink}: {sharedBrainLink: string}) {
    const [sharedContents, setSharedContents] = useState([])
    // http://localhost:3000/api/v1/brain/1plebleyhn
   async function sharedContent() {
      try {
        const response =  await axios.post<SharedLinkInterface>(`${BACKEND_URL}/api/v1/${sharedBrainLink}`)
         setSharedContents(response.data.content)
      } catch (error) {
        console.error(error)
      }
    }

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