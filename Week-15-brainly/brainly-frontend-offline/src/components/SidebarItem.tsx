
import { SidebarItemPropTypes } from "../interfaces/SidebarItemPropTypes";



export function SidebarItem(props: SidebarItemPropTypes) {

    return <div className="text-gray-600 w-full p-3 hover:bg-gray-400 rounded-md">
        <a className="flex items-center justify-start gap-6" href={props.link}>
            {props.icon}
            <div className="">
                {props.text}
            </div>
        </a>
    </div>
}