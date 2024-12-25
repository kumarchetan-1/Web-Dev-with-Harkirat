import axios from "axios";
import { BACKEND_URL } from "../config";
import { CloseIcon } from "../icons/CloseIcon";
import { CopyIcon } from "../icons/CopyIcon";
import { Button } from "./Button";
import { useState } from "react";

interface ShareResponse { 
  link: string
}

interface ShareBrainProps {
  onCancel: () => void;
  title: string;
  description: string;
  numOfItem?: number;
}

export function ShareBrain({ onCancel, title, description, numOfItem }: ShareBrainProps) {
  const [linkCopyBtnText, setCopyBtnText] = useState("Share Brain")
  const [sharedLink, setSharedLink] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function handleCopyLink() {
    setLoading(true)
    axios.post<ShareResponse>(`${BACKEND_URL}/api/v1/brain/share`, {
      "share": true
    }, {
      headers: {
        authorization: localStorage.getItem("token")
      }
    }).then(response => {
      const link = `${ window.location.hostname === "localhost"? "http://": "https://" }${window.location.host}/share${response.data.link}`
      setSharedLink(link)
      navigator.clipboard.writeText(link)
        .then(() => {
          setCopyBtnText("Link copied to clipboard")
          setLoading(false);
          setTimeout(() => setCopyBtnText("Share Brain"), 3 * 1000)
        })
    })
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
      <Button
        startIcon={<CopyIcon size="lg" />}
        onClick={handleCopyLink}
        text={loading ? "Sharing.." : linkCopyBtnText}
        loading={loading}
        variants="primary" customClass="w-full mt-2" />

      {sharedLink && (
        <div className="mt-4">
          <p className="text-sm text-gray-500">
            <span className="font-medium">Your shared brain link:</span>
            <a href={sharedLink} target="_blank" rel="noopener noreferrer" className="text-blue-600">
              {sharedLink}
            </a>
          </p>
        </div>
      )}
      {numOfItem && <p className="text-sm text-gray-500">{ numOfItem } will be shared.</p>}
    </div>
  </div>
}