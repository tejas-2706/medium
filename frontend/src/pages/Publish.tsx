import axios from "axios"
import { NavBar } from "../components/NavBar"
import { BACKEND_URL } from "../config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
export const Publish = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    return <div>
        <NavBar />
        <div>
            <div className="flex flex-col">
                <div className="px-4 py-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Your Title</label>
                    <input onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                        type="text" className="block p-2.5 w-full text-smrounded-lg border focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your Title here ...">
                    </input>
                </div>

                <div className="w-full mb-4 rounded-lg bg-white px-4 py-2 ">
                    <div className=" bg-white rounded-t-lg border">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Your Blog</label>
                        <textarea onChange={(e) => {
                            setContent(e.target.value)
                        }}
                            id="comment" rows={10} className="w-full px-0 text-sm text-gray-900 bg-white border-0 focus:ring-0 dark:placeholder-gray-400" placeholder="Write Your Blog..." required ></textarea>
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 border">
                        <button onClick={async () => {
                            const response = await axios.post(`${BACKEND_URL}/api/v1/post`, {
                                title,
                                content
                            }, {
                                headers: {
                                    Authorization: localStorage.getItem("token")
                                }
                            });
                            console.log(response.data);
                            navigate(`/post/${response.data.id}`)
                        }} type="submit" className="text-white inline-flex items-center py-2.5 px-4 text-xs font-medium text-center bg-black rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                            Post Blog
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

