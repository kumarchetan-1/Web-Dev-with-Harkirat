
import React from "react"

interface PropType{
    placeholder: string,
    size?: "small" | "big",
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function TextInput({placeholder, size, onChange }: PropType) {
    
    return <input onChange={onChange}
    type="text" 
    placeholder={placeholder}
    style={{
        padding: size == "big" ? "15px 25px": "10px 15px",
        margin: "10px",
        border: "1px solid gray"
    }} />
}