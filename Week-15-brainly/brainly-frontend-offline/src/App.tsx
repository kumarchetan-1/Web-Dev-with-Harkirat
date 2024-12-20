
import { Button } from './components/Button'
import { ShareIcon } from './icons/ShareIcon'
import { PlusIcon } from './icons/PlusIcon'
import { Card } from './components/Card'

function App() {

  return <div>
    <Button text='Share brain' variants='secondary' startIcon={<ShareIcon/>} />
    <Button text='Add content' variants='primary' startIcon={<PlusIcon />} />
    <Card />
  </div>
}

export default App
