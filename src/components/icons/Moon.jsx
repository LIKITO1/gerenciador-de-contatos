import {useState} from "react"
import {FaMoon} from "react-icons/fa6"
export default function Moon({onClick}){
    const [hover,setHover]=useState(false)
    return(
        <div className="flex flex-col items-center justify-center mt-5 hover:cursor-pointer" onMouseLeave={()=>{setHover(false)}} onMouseEnter={()=>{setHover(true)}} onClick={onClick}>
            <FaMoon className="size-12 hover:cursor-pointer" onClick={onClick}/>
            <small className={`font-semibold ${hover?"opacity-100":"opacity-0"}`}>Tema</small>
        </div>
    )
}