import {useState,useEffect} from "react"
export default function PerfilIcon({className,onClick}){
    const [initial,setInitial]=useState("")
    useEffect(()=>{
        setInitial(localStorage.getItem("nome")[0])
    },[])
    return(
        <div className={`size-18 h-full flex items-center justify-center`}>
            <div onClick={onClick} className={`ring-3 uppercase ${className} w-full h-18 rounded-full flex items-center justify-center text-3xl font-bold`}>{initial}</div>
        </div>
    )
}