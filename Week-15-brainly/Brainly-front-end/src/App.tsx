import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon, ShareIcon } from './icons'

function App() {

  return (
    <>
      <Button variant='secondary' size='md' text='Share Brain' startIcon={<ShareIcon size='md' />} />
      <Button variant='primary' size='md' text='Add Content'  startIcon={<PlusIcon size='md' />} />
    </>
  )
}

export default App
