
import { Button } from '../components/Button'
import { ShareIcon } from '../icons/ShareIcon'
import { PlusIcon } from '../icons/PlusIcon'
import { Card } from '../components/Card'
import { AddContentModal } from '../components/AddContentModal'
import { useEffect, useState } from 'react'
import { SidebarLeft } from '../components/Sidebar'
import { useContent } from '../hooks/UseContent'  
import { ShareBrain } from '../components/ShareBrain'


function Dashboard() {
  const [showModal, setShowModal] = useState(false)
  const [showShareModal, setShowShareModal] = useState(false)
  const {contents, refresh, deleteContent} = useContent()

  useEffect(()=>{
    refresh()
  }, [showModal])
 
  return <div className='p-8 bg-gray-200 min-h-screen'>
      <SidebarLeft />
      { showModal && 
      <AddContentModal 
      onCancel={()=> setShowModal(false)} />}

      { showShareModal && 
           <ShareBrain 
           title="Share Your Second Brain" 
           description="Share your entire collection of notes, documents, tweets, and videos with others. They'll be able to import your content into their own Second Brain." 
           onCancel={()=> setShowShareModal(false)} /> }

    <div className='ml-72'>
    <div className="flex gap-4 justify-end mb-10">
    <Button text='Share brain' variants='secondary' startIcon={<ShareIcon size='lg'/>} 
     onClick={()=> setShowShareModal(true)}
    />
    <Button onClick={()=> setShowModal(true)} text='Add content' variants='primary' startIcon={<PlusIcon size='lg' />} />
    </div>
    <div className="flex gap-8 items-start ">
    { contents.map(({title, type, link, _id})=> <Card 
               key={_id}
               title={title} 
               type={type} 
               customClass='basis-1/3' 
               link={link}
               onDelete={()=> deleteContent(_id ? _id : "")}
               />
               )}
    </div>
    </div>
  </div>
}

export default Dashboard
