import { Image } from "../Image";

export function ProfileCard({imgSrc, name, email, mobileNum, address}) {
    
    return <div className="rounded-xl border border-slate-700 bg-white p-10">
        <Image src={imgSrc} alt={"Prabhleen"} size={"xl"} cornerRadiusClass={"rounded-xl"} />
       <h3> {name} </h3>
       <p className="mb-2">{email}</p>
       <p className="mb-2">{mobileNum}</p>
       <p className="mb-2">{address}</p>
    </div>
}