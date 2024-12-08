export function UpcomingWebinar({title, icon, time, status, customClass}) {
  
    return <div className={`w-full ${customClass} pb-2`}>
      <div className="flex">
      <div className="border-r-2 pr-4 border-r-green-400">
      <time dateTime="HH:MM"> { time } </time>
      <p className="font-light">{time}</p>
      </div>
      <div className="pl-4">
      <div className="flex gap-3">
        <p>{status}</p>
        {icon}
      </div>
      <p className="text-xl font-bold">{title}</p>
      </div>
      </div>
    </div>
  }