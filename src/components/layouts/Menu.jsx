import MenuIcon from "../icons/MenuIcon"
import CloseIcon from "../icons/CloseIcon"
import PerfilIcon from "../icons/PerfilIcon"
import ExitIcon from "../icons/ExitIcon"
import {useState,useEffect} from "react"
import {useNavigate} from "react-router-dom"
import styles from "./Menu.module.css"
import {Link} from "react-router-dom"
import Moon from "../icons/Moon"
import Sun from "../icons/Sun"
import HomeIcon from "../icons/HomeIcon"
import AddIcon from "../icons/AddIcon"
import ListIcon from "../icons/ListIcon"
function Menu({selecionado}){
    const [menu,setMenu]=useState(true)
    const [theme,setTheme]=useState(()=>{
        return localStorage.getItem("theme")||"light"
    })
    const navigate=useNavigate()
    function sair(){
        localStorage.clear()
        navigate("/")
    }
    function mudar(){
        if(theme=="light"){
            setTheme("night")
        }else{
            setTheme("light")
        }
    }
    useEffect(()=>{
        localStorage.setItem("theme",theme)
    },[theme])
    return(
        <>
            <div className={`${theme=="light"?"text-black bg-white":"text-white bg-black"} h-[22dvh] w-full justify-around flex items-center`}>
                {menu?(
                    <MenuIcon className={`size-12 ${menu?styles.anima1:""} md:hidden`} onClick={()=>setMenu(false)}/>
                    ):(
                        <CloseIcon className={`size-12 ${!menu?styles.anima:""}`} onClick={()=>setMenu(true)}/>
                    )}
                    <HomeIcon/>
                    <AddIcon/>
                    <ListIcon/>
                <PerfilIcon className={`${theme=="light"?"ring-blue-500 text-blue-500":"ring-white text-white"}`}/>
                    <ul className={`md:hidden bg-linear-to-br from-blue-300 to-blue-500 font-semibold flex flex-col w-full text-white border-black text-center absolute transition-all duration-400 ${menu?"opacity-0 pointer-events-none translate-y-0":"opacity-100 translate-y-[22dvh]"} `}>
                        <Link to="/home" className={`p-4 w-full text-lg ${selecionado=="home"?"bg-blue-900":"bg-transparent"}`}>Home</Link>
                        <Link to="/register" className={`p-4 w-full text-lg ${selecionado=="register"?"bg-blue-900":"bg-transparent"} border-t-2 border-b-2`}>Adicionar contatos</Link>
                        <Link to="/list" className={`p-4 w-full text-lg ${selecionado=="list"?"bg-blue-900":"bg-transparent"}`}>Listar contatos</Link>
                    </ul>
                    {theme=="light"?(
                        <Moon onClick={mudar}/>
                    ):(
                        <Sun onClick={mudar}/>
                    )}
                    <ExitIcon onClick={sair}/>
            </div>
        </>
    )
}
export default Menu