
export function IconButtons({ icon, name, customClass, btnClass }) {

    return <div className={`cursor-pointer ${customClass}`}>
      <div className={`w-[60px] h-[60px] box-border flex justify-center items-center rounded-xl ${btnClass} p-3`}>
        {icon}
      </div>
      <p className="text-sm font-medium"> {name} </p>
    </div>
  }