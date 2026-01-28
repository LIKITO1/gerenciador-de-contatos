import MenuIcon from "../icons/MenuIcon"
import CloseIcon from "../icons/CloseIcon"
import PerfilIcon from "../icons/PerfilIcon"
import ExitIcon from "../icons/ExitIcon"
import {useState} from "react"
import styles from "./Menu.module.css"
import {Link} from "react-router-dom"
function Menu({selecionado}){
    const [menu,setMenu]=useState(true)
    return(
        <>
            <div className="h-24 text-black bg-white w-full justify-around flex items-center">
                <img src="./contactus_logo.png" className="h-24"></img>
                <PerfilIcon className="size-12 h-full"/>
                {menu?(
                    <MenuIcon className={`size-9 ${menu?styles.anima1:""}`} onClick={()=>setMenu(false)}/>
                    ):(
                        <CloseIcon className={`size-9 ${!menu?styles.anima:""}`} onClick={()=>setMenu(true)}/>
                    )}
                    <ul className={`bg-linear-to-br from-blue-300 to-blue-500 font-semibold flex flex-col w-full text-white border-black text-center absolute transition-all duration-300 ${menu?"opacity-0 pointer-events-none":"opacity-100"} mt-66`}>
                        <Link to="/home" className={`p-4 w-full ${selecionado=="home"?"bg-blue-900":"bg-transparent"}`}>Home</Link>
                        <Link to="/register" className={`${selecionado=="register"?"bg-blue-900":"bg-transparent"} p-4 w-full`}>Adicionar contatos</Link>
                        <Link to="/list" className={`p-4 w-full ${selecionado=="list"?"bg-blue-900":"bg-transparent"}`}>Listar contatos</Link>
                    </ul>
                    <ExitIcon className={"size-9"}/>
            </div>
        </>
    )
}
export default Menu