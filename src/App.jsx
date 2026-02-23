import './App.css'
import Card from "./components/layouts/Card"
import {useState} from "react"
import {useNavigate,Link} from "react-router-dom"
import Loading from "./components/layouts/Loading"
function App() {
  const [email,setEmail]=useState("")
  const [senha,setSenha]=useState("")
  const [msg,setMsg]=useState("")
  const [tipoMsg,setTipoMsg]=useState("")
  const [cardId,setCardId]=useState(0)
  const [isLoading,setIsLoading]=useState(false)
  const navigate=useNavigate()
  if(localStorage.getItem("nome")){
      navigate("/home")
  }
  async function logar(e){
    e.preventDefault()
    setIsLoading(true)
    if(senha!=""&&email!=""){
    await fetch("https://backend-gerenciador-de-contatos-n58u.onrender.com/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({email,senha})
    }).then((response)=>response.json()).then((res)=>{
      setMsg(res.msg)
      setTipoMsg(res.tipo)
      setCardId((e)=>e+1)
      setIsLoading(false)
      if(res.tipo=="success"){
        setTimeout(()=>{
          localStorage.setItem("id_user",res.id)
          localStorage.setItem("nome",res.nome)
          localStorage.setItem("token",res.token)
          setMsg("Redirecionando...")
          navigate("/home")
        },1500)
      }
    })
  }
}
  return (
    <>
    <div className="absolute w-full h-full bg-linear-to-r from-blue-800 to-blue-300 flex items-center justify-center">
      <form onSubmit={logar} className="bg-white py-5 rounded-2xl h-[60%] w-[90%] sm:w-[65%] lg:w-[50%] xl:h-[70%] flex flex-col gap-7">
          <h1 className="text-3xl font-bold text-center">Login</h1>
          <div className="flex flex-col px-5 gap-1">
          <label className="text-gray-600 text-lg px-2">Email:</label>
          <input type="email" className="border rounded-xl p-2 outline-blue-500" onChange={(e)=>setEmail(e.target.value)} required/>
          </div>
          <div className="flex flex-col px-5 gap-1">
          <label className="text-gray-600 text-lg px-2">Senha:</label>
          <input type="password" className="border rounded-xl outline-blue-500 p-2" onChange={(e)=>setSenha(e.target.value)} required/>
          </div>
          <button className="bg-blue-500 h-10 xl:p-5 w-[80%] mx-auto rounded-xl text-white font-semibold flex items-center justify-center hover:cursor-pointer" type="submit">Logar</button>
          <Link to="/cadastro" className="text-center text-blue-500 underline">Cadastrar</Link>
      </form>
      {msg&&msg!=""&&(
        <Card msg={msg} tipo={tipoMsg} key={cardId}/>
      )}
      {isLoading&&(
        <Loading/>
      )}
      </div>
    </>
  )
}
export default App