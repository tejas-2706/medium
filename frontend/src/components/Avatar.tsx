export const Avatar = ({ name,size } : {name:string,size:number}) => {
    return <div className="pr-1">
        <div className={`w-${size} h-${size} rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-lg flex-shrink-0`}>
                    {name ? name.charAt(0).toUpperCase() : "?"}
                </div>
    </div>
}

export const Circle = () =>{
    return <div>
        hello
    </div>
}