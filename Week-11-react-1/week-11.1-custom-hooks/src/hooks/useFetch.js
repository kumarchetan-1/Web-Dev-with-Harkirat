import {useState, useEffect } from "react"

export function usePostTitle() {
    const [post, setPost] = useState({})

    async function getPosts(){
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
      const data = await response.json()
      setPost(data)
    }
  
    useEffect(()=>{
     getPosts()
    }, [])

    return post.title
}


export function useFetch(url, retryTime) {
    const [finalData, setFinalData] = useState({})
    const [ loading, setLoading ] = useState(true)

    async function getUserDetails() {
        setLoading(true)
        const response = await fetch(url)
        const json = await response.json()
        setFinalData(json)
        setLoading(false)
    }

    useEffect(()=>{
        getUserDetails()
    }, [url])

    useEffect(()=>{
        setInterval(getUserDetails, retryTime * 1000)
    }, [])

    return {
        finalData,
        loading
    }
}