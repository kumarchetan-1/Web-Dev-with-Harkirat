

interface InputProps {
    placeholder: string,
    reference?: any
}

export function Input({placeholder, reference}: InputProps){
    return <input ref={reference} placeholder={placeholder}
        className="rounded border border-gray-500 mb-3 w-full p-2 text-black placeholder-slate-500"
        type="text" />
}
