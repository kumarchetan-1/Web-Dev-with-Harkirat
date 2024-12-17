import { ReactElement } from "react"


interface ButtonProps {
    variant: "primary" | "secondary"
    onclick?: () => void
    size: "sm" | "md" | "lg"
    text: string
    startIcon?: ReactElement
    endIcon?: ReactElement
}

const btnVariant = {
    "primary": "bg-purple-700 text-white",
    "secondary": "bg-purple-200 text-purple-700"
}

const defaultStyle = 'rounded-md '
const sizes = {
    "sm": "px-2 py-1",
    "md": "px-6 py-2",
    "lg": "px-4 py-4"
}

export function Button(props: ButtonProps) {

    return <button onClick={props.onclick} className={`${btnVariant[props.variant]} ${defaultStyle} ${sizes[props.size]}`} >
        {(props.startIcon || props.endIcon) ? 
        <div className='flex gap-1 items-center' >
            {props.startIcon}
            <span>{props.text}</span>
            {props.endIcon}
        </div> : props.text }


    </button>
}


