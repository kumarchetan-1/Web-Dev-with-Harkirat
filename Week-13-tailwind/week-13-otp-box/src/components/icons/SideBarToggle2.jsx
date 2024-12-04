
export function SidebarToggle1({ setSidebarToggle, toggleSidebar }) {
  return <div className="cursor-pointer" onClick={() => setSidebarToggle(c => !c)}>
    <button type="button" className="group text-white bg-blue-700 hover:bg-green-400 focus:outline-none  font-medium rounded-lg text-sm px-2.5 py-2.5 text-center inline-flex items-center ">
    <svg className="w-[30px] h-[20px] fill-green-400 group-hover:fill-blue-700" fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="64px" height="64px">
    <g id="SVGRepo_bgCarrier" >
      </g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M4,2C2.9,2,2,2.9,2,4v13c0,1.1,0.9,2,2,2h6v1H6v2h12v-2h-4v-1h6c1.1,0,2-0.9,2-2V4c0-1.1-0.9-2-2-2H4z M4,4h16v13H4V4z M12,5c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S13.1,5,12,5z M10,10c-1.1,0-2,0.9-2,2v1h8v-1c0-1.1-0.9-2-2-2H10z M5,14v2h4v-2H5z M10,14v2h4v-2H10z M15,14v2h4v-2H15z"></path> 
     </g></svg>
     { toggleSidebar && <span>
      Webinar<span className="text-green-400 group-hover:text-blue-700">.gg</span>
      </span>}
      
    </button> 
  </div>
}