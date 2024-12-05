import { ProfileCard } from "./profileCard";
import profileImg from "../../assets/prabhleen.png"

export function MainContent() {
  
    return <div className="h-scrren w-full">
        <div className="w-full h-32 bg-slate-900"></div>
  <div className="grid grid-cols-12 w-full gap-4 p-4">
          <div className="-mt-12 col-span-3 hidden md:block ">
          <ProfileCard imgSrc={profileImg} name={"Prabhleen Kaur"} email={"prabhleen@gmail.com"} mobileNum={9988909990} address={"Delhi, India"} />
          </div>
          <div className="bg-blue-300 rounded-md shadow-md md:col-span-5 h-[180px] col-span-12 ">
  
          </div>
          <div className="bg-yellow-300 rounded-md shadow-md md:col-span-4 h-[180px] col-span-12">
  
          </div>
        </div>
  </div>
  }

