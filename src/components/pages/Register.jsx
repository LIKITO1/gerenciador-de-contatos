import Menu from "../layouts/Menu"
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import Card from "../layouts/Card"
function Register(){
    const [numero,setNumero]=useState("")
    const [msg,setMsg]=useState("")
    const [tipoMsg,setTipoMsg]=useState("")
    const [cardId,setCardId]=useState(0)
    const idUser=localStorage.getItem("id_user")
    const navigate=useNavigate()
    async function adicionar(e){
        e.preventDefault()
        await fetch("http://localhost:8080/add",{
            method:"POST",
            headers:{
                authorization:"Bearer "+localStorage.getItem("token"),
                "Content-Type":"application/json"
            },
            body:JSON.stringify({numero,idUser})
        }).then((response)=>response.json()).then((res)=>{
            setMsg(res.msg)
            setTipoMsg(res.tipo)
            setCardId((e)=>e+1)
            if(res.tipo=="success"){
            setTimeout(()=>{
                setMsg("Redirecionando...")
                navigate("/list")
            },1500)
        }
        })
    }
    return(
        <>
        <Menu selecionado="register"/>
            <div className="bg-blue-800 w-full h-[80dvh] px-5 py-20">
                <form className="p-7 flex flex-col gap-8 bg-blue-400 rounded-xl w-full" onSubmit={adicionar}>
                    <h1 className="text-3xl text-center font-bold text-white">Adicionar Contato</h1>
                    <div className="flex flex-col gap-2">
                    <label className="text-xl text-white px-2 font-semibold">Número do contato:</label>
                    <input type="number" className=" bg-white outline-none p-3 w-full rounded-xl" onChange={(e)=>setNumero(e.target.value)} required/>
                    </div>
                    <button className="bg-blue-800 text-white p-3 rounded-2xl m-auto w-[60%] font-semibold text-xl" type="submit">Adicionar</button>
                </form>
            </div>
            {msg&&msg!=""&&(
                <Card msg={msg} tipo={tipoMsg} key={cardId}/>
            )}
        </>
    )
}
export default Register