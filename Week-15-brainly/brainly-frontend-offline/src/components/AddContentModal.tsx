import { useRef, useState } from "react"
import { Button } from "./Button"
import { Input } from "./Input"
import axios from "axios"
import { BACKEND_URL } from "../config"

enum ContentType {
    Youbtube = "youtube",
    Twitter = "twitter"
}

export function AddContentModal({ title, onCancel }: { title?: string, onSubmit?: () => void, onCancel: () => void }) {
    const contentTitleRef = useRef<HTMLInputElement>()
    const contentLinkRef = useRef<HTMLInputElement>()
    const [type, setType] = useState("Youtube")

    async function addContent() {
        const title = contentTitleRef.current?.value
        const link = contentLinkRef.current?.value

        try {
            await axios.post(`${BACKEND_URL}/api/v1/content`,
                {
                    link,
                    title,
                    type
                },
                {
                    headers: {
                        'content-type': 'Application/JSON',
                        Authorization: localStorage.getItem("token")
                    }
                }
            )
            alert("Content Added to the DB")
        } catch (error) {
            alert(error)
        }
    }

    return <div className="fixed left-0 bottom-0 bg-slate-500 w-screen h-screen bg-opacity-90 flex items-center justify-center">
        <div className="max-w-[40%] m-auto bg-white p-6 rounded-md">
            <div onClick={onCancel} className="max-w-[24px] ml-auto mr-0 cursor-pointer mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
            <div>{title}</div>
            <Input reference={contentTitleRef} placeholder="Content Title"></Input>
            <Input reference={contentLinkRef} placeholder="Embed Link"></Input>
            <div className="flex gap-4 items-center">
                <Button text="Youtube"
                    variants={type === ContentType.Youbtube ? "primary" : "secondary"}
                    onClick={() => setType(ContentType.Youbtube)} >
                </Button>
                <Button text="Twitter"
                    variants={type === ContentType.Twitter ? "primary" : "secondary"}
                    onClick={() => setType(ContentType.Twitter)} >
                </Button>
            </div>
            <Button onClick={addContent} text="Submit" variants="primary" customClass="w-full mt-2" />
        </div>
    </div>
}

