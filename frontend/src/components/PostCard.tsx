import { Link } from "react-router-dom"
import { Avatar } from "./Avatar"

interface BlogCardInputType {
    authorName: string,
    title:string,
    content:string,
    publishedDate: string,
    id:string
}

export const PostCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}:BlogCardInputType) => {
    return <Link to={`/post/${id}`}>
    <div className="flex flex-col border-b-2 border-slate-200 p-4 w-screen max-w-screen-md">
        <div className="flex items-center pb-2">
            <Avatar name={authorName} size={10}/> 
            <div>{authorName} . {publishedDate}</div>
        </div>
        <div className="text-2xl font-bold">
            {title}
        </div>
        <div className="text-lg font-semibold text-slate-400">
            {content.slice(0,100) + "..."}
        </div>
        <div className="text-slate-400"> 
            {Math.floor(content.length/100)  + ' minute read'}
        </div>
    </div>
    </Link>
}