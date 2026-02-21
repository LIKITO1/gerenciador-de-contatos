import {useState} from "react"
import {Link} from "react-router-dom"
import { IoIosAddCircleOutline } from "react-icons/io";
function AddIcon(){
    const [hover,setHover]=useState(false)
    return(
            <Link to="/register" className="mt-5 hidden md:flex flex-col items-center justify-center" onMouseLeave={()=>{setHover(false)}} onMouseEnter={()=>{setHover(true)}}>
                <IoIosAddCircleOutline className="size-12 hidden md:block"/>
                <small className={`font-semibold ${hover?"opacity-100":"opacity-0"} transition-all duration-300`}>Adicionar Contatos</small>
            </Link>
    )
}
export default AddIcon