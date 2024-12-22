


import { Button } from '../components/Button'
import { ShareIcon } from '../icons/ShareIcon'
import { PlusIcon } from '../icons/PlusIcon'
import { Card } from '../components/Card'
import { AddContentModal } from '../components/AddContentModal'
import { useEffect, useState } from 'react'
import { SidebarLeft } from '../components/Sidebar'
import { useContent } from '../hooks/UseContent'


function Dashboard() {
  const [showModal, setShowModal] = useState(false)
  const {contents, refresh} = useContent()

  useEffect(()=>{
    refresh()
  }, [showModal])
 
  return <div className='p-8 bg-gray-200 min-h-screen'>
      <SidebarLeft />
    <div className='ml-72'>
    <div className="flex gap-4 justify-end mb-10">
    <Button text='Share brain' variants='secondary' startIcon={<ShareIcon size='lg'/>} />
    <Button onClick={()=> setShowModal(true)} text='Add content' variants='primary' startIcon={<PlusIcon size='lg' />} />
    </div>
    <div className="flex gap-8 justify-between items-start">
    { contents.map(({title, type, cardLink})=> <Card 
               title={title} 
               type={type} 
               customClass='basis-1/3' 
               cardLink={cardLink}/>)}
    </div>
    { showModal && <AddContentModal onCancel={()=> setShowModal(false)} ></AddContentModal> }
    </div>
  </div>
}

export default Dashboard
