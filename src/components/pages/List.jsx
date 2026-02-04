import {useEffect,useState} from "react"
import Menu from "../layouts/Menu"
import Card from "../layouts/Card"
function List(){
    const [lista,setLista]=useState([])
    const [msg,setMsg]=useState("")
    const [tipoMsg,setTipoMsg]=useState("")
    async function apagar(valor){
        await fetch("https://backend-gerenciador-de-contatos-n58u.onrender.com/delete",{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            },body:JSON.stringify({id_people:valor,id_user:localStorage.getItem("id_user")})
        }).then((response)=>response.json()).then((res)=>{
            setMsg(res.msg)
            setTipoMsg(res.tipo)
            setTimeout(()=>{
                window.location.reload()
            },1500) 
        })
    }
    useEffect(()=>{
        async function requisitar(){
            await fetch("https://backend-gerenciador-de-contatos-n58u.onrender.com/api",{
                method:"POST",
                headers:{
                    authorization:"Bearer "+localStorage.getItem("token"),
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
        {localStorage.getItem("token")&&localStorage.getItem("token")!=""&&(
            <>
        <Menu selecionado="list"/>
            <div className="bg-blue-500 w-full h-[80dvh] pt-6 px-3">
                <h1 className="flex w-full font-semibold text-white items-center justify-center text-4xl">Lista de Contatos</h1>
                {lista&&lista.length>0&&(lista.map((valor)=>(
                    <div key={valor?._id} className="bg-white flex flex-wrap justify-around py-4 rounded-2xl mt-6">
                        <div className="flex flex-col">
                            <div className="text-xl font-bold">Nome:{valor?.nome}</div>
                            <div className="text-md font-semibold text-gray-600">Número:{valor?.numero}</div>
                        </div>
                        <button className="bg-red-500 text-md py-2 px-3 rounded-xl font-semibold text-white" onClick={()=>{apagar(valor?._id)}}>Apagar</button>
                    </div>
                )))}
                {!lista&&(
                    <h3 className="text-white font-semibold mt-30 flex justify-center items-center text-2xl">Nenhum contato adicionado</h3>
                )}
            </div>
            </>
        )}
            {msg&&msg!=""&&(
                <Card msg={msg} tipo={tipoMsg}/>
            )}
        </>
    )
}
export default List