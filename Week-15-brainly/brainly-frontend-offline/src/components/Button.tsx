import { ReactElement } from "react"

interface ButtonProps {
    variants: "primary" | "secondary",
    text: string,
    startIcon?: ReactElement,
    endIcon?: ReactElement,
}

const variantClasses = {
    primary: "bg-purple-600 text-white border hover:bg-purple-200 hover:text-purple-600 hover hover:border-purple-600",
    secondary: "bg-purple-200 text-purple-600 border hover:bg-purple-600 hover:text-white hover:border-purple-600"
}

const defaultStyles = "flex items-center justify-center px-4 py-2 rounded-md transition-all delay-100 ease-in-out font-thin hover:transition-all hover:delay-100 hover:ease-in-out"

export function Button({variants, text, startIcon, endIcon}: ButtonProps) {

    return <button className={` ${variantClasses[variants]} ${defaultStyles}`}>
        <div className="pr-2">
        {startIcon}
        </div>
        {text}    
        {endIcon}
    </button>
}