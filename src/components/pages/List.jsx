import {useEffect,useState} from "react"
import Menu from "../layouts/Menu"
import Card from "../layouts/Card"
function List(){
    const [lista,setLista]=useState([])
    const [msg,setMsg]=useState("")
    const [tipoMsg,setTipoMsg]=useState("")
    useEffect(()=>{
        async function requisitar(){
            await fetch("http://localhost:8080/api",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },body:JSON.stringify({id:localStorage.getItem("id_user")})
            }).then((response)=>response.json()).then((res)=>{
                setLista(res?.contatos)
                if(res.msg&&res.tipo){
                    setMsg(res.msg)
                    setTipoMsg(res.tipo)
                }
            })
        }
        requisitar()
    },[])
    return(
        <>
        <Menu selecionado="list"/>
            <div className="bg-blue-500 w-full h-dvh pt-6 px-3">
                <h1 className="flex w-full font-semibold text-white items-center justify-center text-3xl">Lista de Contatos</h1>
                {lista&&lista.length>0&&(lista.map((valor)=>(
                    <div key={valor?._id} className="bg-linear-to-r from-blue-400 to-blue-700 mt-4 flex text-white flex-wrap justify-evenly py-5 rounded-2xl">
                        <div className="border p-2 rounded-xl">Nome:{valor?.nome}</div>
                        <div className="border p-2 rounded-xl">Número:{valor?.numero}</div>
                        <button className="bg-red-500 p-2 rounded-xl mt-2">Apagar contato</button>
                    </div>
                )))}
                {!lista&&(
                    <h3 className="text-white font-semibold mt-20 flex justify-center items-center text-xl">Nenhum contato adicionado</h3>
                )}
            </div>
            {msg&&msg!=""&&(
                <Card msg={msg} tipo={tipoMsg}/>
            )}
        </>
    )
}
export default List