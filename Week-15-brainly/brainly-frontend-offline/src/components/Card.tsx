import { DeleteIcon } from "../icons/DeleteIcon";
import { PlayIcon } from "../icons/PlayIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { TweetIcon } from "../icons/TweetIcon";
import { CardInterface } from "../interfaces/CardInterface";



const iconType = {
    twitter: <TweetIcon size="md"/>,
    youtube: <PlayIcon size="md" />
}
 
export function Card({title , type, link, customClass,}:CardInterface) {
    
    return <div className={`rounded-md border border-gray-300 bg-white p-4 ${customClass}`}>
         <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 font-medium text-xl">
                <div className="text-gray-500">
                {iconType[type]}
                </div>
                {title}
            </div>
            <div className="flex items-center gap-2 text-gray-500">
                <ShareIcon size="md" />
                <DeleteIcon size="md" />
            </div>
         </div>
         {type =="youtube" && <div className="max-w-full">
            <iframe className="max-w-full rounded mt-4" src={ link?.replace("watch", "embed")?.replace("?v=", "/") } title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
         </div>}

         { type === "twitter" && <blockquote className="twitter-tweet"> 
         <a href={link?.replace("x.com", "twitter.com")}></a> 
       </blockquote>}

         

    </div>
}