import {useState,useEffect} from "react"
import styles from "./Card.module.css"
function Card({msg,tipo}){
    const [fundo,setFundo]=useState("")
    const [display,setDisplay]=useState("flex")
    useEffect(()=>{
        if(tipo=="success"){
            setFundo("bg-emerald-400")
        }else if(tipo=="error"){
            setFundo("bg-red-300")
        }else{
            setFundo("bg-yellow-300")
        }
        const time=setTimeout(()=>{
            setDisplay("hidden")
            clearTimeout(time)
        },3000) 
    },[tipo])
    return(
        <>
            <div className={`absolute w-full h-[13%] text-black flex items-center justify-center ${styles.aparecer} top-[10%] ${display}`}>
                <p className={`${fundo} p-2 w-[90%] h-full flex items-center justify-center text-lg font-semibold`}>{msg}</p>
            </div>
        </>
    )
}
export default Card