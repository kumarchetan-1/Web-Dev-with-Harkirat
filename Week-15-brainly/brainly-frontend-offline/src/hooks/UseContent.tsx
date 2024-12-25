import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import { CardInterface } from "../interfaces/CardInterface";
import axios from "axios";

interface ContentResponseInterface {
    content: CardInterface[];
}

export function useContent() {
    const [contents, setContents] = useState<CardInterface[]>([]);

    // Refresh function to fetch content
    function refresh() {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("Authorization token missing");
            return;
        }

        axios.get<ContentResponseInterface>(`${BACKEND_URL}/api/v1/content`, {
                headers: {
                    "authorization": token,
                },
            }).then((response) => {
                if (response.data.content) {
                    setContents(response.data.content);
                } else {
                    console.warn("No content received from API");
                }
            }).catch((error) => {
                    console.error("No response received from server:", error);
            });
    }

   const deleteContent =  (_id: string)=>{
        try {
            axios.request({
                method: 'delete',
                url: `${BACKEND_URL}/api/v1/content`,
                headers: {
                    Authorization: localStorage.getItem('token')
                },
                data:{ _id } 
             }).then(()=>{
                setContents((prevContents)=> prevContents.filter((content)=> content._id !== _id))
                console.log("Content deleted successful"); 
            }).catch((error)=> console.log(`Error deleting content ${error}`))
             
        } catch (error) {
            console.error(`Error deleting this content ${error}`)
        }
    }

    useEffect(() => {
        refresh(); 
        const interval = setInterval(() => refresh(), 10 * 1000)

        return () => clearInterval(interval); 
    }, [])

    return { contents, refresh, deleteContent };
}