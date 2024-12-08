import { ProfileCard } from "./profileCard";
import profileImg from "../../assets/prabhleen.png"
import { IconButtons } from "./iconButton";
import { CustomWish } from "./CustomWish";
import { UpcomingWebinar } from "./UpcomingWebinar";

export function MainContent() {

  const buttons = [
    {
      key: '1',
      icon: <svg className="max-w-14" width="64px" height="64px" viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path d="M9 20H6C3.79086 20 2 18.2091 2 16V7C2 4.79086 3.79086 3 6 3H17C19.2091 3 21 4.79086 21 7V10" stroke="#000000" ></path> <path d="M8 2V4" stroke="#000000" ></path> <path d="M15 2V4" stroke="#000000" ></path> <path d="M2 8H21" stroke="#000000" ></path> <path d="M18.5 15.6429L17 17.1429" stroke="#000000"></path> <circle cx="17" cy="17" r="5" stroke="#000000"></circle> </g></svg>,
      name: 'Schedule a Webinar',
      customClass: 'basis-5/12 justify-center flex flex-col items-center gap-3',
      btnClass: 'bg-green-400'
    },
    {
      key: '2',
      icon: <svg className="max-w-14" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="#000000" ></path> </g></svg>,
      name: 'Join a Webinar',
      customClass: 'basis-5/12 justify-center flex flex-col items-center gap-3',
      btnClass: 'bg-green-400'
    },
    {
      key: '3',
      icon: <svg className="max-w-14" fill="#000000" width="64px" height="64px" viewBox="-2.5 0 19 19" xmlns="http://www.w3.org/2000/svg" ><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"><path d="M7.365 4.785v9.63c0 .61-.353.756-.784.325l-2.896-2.896H1.708A1.112 1.112 0 0 1 .6 10.736V8.464a1.112 1.112 0 0 1 1.108-1.108h1.977L6.581 4.46c.43-.43.784-.285.784.325zm2.468 7.311a3.53 3.53 0 0 0 0-4.992.554.554 0 0 0-.784.784 2.425 2.425 0 0 1 0 3.425.554.554 0 1 0 .784.783zm1.791 1.792a6.059 6.059 0 0 0 0-8.575.554.554 0 1 0-.784.783 4.955 4.955 0 0 1 0 7.008.554.554 0 1 0 .784.784z"></path></g></svg>,
      name: 'Open Recordings',
      customClass: 'basis-5/12 justify-center flex flex-col items-center gap-3',
      btnClass: 'bg-green-400'
    }
  ]

  const webinars = [
    {
      key: '1',
      title: "Important Webinar",
      time: '11:30 AM',
      status: "live",
      customClass: "mb-4 border-b-2 border-b-slate-300"
    },
    {
      key: '2',
      title: "Webinar 2",
      time: '12:00 PM',
      status: "upcoming",
      customClass: "mb-4 border-b-2 border-b-slate-300"
    },
    {
      key: '3',
      title: "Webinar 3",
      time: '01:30 PM',
      status: "upcoming",
      customClass: "mb-4 border-b-2 border-b-slate-300"
    },
    {
      key: '4',
      title: "Webinar 4",
      time: '04:45 PM',
      status: "upcoming",
      customClass: ""
    }
  ]

  return <div className="h-scrren w-full">
    <div className="w-full h-32 bg-slate-900"></div>
    <div className="grid grid-cols-12 w-full gap-4 p-4">
      <div className="-mt-12 col-span-3 hidden md:block ">
        <ProfileCard imgSrc={profileImg} name={"Prabhleen Kaur"} email={"prabhleen@gmail.com"} mobileNum={9988909990} address={"Delhi, India"} />
      </div>
      <div className="md:col-span-9 col-span-12 grid grid-cols-12 gap-4">
        <div className=" col-span-12 mt-6">
          <CustomWish name={"Prabhleen!"} />
        </div>
        <div className="md:col-span-7 min-h-[180px] col-span-12 ">
          <div className="p-6 border border-slate-300 rounded-md shadow-md md:col-span-5 min-h-[180px] col-span-12 ">
          <div className="mb-3">
          <Calender 
          currentDate={'9 December 2024'}
          />
          </div>
            {webinars.map((webinar) => (
              <UpcomingWebinar
                key={webinar.key}
                title={webinar.title}
                status={webinar.status}
                time={webinar.time}
                customClass={webinar.customClass}
              />
            ))}
          </div>
        </div>
        <div className=" md:col-span-5 min-h-[180px] col-span-12">
          <div className="p-8 rounded-md border border-slate-300 shadow-md">
          <div className="flex gap-8 flex-wrap ">
            {buttons.map((btn) => (
              <IconButtons
                key={btn.key}
                icon={btn.icon}
                name={btn.name}
                customClass={btn.customClass}
                btnClass={btn.btnClass}
              />
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}




function Calender({ currentDate }) {

  return <div className="bg-slate-200 rounded-md p-2">
    <div className="flex justify-between items-center">
      <div className="flex gap-4">
        <svg className="w-5 h-6" fill="#000000" width="64px" height="64px" viewBox="0 0 100.353 100.353" id="Layer_1" xmlns="http://www.w3.org/2000/svg" ><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <g> <path d="M32.286,42.441h-9.762c-0.829,0-1.5,0.671-1.5,1.5v9.762c0,0.828,0.671,1.5,1.5,1.5h9.762c0.829,0,1.5-0.672,1.5-1.5 v-9.762C33.786,43.113,33.115,42.441,32.286,42.441z M30.786,52.203h-6.762v-6.762h6.762V52.203z"></path> <path d="M55.054,42.441h-9.762c-0.829,0-1.5,0.671-1.5,1.5v9.762c0,0.828,0.671,1.5,1.5,1.5h9.762c0.828,0,1.5-0.672,1.5-1.5 v-9.762C56.554,43.113,55.882,42.441,55.054,42.441z M53.554,52.203h-6.762v-6.762h6.762V52.203z"></path> <path d="M77.12,42.441h-9.762c-0.828,0-1.5,0.671-1.5,1.5v9.762c0,0.828,0.672,1.5,1.5,1.5h9.762c0.828,0,1.5-0.672,1.5-1.5v-9.762 C78.62,43.113,77.948,42.441,77.12,42.441z M75.62,52.203h-6.762v-6.762h6.762V52.203z"></path> <path d="M32.286,64.677h-9.762c-0.829,0-1.5,0.672-1.5,1.5v9.762c0,0.828,0.671,1.5,1.5,1.5h9.762c0.829,0,1.5-0.672,1.5-1.5 v-9.762C33.786,65.349,33.115,64.677,32.286,64.677z M30.786,74.439h-6.762v-6.762h6.762V74.439z"></path> <path d="M55.054,64.677h-9.762c-0.829,0-1.5,0.672-1.5,1.5v9.762c0,0.828,0.671,1.5,1.5,1.5h9.762c0.828,0,1.5-0.672,1.5-1.5 v-9.762C56.554,65.349,55.882,64.677,55.054,64.677z M53.554,74.439h-6.762v-6.762h6.762V74.439z"></path> <path d="M77.12,64.677h-9.762c-0.828,0-1.5,0.672-1.5,1.5v9.762c0,0.828,0.672,1.5,1.5,1.5h9.762c0.828,0,1.5-0.672,1.5-1.5v-9.762 C78.62,65.349,77.948,64.677,77.12,64.677z M75.62,74.439h-6.762v-6.762h6.762V74.439z"></path> <path d="M89,13.394h-9.907c-0.013,0-0.024,0.003-0.037,0.004V11.4c0-3.268-2.658-5.926-5.926-5.926s-5.926,2.659-5.926,5.926v1.994 H56.041V11.4c0-3.268-2.658-5.926-5.926-5.926s-5.926,2.659-5.926,5.926v1.994H33.025V11.4c0-3.268-2.658-5.926-5.926-5.926 s-5.926,2.659-5.926,5.926v1.995c-0.005,0-0.01-0.001-0.015-0.001h-9.905c-0.829,0-1.5,0.671-1.5,1.5V92.64 c0,0.828,0.671,1.5,1.5,1.5H89c0.828,0,1.5-0.672,1.5-1.5V14.894C90.5,14.065,89.828,13.394,89,13.394z M70.204,11.4 c0-1.614,1.312-2.926,2.926-2.926s2.926,1.312,2.926,2.926v8.277c0,1.613-1.312,2.926-2.926,2.926s-2.926-1.312-2.926-2.926V11.4z M50.115,8.474c1.613,0,2.926,1.312,2.926,2.926v8.277c0,1.613-1.312,2.926-2.926,2.926c-1.614,0-2.926-1.312-2.926-2.926v-4.643 c0.004-0.047,0.014-0.092,0.014-0.141s-0.01-0.094-0.014-0.141V11.4C47.189,9.786,48.501,8.474,50.115,8.474z M24.173,11.4 c0-1.614,1.312-2.926,2.926-2.926c1.613,0,2.926,1.312,2.926,2.926v8.277c0,1.613-1.312,2.926-2.926,2.926 c-1.614,0-2.926-1.312-2.926-2.926V11.4z M87.5,91.14H12.753V16.394h8.405c0.005,0,0.01-0.001,0.015-0.001v3.285 c0,3.268,2.659,5.926,5.926,5.926s5.926-2.658,5.926-5.926v-3.283h11.164v3.283c0,3.268,2.659,5.926,5.926,5.926 s5.926-2.658,5.926-5.926v-3.283h11.163v3.283c0,3.268,2.658,5.926,5.926,5.926s5.926-2.658,5.926-5.926V16.39 c0.013,0,0.024,0.004,0.037,0.004H87.5V91.14z"></path> </g> </g></svg>
        <h2 className="text-xl font-medium"> {currentDate} </h2>
      </div>
      <div className="flex gap-3">
        <svg className="w-5 h-5 cursor-pointer" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M15 6L9 12L15 18" stroke="#000000" ></path> </g></svg>
        <svg className="w-5 h-5 cursor-pointer" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M9 6L15 12L9 18" stroke="#000000" ></path> </g></svg>
      </div>
    </div>
  </div>
}