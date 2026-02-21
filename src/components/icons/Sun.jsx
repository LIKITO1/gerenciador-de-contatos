import {useState} from "react"
import { MdSunny } from "react-icons/md";
export default function Sun({onClick}){
    const [hover,setHover]=useState(false)
    return(
        <div className="flex flex-col items-center justify-center mt-5 hover:cursor-pointer" onMouseLeave={()=>{setHover(false)}} onMouseEnter={()=>{setHover(true)}} onClick={onClick}>
            <MdSunny className="size-12 text-white hover:cursor-pointer"/>
            <small className={`font-semibold ${hover?"opacity-100":"opacity-0"}`}>Tema</small>
        </div>
    )
}