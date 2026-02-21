import {Link} from "react-router-dom"
import { CiCircleList } from "react-icons/ci";
import {useState} from "react"
function ListIcon(){
    const [hover,setHover]=useState(false)
    return(
        <Link to="/list" className="hidden md:flex items-center justify-center mt-5 flex-col" onMouseLeave={()=>{setHover(false)}} onMouseEnter={()=>{setHover(true)}}>
            <CiCircleList className="size-12 hidden md:block"/>
            <small className={`font-semibold ${hover?"opacity-100":"opacity-0"} transition-all duration-300`}>Listar Contatos</small>
        </Link>
    )
}
export default ListIcon