

 interface ButtonProps {
    variant: "primary" | "secondary"
    onclick: () => void
    size: "sm" | "md" | "lg"
    text: string
    startIcon: any
    endIcon: any


}


export function Button(props: ButtonProps) {

    return <button>

    </button>
}


