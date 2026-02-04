import {useState,useEffect} from "react"
export default function PerfilIcon({className,onClick}){
    const [initial,setInitial]=useState("")
    useEffect(()=>{
        setInitial(localStorage.getItem("nome")[0])
    },[])
    return(
        <div className={`${className} flex items-center justify-center`}>
            <div onClick={onClick} className="ring-3 uppercase ring-blue-500 text-blue-500 w-full h-18 rounded-full flex items-center justify-center text-3xl font-bold">{initial}</div>
        </div>
    )
}