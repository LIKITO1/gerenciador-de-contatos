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
                    <div key={valor?._id} className="bg-white flex flex-wrap justify-around py-4 rounded-2xl mt-4">
                        <div className="flex flex-col">
                            <div className="text-lg font-bold">Nome:{valor?.nome}</div>
                            <div className="text-sm font-semibold text-gray-600">Número:{valor?.numero}</div>
                        </div>
                        <button className="bg-red-500 text-sm py-1 px-3 rounded-xl font-semibold text-white">Apagar</button>
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