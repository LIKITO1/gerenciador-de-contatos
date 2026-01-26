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
        setTimeout(()=>{
            setDisplay("hidden")
        },3000) 
    },[tipo])
    return(
        <>
            <div className={`absolute w-full h-[13%] text-black flex items-center justify-center mt-5 ${styles.aparecer} top-[5%] ${display}`}>
                <p className={`${fundo} p-2 w-[80%] h-full flex items-center justify-center`}>{msg}</p>
            </div>
        </>
    )
}
export default Card