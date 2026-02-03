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
            <div className="bg-blue-800 w-full h-full py-10 flex items-center justify-center">
                <form className=" w-[90%] p-[8%] flex flex-col gap-5 bg-blue-400 rounded-xl" onSubmit={adicionar}>
                    <h1 className="text-3xl text-center font-bold text-white">Adicionar Contato</h1>
                    <div className="flex flex-col gap-1">
                    <label className="text-lg text-white px-2">Nome:</label>
                    <input type="text" className=" bg-white outline-none p-2 w-full rounded-xl" onChange={(e)=>setNome(e.target.value)} required/>
                    </div>
                    <div className="flex flex-col gap-1">
                    <label className="text-lg text-white px-2">Número do contato:</label>
                    <input type="number" className=" bg-white outline-none p-2 w-full rounded-xl" onChange={(e)=>setNumero(e.target.value)} required/>
                    </div>
                    <button className="bg-blue-800 text-white p-3 rounded-2xl m-auto w-[60%] font-bold" type="submit">Adicionar</button>
                </form>
            </div>
            {msg&&msg!=""&&(
                <Card msg={msg} tipo={tipoMsg} key={cardId}/>
            )}
        </>
    )
}
export default Register