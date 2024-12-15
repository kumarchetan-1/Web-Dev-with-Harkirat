
"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import { json } from "stream/consumers"

// export default function User() {
//     const [loading, setLoading] = useState(false)
//     const [data, setData] = useState()

//     useEffect(()=>{
//         axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
//         .then((response)=>{
//             setData(response.data)
//             setLoading(true)
//         })
        
//     }, [])

//     // if (loading) {
//     //  return <div>
//     //     Loading...
//     //  </div>        
//     // }
    
//     return <div>
//         {/* {JSON.stringify(data)} */}
//         {data.name} <br></br>
//         {data.email}
//     </div>
// }

export default async function User() {

       const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")  

        new Promise(r=> setTimeout(r, 5000)) 
        const data = await response.data  

    return <div>
        {/* {JSON.stringify(data)} */}
        {data.name} <br></br>
        {data.email}
    </div>
}