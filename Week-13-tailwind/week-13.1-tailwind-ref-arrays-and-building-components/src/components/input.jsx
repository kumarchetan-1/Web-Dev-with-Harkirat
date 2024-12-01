
export function Input({ placeholder, reference, type, onChange, maxLength, val }) {

    return <input
        ref={reference}
        value={val}
        maxLength={maxLength}
        onChange={onChange}
        type={type}
        className='rounded-lg mb-4 py-3 px-4 w-full bg-blue-500 text-grey-400 border border-1 border-grey-400 outline-none'
        placeholder={placeholder} 
        />
}