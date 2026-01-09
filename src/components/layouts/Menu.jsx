import MenuIcon from "../icons/MenuIcon"
import CloseIcon from "../icons/CloseIcon"
import PerfilIcon from "../icons/PerfilIcon"
import {useState} from "react"
import {Link} from "react-router-dom"
function Menu({selecionado}){
    const [menu,setMenu]=useState(true)
    return(
        <>
            <div className="h-24 text-black bg-white w-full justify-around flex">
                <img src="./contactus_logo.png" className="h-24"></img>
                <PerfilIcon className="size-12 h-full mr-24"/>
                <MenuIcon className={`size-9 mt-7 right-6 absolute transition-all duration-300 ${menu?"opacity-100":"opacity-0 pointer-events-none rotate-45"}`} onClick={()=>setMenu(false)}/>
                <CloseIcon className={`size-9 mt-7 right-6 absolute transition-all duration-300 ${menu?"opacity-0 pointer-events-none rotate-45":"opacity-100"}`} onClick={()=>setMenu(true)}/>
                    <ul className={`bg-linear-to-br from-blue-300 to-blue-500 font-semibold flex flex-col w-full text-white border-black text-center absolute transition-all duration-300 ${menu?"opacity-0 pointer-events-none":"opacity-100"} mt-24`}>
                        <Link to="/home" className={`p-4 w-full ${selecionado=="home"?"bg-blue-900":"bg-transparent"}`}>Home</Link>
                        <Link to="/register" className={`${selecionado=="register"?"bg-blue-900":"bg-transparent"} p-4 w-full`}>Cadastro de contatos</Link>
                        <Link to="/list" className={`p-4 w-full ${selecionado=="list"?"bg-blue-900":"bg-transparent"}`}>Listar contatos</Link>
                    </ul>
            </div>
        </>
    )
}
export default Menu