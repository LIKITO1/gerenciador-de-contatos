import './App.css'
import Card from "./components/layouts/Card"
import {useState} from "react"
import {useNavigate} from "react-router-dom"
function App() {
  const [email,setEmail]=useState("")
  const [senha,setSenha]=useState("")
  const [msg,setMsg]=useState("")
  const [tipoMsg,setTipoMsg]=useState("")
  const [cardId,setCardId]=useState(0)
  const navigate=useNavigate()
  async function logar(e){
    e.preventDefault()
    if(senha!=""&&email!=""){
    await fetch("http://localhost:8080/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({email,senha})
    }).then((response)=>response.json()).then((res)=>{
      setMsg(res.msg)
      setTipoMsg(res.tipo)
      setCardId((e)=>e+1)
      if(res.tipo=="success"){
        setTimeout(()=>{
          setMsg("Redirecionando...")
          navigate("/home")
        },1500)
      }
    })
  }else{
      setMsg("Preencha todos os campos")
      setTipoMsg("warning")
      setCardId((e)=>e+1)
  }
}
  return (
    <>
      <div className="absolute w-full h-full bg-linear-to-l from-blue-300 to-green-300 flex flex-col gap-10">
          <h1 className="mt-20 text-4xl flex items-center justify-center">Login</h1>
          <div className="flex flex-col">
          <label className="items-center justify-center flex">Email:</label>
          <input type="text" className="border w-[75%] mx-auto outline-none p-1" onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="flex flex-col">
          <label className="flex items-center justify-center">Senha:</label>
          <input type="password" className="border w-[75%] mx-auto outline-none p-1" onChange={(e)=>setSenha(e.target.value)}/>
          </div>
          <button className="bg-blue-400 h-10 w-[60%] mx-auto rounded-xl font-semibold" onClick={logar}>Logar</button>
      </div>
      {msg&&msg!=""&&(
        <Card msg={msg} tipo={tipoMsg} key={cardId}/>
      )}
    </>
  )
}
export default App