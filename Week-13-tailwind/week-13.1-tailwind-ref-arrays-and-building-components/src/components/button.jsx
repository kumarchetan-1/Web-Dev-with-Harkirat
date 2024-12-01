

export function Button({
    disabled, onclick, children, type
}) {

    return <button
        disabled={disabled}
        type={type}
        onClick={onclick}
        className={`w-full text-black rounded-lg py-3 px-4 text-center ${disabled ? "bg-blue-300 text-white" : "bg-green-400"}`}>
        {children}
    </button>
}