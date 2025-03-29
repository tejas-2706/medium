import { NavBar } from "../components/NavBar"
import { PostCard } from "../components/PostCard"
import { PostSkeleton } from "../components/PostSkeleton";
import { usePosts } from "../hooks/usePosts"

export const Posts = () => {
    const {loading,posts} = usePosts();
    if(loading) {
        return <div>
            <NavBar/>
            <PostSkeleton/>
            <PostSkeleton/>
            <PostSkeleton/>
            <PostSkeleton/>
            <PostSkeleton/>
            <PostSkeleton/>
            <PostSkeleton/>
            <PostSkeleton/>
        </div>
    }
    return <div>
        <NavBar/>
    <div className="flex justify-center">
    <div className="flex flex-col justify-center">
        {posts.map(post => 
            <PostCard 
            id={post.id}
            authorName={post.author.name || "Anonymus"}
            title={post.title}
            content={post.content}
            publishedDate={"4 December 2024"}
            />
        )}
        </div>
    </div>
</div>
}