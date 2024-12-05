// interface PostDetailsType {
//     "title": string | undefined;
//     "content":string | undefined;
//     "name":string | undefined;
// }

// export const PostDetails = ({title,content,name}:PostDetailsType) => {
//     return <div>
//         <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
//             <div className="mb-6">
//                 <h1 className="text-3xl font-bold text-gray-900 leading-tight">
//                     {title || 'Untitled'}
//                 </h1>
//             </div>
//             <div className="mb-8">
//                 <p className="text-lg text-gray-700">
//                     {content || 'No content available.'}
//                 </p>
//             </div>
//             <div className="flex items-center space-x-4">
//                 <div className="text-sm font-medium text-gray-600">
//                     <span className="font-semibold">Author:</span> {name || 'Unknown'}
//                 </div>
//             </div>
//         </div>
//     </div>
// }







interface PostDetailsType {
    title: string | undefined;
    content: string | undefined;
    name: string | undefined;
}

export const PostDetails = ({ title, content, name }: PostDetailsType) => {
    return (
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-12 transition-transform hover:scale-105">
            {/* Post Title */}
            <div className="mb-6">
                <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
                    {title || 'Untitled'}
                </h1>
                <div className="h-1 w-24 bg-indigo-500 mt-2 rounded"></div>
            </div>

            {/* Post Content */}
            <div className="mb-8">
                <p className="text-lg text-gray-700 tracking-wide leading-relaxed">
                    {content || 'No content available.'}
                </p>
            </div>

            {/* Author Info */}
            <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {name ? name.charAt(0).toUpperCase() : "?"}
                </div>

                <div className="text-sm font-medium text-gray-600">
                    <span className="font-semibold text-gray-800">Author:</span> {name || 'Unknown'}
                </div>
            </div>
        </div>
    );
};
