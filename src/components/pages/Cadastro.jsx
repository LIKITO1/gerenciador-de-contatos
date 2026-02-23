import {useState} from "react"
import {useNavigate,Link} from "react-router-dom"
import Card from "../layouts/Card"
function Cadastro(){
    const navigate=useNavigate()
    const [nome,setNome]=useState("")
    const [email,setEmail]=useState("")
    const [senha,setSenha]=useState("")
    const [numero,setNumero]=useState("")
    const [msg,setMsg]=useState("")
    const [tipo,setTipo]=useState("")
    const [cardId,setCardId]=useState(0)
    if(localStorage.getItem("nome")){
        navigate("/home")
    }
    async function cadastrar(e){
        e.preventDefault()
        if(nome!=""&&email!=""&&senha!=""&&numero!=""){
        await fetch("https://backend-gerenciador-de-contatos-n58u.onrender.com/create",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },body:JSON.stringify({nome,email,senha,numero})
        }).then((response)=>response.json()).then((res)=>{
            setMsg(res?.msg)
            setTipo(res?.tipo)
            setCardId((e)=>e+1)
            if(res?.tipo=="success"){
                setTimeout(()=>{
                    setMsg("Redirecionando...")
                    navigate("/home")
                    localStorage.setItem("id_user",res.id)
                },1500)
            }
        })
    }
    }
    return(
        <>
        <div className="absolute flex w-full h-full bg-linear-to-l from-blue-800 to-blue-300 gap-4 items-center justify-center">
            <form onSubmit={cadastrar} className="bg-white p-7 rounded-xl flex flex-col gap-3 w-[90%] sm:w-[65%] lg:w-[50%]">
                <h1 className="w-full text-center text-3xl font-bold">Cadastrar usuário</h1>
                <div className="flex flex-col w-full">
                <label className="text-lg text-gray-600 px-2">Email:</label>
                <input type="email" className="p-2 outline-blue-500 border rounded-lg" onChange={(e)=>setEmail(e.target.value)} required/>
                </div>
                <div className="flex flex-col w-full">
                    <label className="text-lg text-gray-600 px-2">Nome:</label>
                    <input type="text" className="p-2 outline-blue-500 border rounded-lg" onChange={(e)=>setNome(e.target.value)} required/>
                </div>
                <div className="flex flex-col w-full">
                    <label className="text-lg text-gray-600 px-2">Senha:</label>
                    <input type="password" className="p-2 outline-blue-500 border rounded-lg" onChange={(e)=>setSenha(e.target.value)} required/>
                </div>
                <div className="flex flex-col w-full">
                    <label className="text-lg text-gray-600 px-2">Número de contato:</label>
                    <input type="number" className="p-2 outline-blue-500 border rounded-lg" onChange={(e)=>setNumero(e.target.value)} required/>
                </div>
                <button className="p-2 bg-blue-500 text-white w-[70%] rounded-xl font-semibold mx-auto hover:cursor-pointer" type="submit">Cadastrar</button>
                <Link to="/" className="text-center text-blue-500 underline">Logar</Link>
            </form>
            {msg&&msg!=""&&(
                <Card msg={msg} tipo={tipo} key={cardId}/>
            )}
            </div>
        </>
    )
}
export default Cadastro