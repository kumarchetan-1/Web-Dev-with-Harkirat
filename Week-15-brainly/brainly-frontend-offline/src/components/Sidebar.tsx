
import { DocumentIcon } from "../icons/DocumentIcon";
import { HashtagIcon } from "../icons/HashtagIcon";
import { LinkIcon } from "../icons/LinkIcon";
import { LogoIcon } from "../icons/LogoIcon";
import { PlayIcon } from "../icons/PlayIcon";
import { TweetOutlineIcon } from "../icons/TweetOutlineIcon";
import { SidebarItemPropTypes } from "../interfaces/SidebarItemPropTypes";
import { SidebarItem } from "./SidebarItem";

interface SidebarTypes {
    itemsArr: SidebarItemPropTypes[]
}

export function SidebarLeft() {
     const sidebarItemsArr = [
        {
            text: "Tweets",
            icon: <TweetOutlineIcon size="lg" />,
            link: "/tweets"
        },
        {
            text: "Youtube",
            icon: <PlayIcon size="lg" />,
            link: "/youtube"
        },
        {
            text: "Documents",
            icon: <DocumentIcon size="lg" />,
            link: "/youtube"
        },
        {
            text: "Links",
            icon: <LinkIcon size="lg" />,
            link: "/youtube"
        },
        {
            text: "Tags",
            icon: <HashtagIcon size="lg" />,
            link: "/youtube"
        }
    ]
    
    
    return <div className="p-4 bg-white min-h-screen left-0 bottom-0 top-0 max-w-72 border-r border-gray-300 fixed w-full">
        <div className="flex items-center justify-start gap-3 text-purple-600 p-3 font-bold text-xl mb-4">
            <LogoIcon size="xl" ></LogoIcon>
            <h1>Brainly</h1>
        </div>
    <Sidebar itemsArr={sidebarItemsArr} />
    </div>
}


 function Sidebar(props: SidebarTypes) {

    return <div>
        { props.itemsArr.map((item)=>{
         return <SidebarItem key={item.text} icon={item.icon} text={item.text} link={item.link} />
        })}
    </div>
}