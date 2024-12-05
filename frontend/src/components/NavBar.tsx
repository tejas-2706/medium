import { Link } from "react-router-dom"
import { Avatar } from "./Avatar"

export const NavBar = () => {
    return <div className="flex border-b border-slate-200 justify-between p-4">
        <Link to={'/posts'}>
        <div className="text-4xl font-bold">
            Blogers
        </div>
        </Link>
        <div>
            <div className="flex">
                <Link to={"/publish"}>
            <button type="button" className="text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 font-medium rounded-full text-sm px-5 py-2 text-center me-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-700">
                Publish
            </button>
                </Link>
                <Avatar name="tejas" size={10}/>
            </div>
        </div>
    </div>
}