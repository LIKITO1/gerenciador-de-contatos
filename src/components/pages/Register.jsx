import Menu from "../layouts/Menu"
import {useState} from "react"
import Card from "../layouts/Card"
function Register(){
    const [nome,setNome]=useState("")
    const [numero,setNumero]=useState("")
    const [msg,setMsg]=useState("")
    const [tipoMsg,setTipoMsg]=useState("")
    const [cardId,setCardId]=useState(0)
    const idUser=localStorage.getItem("id_user")
    async function adicionar(e){
        e.preventDefault()
        await fetch("http://localhost:8080/add",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({nome,numero,idUser})
        }).then((response)=>response.json()).then((res)=>{
            setMsg(res.msg)
            setTipoMsg(res.tipo)
            setCardId((e)=>e+1)
        })
    }
    return(
        <>
        <Menu selecionado="register"/>
            <div className="bg-blue-500 w-full h-dvh">
                <form className="w-full p-[8%] flex flex-col gap-10" onSubmit={adicionar}>
                    <h1 className="text-4xl text-white flex items-center justify-center mt-6">Adicionar Contato</h1>
                    <div className="flex flex-col items-center justify-center text-white">
                    <label className="mb-2 text-lg">Nome:</label>
                    <input type="text" className="border-white border-2 outline-none p-2 w-full rounded-xl" onChange={(e)=>setNome(e.target.value)} required/>
                    </div>
                    <div className="flex flex-col items-center justify-center text-white">
                    <label className="mb-2 text-lg">Número do contato:</label>
                    <input type="number" className="border-white border-2 outline-none p-2 w-full rounded-xl" onChange={(e)=>setNumero(e.target.value)} required/>
                    </div>
                    <button className="bg-black text-white p-3 rounded-2xl m-auto w-[60%]" type="submit">Adicionar</button>
                </form>
            </div>
            {msg&&msg!=""&&(
                <Card msg={msg} tipo={tipoMsg} key={cardId}/>
            )}
        </>
    )
}
export default Register