
import './App.css'
import { Sidebar } from './components/sidebars/sidebar';
import { MainContent } from './components/mainContent/MainContent';
import { RecoilRoot } from 'recoil';



function App() {
  return <div className='flex '>
    <RecoilRoot>
    <div><Sidebar /></div>
    <MainContent />
    </RecoilRoot>
  </div>
}

export default App
