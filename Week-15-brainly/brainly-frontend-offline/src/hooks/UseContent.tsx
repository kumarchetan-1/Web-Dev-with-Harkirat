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
                if (error.response) {
                    console.error(
                        "Server responded with error:",
                        error.response.status,
                        error.response.data
                    );
                } else if (error.request) {
                    console.error("No response received from server:", error.request);
                } else {
                    console.error("Error in setting up the request:", error.message);
                }
            });
    }

    useEffect(() => {
        refresh(); 
        const interval = setInterval(() => refresh(), 10 * 1000)

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [])

    return { contents, refresh };
}