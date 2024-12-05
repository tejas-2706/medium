
export const PostSkeleton = () => {
    return <div>
        <div className="flex justify-center">
        <div className="flex flex-col justify-center">
        <div role="status" className="animate-pulse">
            <div className="flex flex-col border-b-2 border-slate-200 p-4 w-screen max-w-screen-md">
                <div className="flex items-center pb-2">
                    <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                </div>
                <div className="text-2xl font-bold">
                    <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                </div>
                <div className="text-lg font-semibold text-slate-400">
                    <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                </div>
                <div className="text-slate-400">
                    <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                </div>
            </div>
        </div>
        </div>
        </div>
    </div>
}