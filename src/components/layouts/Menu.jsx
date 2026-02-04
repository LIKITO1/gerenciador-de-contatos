import MenuIcon from "../icons/MenuIcon"
import CloseIcon from "../icons/CloseIcon"
import PerfilIcon from "../icons/PerfilIcon"
import ExitIcon from "../icons/ExitIcon"
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import styles from "./Menu.module.css"
import {Link} from "react-router-dom"
function Menu({selecionado}){
    const [menu,setMenu]=useState(true)
    const navigate=useNavigate()
    function sair(){
        localStorage.clear()
        navigate("/")
    }
    return(
        <>
            <div className="h-[20dvh] text-black bg-white w-full justify-around flex items-center">
                {menu?(
                    <MenuIcon className={`size-12 ${menu?styles.anima1:""}`} onClick={()=>setMenu(false)}/>
                    ):(
                        <CloseIcon className={`size-12 ${!menu?styles.anima:""}`} onClick={()=>setMenu(true)}/>
                    )}
                <PerfilIcon className="size-18 h-full"/>
                    <ul className={`bg-linear-to-br from-blue-300 to-blue-500 font-semibold flex flex-col w-full text-white border-black text-center absolute transition-all duration-400 ${menu?"opacity-0 pointer-events-none translate-y-0":"opacity-100 translate-y-[22dvh]"}`}>
                        <Link to="/home" className={`p-4 w-full text-lg ${selecionado=="home"?"bg-blue-900":"bg-transparent"}`}>Home</Link>
                        <Link to="/register" className={`p-4 w-full text-lg ${selecionado=="register"?"bg-blue-900":"bg-transparent"}`}>Adicionar contatos</Link>
                        <Link to="/list" className={`p-4 w-full text-lg ${selecionado=="list"?"bg-blue-900":"bg-transparent"}`}>Listar contatos</Link>
                    </ul>
                    <ExitIcon className={"size-12"} onClick={sair}/>
            </div>
        </>
    )
}
export default Menu