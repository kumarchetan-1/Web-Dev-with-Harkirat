import { ShareIcon } from "../icons/ShareIcon";

export function Card( ) {
    
    return <div className="max-w-80 rounded-md border border-gray-300 bg-white p-4">
         <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 font-medium text-xl">
                <div className="text-gray-500">
                <ShareIcon />
                </div>
                Project Ideas
            </div>
            <div className="flex items-center gap-2 text-gray-500">
                <ShareIcon />
                <ShareIcon />
            </div>
         </div>
    </div>
}