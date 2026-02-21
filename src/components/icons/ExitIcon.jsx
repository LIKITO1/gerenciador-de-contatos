import {useState} from "react"
import {IoExitOutline} from "react-icons/io5"
function ExitIcon({className,onClick}){
    const [hover,setHover]=useState(false)
    return(
        <div className="flex flex-col items-center justify-center mt-5 hover:cursor-pointer" onMouseLeave={()=>{setHover(false)}} onMouseEnter={()=>{setHover(true)}}>
            <IoExitOutline className="size-12" onClick={onClick}/>
            <small className={`font-semibold ${hover?"opacity-100":"opacity-0"}`}>Desconectar</small>
        </div>
    )
}
export default ExitIcon;