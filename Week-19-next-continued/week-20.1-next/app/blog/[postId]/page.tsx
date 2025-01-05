import axios from "axios"



export default async function blog({params}:any) {
    const postId = (await params).postId

    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const user = response.data
    return <div>
        <div>
            Blog Post {postId}

            <div>Title: {user.title}</div>
            <div>Body: {user.body}</div>
        </div>
    </div>
}