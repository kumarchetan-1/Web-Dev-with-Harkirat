
import './App.css'
import { Sidebar } from './components/sidebars/sidebar';
import { MainContent } from './components/mainContent/MainContent';



function App() {
  return <div className='flex '>
    <div><Sidebar /></div>
    <MainContent />
  </div>
}

export default App
