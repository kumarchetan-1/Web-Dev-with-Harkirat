
import { useEffect, useState } from 'react'
import './App.css'
// import { Sidebar4 } from './components/sidebars/Sidebar4'
// import { SidebarToggle } from './components/icons/SidebarToggle';
// import { SidebarClass1 } from './components/answers/1-basic-project';
import { SidebarToggle1 } from './components/icons/SideBarToggle2';


function App() {
  return <div className='flex '>
    <Sidebar />
    <MainContent />
  </div>
}

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false)

  useEffect(()=>{
  const media = window.matchMedia(query)
  if (media.matches !== matches) {
    setMatches(media.matches)
  }
  media.addEventListener('change', ()=>setMatches(media.matches))
  return media.removeEventListener('change', ()=> setMatches(media.matches))
  },[])

  return matches
}

function Sidebar() {
  const [toggleSidebar, setToggleSidebar] = useState(false)
  const isMdWidth = useMediaQuery('(max-width: 768px)')
  const [mobSidebar, setMobSidebar] = useState(false)

  useEffect(()=>{
    if (isMdWidth) {
      setMobSidebar(<aside className="h-8 w-8 absolute left-0 top-0">
        <div className="text-black">
          <SidebarToggle1 setSidebarToggle={setToggleSidebar} toggleSidebar={toggleSidebar} />
        </div>
        </aside> ) 
    } else {
        setMobSidebar(<aside className="h-screen w-20 bg-red-300">
          <div className="text-black">
            <SidebarToggle1 setSidebarToggle={setToggleSidebar} toggleSidebar={toggleSidebar} />
          </div>
          </aside> )
    }
  },[isMdWidth])

  const expendedSidebar = <aside className={`h-screen w-60 bg-red-300 ${isMdWidth && "absolute left-0 top-0 z-10" }`}>
    <div className="text-black">
      <SidebarToggle1 setSidebarToggle={setToggleSidebar} toggleSidebar={toggleSidebar} />
    </div>
  </aside> 


  
  return ( toggleSidebar && expendedSidebar || mobSidebar )
}



function MainContent() {
  
  return <div className="h-scrren w-full">
      <div className="w-full h-32 bg-slate-900"></div>
<div className="grid grid-cols-12 w-full gap-4 p-4">
        <div className="bg-green-300 rounded-md shadow-md -mt-12 col-span-3 hidden md:block h-[180px]">
          
        </div>
        <div className="bg-blue-300 rounded-md shadow-md md:col-span-5 h-[180px] col-span-12 ">

        </div>
        <div className="bg-yellow-300 rounded-md shadow-md md:col-span-4 h-[180px] col-span-12">

        </div>
      </div>
</div>
}

















// const useMediaQuery = (query) => {
//   const [matches, setMatches] = useState(false);

//   useEffect(() => {
//     const media = window.matchMedia(query);
//     if (media.matches !== matches) {
//       setMatches(media.matches);
//     }
//     const listener = () => setMatches(media.matches);
//     media.addListener(listener);
//     return () => media.removeListener(listener);
//   }, [matches, query]);

//   return matches;
// };


// function App() {

//   const [sidebarOpen, setSidebarOpen] =  useState(true);
//   const isDesktop = useMediaQuery("(min-width: 768px)");

//   console.error(isDesktop)
  
//   useEffect(() => {
//     if (isDesktop == false) {
//       setSidebarOpen(false)
//     } else {
//       setSidebarOpen(true)
//     }
//   }, [isDesktop])

//   return (
//     <div className='flex'>
//       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
//       <MainContent sidebarOpen={sidebarOpen} />
//     </div>
//   )
// }

// function Sidebar({sidebarOpen, setSidebarOpen}) {
//   if (!sidebarOpen) {
//     return <div className='fixed top-0 left-0'>
//         <div className='cursor-pointer hover:bg-slate-200' onClick={() => {
//           setSidebarOpen(!sidebarOpen)
//         }}>
//           <SidebarToggle />
//         </div>
//     </div>
//   }
//     return <div className='w-96 h-screen bg-red-100 fixed top-0 left-0 md:relative'>
//     <div>
//       <div className='cursor-pointer hover:bg-slate-200' onClick={() => {
//         setSidebarOpen(!sidebarOpen)
//       }}>
//         <SidebarToggle />
//       </div>
//     </div>
//   </div>
// }

// function MainContent() {
//   return  <div className='w-full'>
//     <div className='h-72 bg-black hidden md:block'></div>
//     <div className='grid grid-cols-11 gap-8 p-8'>
//       <div className='h-96 rounded-2xl shadow bg-red-200 md:col-span-2 -translate-y-24 shadow-lg  col-span-11 hidden md:block'>

//       </div>
//       <div className='h-96 rounded-2xl shadow bg-green-200 md:col-span-6 shadow-lg col-span-11'>

//       </div>
//       <div className='h-96 rounded-2xl shadow bg-yellow-200 md:col-span-3 shadow-lg col-span-11'>

//       </div>
//     </div>
//   </div>
// }

export default App
