// sm, md, lg, xl, 2xl

// export function SidebarClass1() {
//     return <div className="flex">
//         <div className="transition-all ease-in-out duration-150 md:w-96  h-screen w-0 ">
//             Sidebar
//         </div>
//         <div className="bg-green-800 h-screen flex-1">
//             Content
//         </div>
//     </div>
//} 


export function SidebarClass1() {
          
    return <div className="flex">
        <div className="transition-all delay-200 esae-in-out bg-red-200 w-0 h-screen  sm:w-1/4"> Sidebar </div>
        <div className="bg-green-200 w-full h-screen"> Content </div>
    </div>
}