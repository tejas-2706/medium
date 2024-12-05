// import { PostSkeleton } from "../components/PostSkeleton";
import { NavBar } from "../components/NavBar";
import { usePost } from "../hooks/usePosts"
import { useParams } from "react-router-dom";
import { PostDetails } from "./PostDetails";
export const Post = () => {
    const { id } = useParams();
    const { loading, post } = usePost({
        id: id || ""
    });
    if (loading) {
        return <div>
            <NavBar/>
        <div className="flex flex-col justify-center h-screen">
            <div className="flex justify-center">
                <div className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-green-600 rounded-full" role="status" aria-label="loading">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
        </div>
    }
    return <div>
        <NavBar/>
        <PostDetails title={post?.title} content={post?.content} name={post?.author.name} />
    </div>
}
