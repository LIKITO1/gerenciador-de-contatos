import {useState} from "react"
import {Link} from "react-router-dom"
import { IoMdHome } from "react-icons/io";
function HomeIcon(){
    const [hover,setHover]=useState(false)
    return(
        <Link to="/home" className="hidden md:flex flex-col items-center mt-5 justify-center" onMouseLeave={()=>{setHover(false)}} onMouseEnter={()=>{setHover(true)}}>
            <IoMdHome className="size-12 hidden md:block"/>
            <small className={`font-semibold ${hover?"opacity-100":"opacity-0"}`}>Home</small>
        </Link>
    )
}
export default HomeIcon