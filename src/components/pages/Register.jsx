import Menu from "../layouts/Menu"
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import Card from "../layouts/Card"
import { addService } from "../../services/addService"
import Loading from "../layouts/Loading"
function Register(){
    const [numero,setNumero]=useState("")
    const [msg,setMsg]=useState("")
    const [tipoMsg,setTipoMsg]=useState("")
    const [cardId,setCardId]=useState(0)
    const [isLoading,setIsLoading]=useState(false)
    const idUser=localStorage.getItem("id_user")
    const navigate=useNavigate()
    async function adicionar(e){
        e.preventDefault()
        setIsLoading(true)
        const res=await addService(numero,idUser)
        setMsg(res.msg)
        setTipoMsg(res.tipo)
        setCardId((e)=>e+1)
        setIsLoading(false)
        if(res.tipo=="success"){
        setTimeout(()=>{
            setMsg("Redirecionando...")
            navigate("/list")
        },1500)
    }
    }
    return(
        <>
        <Menu selecionado="register"/>
            <div className="bg-blue-800 w-full h-[80dvh] flex items-center justify-center">
                <form className="p-7 flex flex-col gap-8 bg-blue-400 rounded-xl w-[90%] sm:w-[70%] sm:h-[60%] lg:w-[50%] xl:h-[70%] xl:w-[40%]" onSubmit={adicionar}>
                    <h1 className="text-3xl text-center font-bold text-white">Adicionar Contato</h1>
                    <div className="flex flex-col gap-2">
                    <label className="text-xl text-white px-2 font-semibold sm:mt-[5%]">Número do contato:</label>
                    <input type="number" className=" bg-white outline-none p-3 w-full rounded-xl" onChange={(e)=>setNumero(e.target.value)} required/>
                    </div>
                    <button className="bg-blue-800 text-white p-3 rounded-2xl mx-auto w-[60%] font-semibold text-xl hover:cursor-pointer" type="submit">Adicionar</button>
                </form>
            </div>
            {msg&&msg!=""&&(
                <Card msg={msg} tipo={tipoMsg} key={cardId}/>
            )}
            {isLoading&&(
                <Loading/>
            )}
        </>
    )
}
export default Register