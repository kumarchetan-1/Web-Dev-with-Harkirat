import { useEffect, useState } from "react"
import { SidebarToggle } from "./SidebarToggle"
import { useMediaQuery } from "../../hooks/useMediaQuery"
import { Image } from "../Image"
import profilePhoto from '../../assets/prabhleen.png'

// Sidebar
export function Sidebar() {
    const [toggleSidebar, setToggleSidebar] = useState(false)
    const isMobileScreen = useMediaQuery('(max-width: 768px)')
    const [mobSidebar, setMobSidebar] = useState(false)


    const profilePhotoElem = ()=> toggleSidebar && (<Image cornerRadiusClass={'rounded'} src={profilePhoto} alt={"Profile Photo"} size={'l'}/>) 
    const listItems = ()=>{
      return <> 
      <ListItem name={"Home"} icon={<svg className="w-5 h-5 fill-slate-700 group-hover:fill-blue-700" width="64px" height="64px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#036"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z" ></path> </g></svg>} />
      <ListItem name={"Webinar"} icon={<svg className="w-5 h-5 fill-slate-700 group-hover:fill-blue-700" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="64px" height="64px" viewBox="0 0 96.979 96.979" stroke="#036"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M59.07,46.021L59.07,46.021c4.576-3.373,7.31-8.754,7.31-14.393c0-9.863-8.025-17.889-17.89-17.889 c-9.864,0-17.889,8.025-17.889,17.889c0,5.717,2.66,10.959,7.297,14.385c-18.244,6.451-21.092,28.71-21.531,35.378 c-0.031,0.479,0.137,0.949,0.465,1.3c0.328,0.35,0.785,0.549,1.264,0.549h60.788c0.479,0,0.938-0.199,1.266-0.549 c0.328-0.351,0.496-0.82,0.465-1.3C80.175,74.736,77.32,52.511,59.07,46.021z"></path> <path d="M82.761,46.861c3.02-2.227,4.821-5.779,4.821-9.502c0-6.508-5.297-11.805-11.807-11.805c-1.867,0-3.627,0.447-5.199,1.223 c0.345,1.564,0.529,3.184,0.529,4.852c0,4.68-1.484,9.219-4.137,12.988c10.448,6.572,14.981,18.07,16.944,26.81h11.923 c0.315,0,0.618-0.131,0.836-0.361c0.215-0.23,0.325-0.541,0.305-0.857C96.688,65.812,94.805,51.144,82.761,46.861z"></path> <path d="M29.976,44.617c-2.654-3.748-4.104-8.238-4.104-12.988c0-1.668,0.188-3.287,0.531-4.852 c-1.572-0.775-3.332-1.223-5.199-1.223c-6.51,0-11.807,5.297-11.807,11.805c0,3.775,1.754,7.236,4.816,9.496 C2.172,51.113,0.291,65.806,0.002,70.207c-0.021,0.316,0.09,0.627,0.307,0.857c0.217,0.229,0.52,0.36,0.836,0.36H13.06 C15.019,62.685,19.543,51.179,29.976,44.617z"></path> </g> </g> </g></svg>} />
      <ListItem name={"Billing"} icon={<svg className="w-5 h-5 fill-slate-700 group-hover:fill-blue-700" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M2 10H22" ></path> <path d="M11.5483 20.4998H6.43829C2.88829 20.4998 1.98828 19.6198 1.98828 16.1098V7.88977C1.98828 4.70977 2.72831 3.68977 5.51831 3.52977C5.79831 3.51977 6.10829 3.50977 6.43829 3.50977H17.5483C21.0983 3.50977 21.9983 4.38977 21.9983 7.89977V12.3098" ></path> <path d="M6 16H10" ></path> <path d="M22 18C22 18.75 21.79 19.46 21.42 20.06C20.73 21.22 19.46 22 18 22C16.54 22 15.27 21.22 14.58 20.06C14.21 19.46 14 18.75 14 18C14 15.79 15.79 14 18 14C20.21 14 22 15.79 22 18Z" ></path> <path d="M16.4414 17.9995L17.4314 18.9895L19.5614 17.0195" ></path> </g></svg>} />
      <ListItem name={"User Management"} icon={<svg className="w-5 h-5 fill-slate-700 group-hover:fill-blue-700" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M14.9999 15.2547C13.8661 14.4638 12.4872 14 10.9999 14C7.40399 14 4.44136 16.7114 4.04498 20.2013C4.01693 20.4483 4.0029 20.5718 4.05221 20.6911C4.09256 20.7886 4.1799 20.8864 4.2723 20.9375C4.38522 21 4.52346 21 4.79992 21H9.94465M13.9999 19.2857L15.7999 21L19.9999 17M14.9999 7C14.9999 9.20914 13.2091 11 10.9999 11C8.79078 11 6.99992 9.20914 6.99992 7C6.99992 4.79086 8.79078 3 10.9999 3C13.2091 3 14.9999 4.79086 14.9999 7Z" stroke="#036" ></path> </g></svg>} />
      <ListItem name={"Settings"} icon={<svg className="w-5 h-5 fill-slate-700 group-hover:fill-blue-700" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M14.2788 2.15224C13.9085 2 13.439 2 12.5 2C11.561 2 11.0915 2 10.7212 2.15224C10.2274 2.35523 9.83509 2.74458 9.63056 3.23463C9.53719 3.45834 9.50065 3.7185 9.48635 4.09799C9.46534 4.65568 9.17716 5.17189 8.69017 5.45093C8.20318 5.72996 7.60864 5.71954 7.11149 5.45876C6.77318 5.2813 6.52789 5.18262 6.28599 5.15102C5.75609 5.08178 5.22018 5.22429 4.79616 5.5472C4.47814 5.78938 4.24339 6.1929 3.7739 6.99993C3.30441 7.80697 3.06967 8.21048 3.01735 8.60491C2.94758 9.1308 3.09118 9.66266 3.41655 10.0835C3.56506 10.2756 3.77377 10.437 4.0977 10.639C4.57391 10.936 4.88032 11.4419 4.88029 12C4.88026 12.5581 4.57386 13.0639 4.0977 13.3608C3.77372 13.5629 3.56497 13.7244 3.41645 13.9165C3.09108 14.3373 2.94749 14.8691 3.01725 15.395C3.06957 15.7894 3.30432 16.193 3.7738 17C4.24329 17.807 4.47804 18.2106 4.79606 18.4527C5.22008 18.7756 5.75599 18.9181 6.28589 18.8489C6.52778 18.8173 6.77305 18.7186 7.11133 18.5412C7.60852 18.2804 8.2031 18.27 8.69012 18.549C9.17714 18.8281 9.46533 19.3443 9.48635 19.9021C9.50065 20.2815 9.53719 20.5417 9.63056 20.7654C9.83509 21.2554 10.2274 21.6448 10.7212 21.8478C11.0915 22 11.561 22 12.5 22C13.439 22 13.9085 22 14.2788 21.8478C14.7726 21.6448 15.1649 21.2554 15.3694 20.7654C15.4628 20.5417 15.4994 20.2815 15.5137 19.902C15.5347 19.3443 15.8228 18.8281 16.3098 18.549C16.7968 18.2699 17.3914 18.2804 17.8886 18.5412C18.2269 18.7186 18.4721 18.8172 18.714 18.8488C19.2439 18.9181 19.7798 18.7756 20.2038 18.4527C20.5219 18.2105 20.7566 17.807 21.2261 16.9999C21.6956 16.1929 21.9303 15.7894 21.9827 15.395C22.0524 14.8691 21.9088 14.3372 21.5835 13.9164C21.4349 13.7243 21.2262 13.5628 20.9022 13.3608C20.4261 13.0639 20.1197 12.558 20.1197 11.9999C20.1197 11.4418 20.4261 10.9361 20.9022 10.6392C21.2263 10.4371 21.435 10.2757 21.5836 10.0835C21.9089 9.66273 22.0525 9.13087 21.9828 8.60497C21.9304 8.21055 21.6957 7.80703 21.2262 7C20.7567 6.19297 20.522 5.78945 20.2039 5.54727C19.7799 5.22436 19.244 5.08185 18.7141 5.15109C18.4722 5.18269 18.2269 5.28136 17.8887 5.4588C17.3915 5.71959 16.7969 5.73002 16.3099 5.45096C15.8229 5.17191 15.5347 4.65566 15.5136 4.09794C15.4993 3.71848 15.4628 3.45833 15.3694 3.23463C15.1649 2.74458 14.7726 2.35523 14.2788 2.15224ZM12.5 15C14.1695 15 15.5228 13.6569 15.5228 12C15.5228 10.3431 14.1695 9 12.5 9C10.8305 9 9.47716 10.3431 9.47716 12C9.47716 13.6569 10.8305 15 12.5 15Z"></path> </g></svg>} />
      </>
    } 


    useEffect(()=>{
      if (isMobileScreen) {
        setMobSidebar(<aside className="h-8 w-8 absolute left-0 top-0">
          <div className="flex flex-nowrap justify-between align-middle gap-2">
            <SidebarToggle setSidebarToggle={setToggleSidebar} toggleSidebar={toggleSidebar} />
            { profilePhotoElem() }
          </div>
          </aside> ) 
      } else {
          setMobSidebar(<aside className="h-screen p-6 border border-r-2 border-x-0 border-l-0 border-y-slate-700  w-20 bg-white">
            <div className="flex flex-nowrap justify-between align-middle gap-2">
              <SidebarToggle setSidebarToggle={setToggleSidebar} toggleSidebar={toggleSidebar} />
              { profilePhotoElem() }
            </div>
            </aside> )
      }
    },[isMobileScreen])
  

    const expendedSidebar = ()=> <aside className={`h-screen overflow-auto p-6 border border-r-2 border-x-0 border-l-0 border-y-slate-700 w-80 bg-white ${isMobileScreen && "absolute left-0 top-0 z-10" }`}>
      <div className="flex flex-nowrap justify-between align-middle gap-2">
        <SidebarToggle setSidebarToggle={setToggleSidebar} toggleSidebar={toggleSidebar} />
        { profilePhotoElem() }
      </div>
      <div className="flex flex-col gap-2 mt-8">
      { listItems() }
      </div>
    </aside> 
  
    return ( toggleSidebar && expendedSidebar() || mobSidebar )
  }


  function ListItem({name, icon }) {
    const [activeState, setActiveState ] = useState(true)
    
    
    return <li className={`text-slate-700 cursor-pointer hover:bg-slate-200 group flex rounded-md justify-between align-middle py-2 px-4 list-non hover:text-blue-700 `}>
        {/* {activeState && } */}
        <p>{ name }</p>
        <div className="w-4 h-4">{ icon }</div>
    </li>
  }