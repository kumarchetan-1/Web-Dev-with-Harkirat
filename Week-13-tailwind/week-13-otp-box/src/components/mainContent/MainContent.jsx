import { ProfileCard } from "./profileCard";
import profileImg from "../../assets/prabhleen.png"

export function MainContent() {

  return <div className="h-scrren w-full">
    <div className="w-full h-32 bg-slate-900"></div>
    <div className="grid grid-cols-12 w-full gap-4 p-4">
      <div className="-mt-12 col-span-3 hidden md:block ">
        <ProfileCard imgSrc={profileImg} name={"Prabhleen Kaur"} email={"prabhleen@gmail.com"} mobileNum={9988909990} address={"Delhi, India"} />
      </div>
      <div className=" md:col-span-5 min-h-[180px] col-span-12 ">
        <div className=" col-span-12 ">
        <MorningWish name={"Prabhleen!"} />
        </div>
        <div className="bg-blue-300 rounded-md shadow-md md:col-span-5 min-h-[180px] col-span-12 ">

        </div>
      </div>
      <div className="p-8 rounded-md shadow-md md:col-span-4 min-h-[180px] col-span-12">
       <div className="flex gap-8 flex-wrap ">
       <IconButtons
        icon={<svg className="max-w-14" width="64px" height="64px" viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path d="M9 20H6C3.79086 20 2 18.2091 2 16V7C2 4.79086 3.79086 3 6 3H17C19.2091 3 21 4.79086 21 7V10" stroke="#000000" ></path> <path d="M8 2V4" stroke="#000000" ></path> <path d="M15 2V4" stroke="#000000" ></path> <path d="M2 8H21" stroke="#000000" ></path> <path d="M18.5 15.6429L17 17.1429" stroke="#000000"></path> <circle cx="17" cy="17" r="5" stroke="#000000"></circle> </g></svg>}
        name={'Schedule a Webinar'}
        customClass={'basis-2/5 justify-center flex flex-col items-center gap-3'}
        btnClass={'bg-green-400'}
      />
      <IconButtons
        icon={<svg className="max-w-14" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="#000000" ></path> </g></svg>}
        name={'Join a Webinar'}
        customClass={'basis-2/5 justify-center flex flex-col items-center gap-3'}
        btnClass={'bg-green-400'}
      />
      <IconButtons
        icon={<svg className="max-w-14" fill="#000000" width="64px" height="64px" viewBox="-2.5 0 19 19" xmlns="http://www.w3.org/2000/svg" ><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"><path d="M7.365 4.785v9.63c0 .61-.353.756-.784.325l-2.896-2.896H1.708A1.112 1.112 0 0 1 .6 10.736V8.464a1.112 1.112 0 0 1 1.108-1.108h1.977L6.581 4.46c.43-.43.784-.285.784.325zm2.468 7.311a3.53 3.53 0 0 0 0-4.992.554.554 0 0 0-.784.784 2.425 2.425 0 0 1 0 3.425.554.554 0 1 0 .784.783zm1.791 1.792a6.059 6.059 0 0 0 0-8.575.554.554 0 1 0-.784.783 4.955 4.955 0 0 1 0 7.008.554.554 0 1 0 .784.784z"></path></g></svg>}
        name={'Open Recordings'}
        customClass={'basis-2/5 justify-center flex flex-col items-center gap-3'}
        btnClass={'bg-green-400'}
      />
       </div>
      </div>
    </div>
  </div>
}

function MorningWish({name}) {
  const currentDate = new Date().toLocaleDateString('en-GB', {
    weekday: "long",
    day: '2-digit',
    month:'long'
  }); // You can customize the format if needed.

  return <div className="mb-8">
    <p className="text-lg ">{ currentDate }</p>
    <h1 className="text-3xl font-bold"> Good Morning, {name} 👋</h1>
  </div>
}


function IconButtons({icon, name, customClass, btnClass}) {
  
  return <div className={`cursor-pointer ${customClass}`}>
    <div className={`w-[60px] h-[60px] box-border flex justify-center items-center rounded-xl ${btnClass} p-3`}>
      { icon }
      </div> 
      <p className="text-lg font-medium"> { name } </p>
  </div>
}