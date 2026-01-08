import MenuIcon from "../icons/MenuIcon"
import CloseIcon from "../icons/CloseIcon"
import {useState} from "react"
function Menu(){
    const [menu,setMenu]=useState(false)
    return(
        <>
            <div className="absolute h-24 text-black bg-white w-full justify-around flex">
                <img src="./contactus_logo.png"></img>
                <MenuIcon className={`size-9 mt-7 right-6 absolute transition-all duration-300 ${menu?"opacity-100":"opacity-0 pointer-events-none rotate-45"}`} onClick={()=>setMenu(false)}/>
                <CloseIcon className={`size-9 mt-7 right-6 absolute transition-all duration-300 ${menu?"opacity-0 pointer-events-none rotate-45":"opacity-100"}`} onClick={()=>setMenu(true)}/>
            </div>
        </>
    )
}
export default Menu