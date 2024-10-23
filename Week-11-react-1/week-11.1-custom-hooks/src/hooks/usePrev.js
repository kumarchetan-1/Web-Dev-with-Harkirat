import {useRef, useEffect } from "react"

export function usePrev(value) {
    const ref = useRef()

    console.log(`Re-rendered happend with new value ${value}`)
    useEffect(()=>{
        console.log(`Updated the ref to be ${value}`)
        ref.current = value
    }, [value])

    console.log(`Returned ref ${ref.current}`);
    return ref.current
}