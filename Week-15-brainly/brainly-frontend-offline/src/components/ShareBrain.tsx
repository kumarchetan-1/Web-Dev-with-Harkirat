import axios from "axios";
import { BACKEND_URL } from "../config";
import { CloseIcon } from "../icons/CloseIcon";
import { CopyIcon } from "../icons/CopyIcon";
import { Button } from "./Button";
import { useState } from "react";

interface ShareResponse{
    link: string
}

export function ShareBrain({onCancel, title, description, numOfItem}:any) {
      const [linkCopyBtnText, setCopyBtnText] = useState("Share Brain")

    function shareLinkCopy() {
        axios.post<ShareResponse>(`${BACKEND_URL}/api/v1/brain/share`, {
                "share": true
              }, {
                headers: {
                  authorization: localStorage.getItem("token")
                }
              }).then(response=> navigator.clipboard.writeText(`${BACKEND_URL}/api/v1${response.data.link}`)
            .then(()=> {
                setCopyBtnText("Link copied to clipboard")
                setTimeout(()=> setCopyBtnText("Share Brain"), 3*1000)
                
            }))
    }
    
    return <div className="fixed left-0 bottom-0 bg-slate-500 w-screen h-screen bg-opacity-90 flex items-center justify-center">
            <div className="max-w-[40%] m-auto bg-white p-6 rounded-md">
                <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">{title}</h3>
                <div onClick={onCancel} className="cursor-pointer" >
                    <CloseIcon size="lg" />
                    </div>
                </div>
                <div className="font-normal">
                    <p>{description}</p>
                </div>
                <Button startIcon={<CopyIcon size="lg" />} onClick={shareLinkCopy} text={linkCopyBtnText} variants="primary" customClass="w-full mt-2" />
                {numOfItem && <p className="text-sm text-gray-500">{numOfItem} will be shared.</p>}
            </div>
        </div>
}