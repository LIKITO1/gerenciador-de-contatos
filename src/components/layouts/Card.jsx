import {useState,useEffect} from "react"
function Card({msg,tipo}){
    const [fundo,setFundo]=useState("")
    useEffect(()=>{
        if(tipo=="success"){
            setFundo("bg-emerald-400")
        }else{
            setFundo("bg-red-300")
        }
    },[tipo])
    return(
        <>
            <div className="absolute w-full h-[13%] text-black flex items-center justify-center mt-5">
                <p className={`${fundo} p-2 w-[80%] h-full flex items-center justify-center`}>{msg}</p>
            </div>
        </>
    )
}
export default Card