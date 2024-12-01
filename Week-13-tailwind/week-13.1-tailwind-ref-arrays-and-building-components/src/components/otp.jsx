import { useRef, useState } from "react";
import { Button } from "./button";


export function Otp({ otpLength }) {
    const inputRefs = useRef(Array.from({ length: otpLength }, () => null))
    const [disabled, setDisabled] = useState(true)
    const allInputsFilled = () => inputRefs.current.every((input) => (input?.value.trim() !== ""))

    return <div className="max-w-xs mx-auto">
        <div className="flex justify-center mb-6">
            {Array.from({ length: otpLength }).map((_, index) =>
                <SubOtpBox reference={e => inputRefs.current[index] = e}
                    key={index}
                    onDone={(e) => {
                        setDisabled(!allInputsFilled())
                        const nextInput = inputRefs.current[index + 1]
                        if (nextInput) nextInput.focus()
                            // console.log(inputRefs.current)
                    }}
                    goBack={(e) => {
                        const currentInput = inputRefs.current[index]
                        const prevInput = inputRefs.current[index - 1]
                        if (currentInput) currentInput.value = ""
                        if (prevInput) prevInput.focus()
                        setDisabled(!allInputsFilled())
                    }}
                    clearCurrent={()=>{
                        const currentInput = inputRefs.current[index]
                        if (currentInput) currentInput.value = ""
                        setDisabled(!allInputsFilled())
                    }}
                />
            )}
        </div>
        <Button disabled={disabled} > Sign Up </Button>
    </div>
}

function SubOtpBox({ reference, onDone, goBack, clearCurrent }) {
    const [inputBoxVal, setInputBoxVal] = useState('')

    return <input
        value={inputBoxVal}
        ref={reference}
        type={"text"}
        maxLength={1}
        onChange={(e) => {
            const val = e.target.value
            if (/^[0-9]$/.test(val)) {
                setInputBoxVal(val)
                onDone(e)
            } else{
                e.target.value = ""
            }
        }} onKeyDown={(e) => {
            if (e.key == "Backspace") {
                if(e.target.value === ""){
                    goBack()
                } else{
                  clearCurrent()
                }
            } else if (e.key === 'ArrowLeft') {
                goBack()
            } else if (e.key === 'ArrowRight') {
                onDone(e)
            }
        }}
        className="outline-none m-1 appearance-none rounded-xl w-[46px] p-4 h-[50px] bg-blue-500 border border-blue-300 text-white " />

}

