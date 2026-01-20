import {useState} from "react"
import Card from "../layouts/Card"
function Cadastro(){
    const [nome,setNome]=useState("")
    const [email,setEmail]=useState("")
    const [senha,setSenha]=useState("")
    const [numero,setNumero]=useState("")
    const [msg,setMsg]=useState("")
    const [tipo,setTipo]=useState("")
    async function cadastrar(e){
        e.preventDefault()
        await fetch("http://localhost:8080/create",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },body:JSON.stringify({nome,email,senha,numero})
        }).then((response)=>response.json()).then((res)=>{
            setMsg(res?.msg)
            setTipo(res?.tipo)
        })
    }
    return(
        <>
            <div className="absolute flex flex-col w-full h-full bg-blue-500 gap-4 items-center justify-center text-white">
                <h1 className="w-full flex items-center justify-center text-3xl">Cadastrar usuário</h1>
                <div className="flex flex-col w-full items-center justify-center">
                <label className="text-lg">Email:</label>
                <input type="email" className="p-2 outline-none border w-[80%] rounded-lg" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="flex flex-col w-full items-center justify-center">
                    <label className="text-lg">Nome:</label>
                    <input type="text" className="p-2 outline-none border w-[80%] rounded-lg" onChange={(e)=>setNome(e.target.value)}/>
                </div>
                <div className="flex flex-col w-full items-center justify-center">
                    <label className="text-lg">Senha:</label>
                    <input type="password" className="p-2 outline-none border w-[80%] rounded-lg" onChange={(e)=>setSenha(e.target.value)}/>
                </div>
                <div className="flex flex-col w-full items-center justify-center">
                    <label className="text-lg">Número de contato:</label>
                    <input type="number" className="p-2 outline-none border w-[80%] rounded-lg" onChange={(e)=>setNumero(e.target.value)}/>
                </div>
                <button className="p-2 bg-black text-white w-[60%] rounded-xl" onClick={cadastrar}>Cadastrar</button>
            </div>
                <Card msg="Teste"/>
        </>
    )
}
export default Cadastro