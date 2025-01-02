import axios from "axios"


async function getBlogs() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos")

    return response.data
}

export default async function Blogs() {
    const blogs = await getBlogs()
    return <div>
      { blogs.map((blog: TodoInterface) => <Todo title={blog.title} completed={blog.completed} />) }
    </div>
}

interface TodoInterface{
    title: string,
    completed: boolean
}

function Todo({title, completed}: TodoInterface) {
    
    return <div>
        <h3>{title}</h3>
        <h5>{completed ? "Done" : "incomplete"}</h5>
    </div>
}