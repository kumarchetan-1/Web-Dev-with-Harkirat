import { Image } from "../Image";

export function ProfileCard({imgSrc, name, email, mobileNum, address}) {
    
    return <div className="shadow-md text-center rounded-xl border bg-white p-10">
        <div className="flex justify-center">
        <Image src={imgSrc} alt={"Prabhleen"} size={"xl"} cornerRadiusClass={"rounded-xl"} />
        </div>
       <h3 className="mt-5 font-bold text-lg"> {name} </h3>
       <p className="mb-2">{email}</p>
       <p className="mb-2">{mobileNum}</p>
       <p className="mb-2">{address}</p>
    </div>
}