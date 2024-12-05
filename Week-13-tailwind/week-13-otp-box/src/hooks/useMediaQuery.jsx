import { useEffect, useState } from "react"

// useMediaQuery Custom hook
export function useMediaQuery(query) {
    const [matches, setMatches] = useState(false)
  
    useEffect(()=>{
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    media.addEventListener('change', ()=>setMatches(media.matches))
    return media.removeEventListener('change', ()=> setMatches(media.matches))
    },[matches, query])
  
    return matches
  }