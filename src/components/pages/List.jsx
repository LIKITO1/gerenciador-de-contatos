import {useEffect,useState} from "react"
import Menu from "../layouts/Menu"
import Card from "../layouts/Card"
import Loading from "../layouts/Loading"
import {requisitar} from "../../services/api"
import {deleteService} from "../../services/deleteService"
import CardDelete from "../layouts/CardDelete"
function List(){
    const [lista,setLista]=useState([])
    const [msg,setMsg]=useState("")
    const [tipoMsg,setTipoMsg]=useState("")
    const [isLoading,setIsLoading]=useState(false)
    const [cardDelete,setCardDelete]=useState(false)
    const [selectedId,setSelectedId]=useState("")
    async function apagar(valor){
        setSelectedId(valor)
        setCardDelete(true)
    }
    async function confirmation(dados){
        if(dados){
            setIsLoading(true)
            const res=await deleteService(selectedId)
            setMsg(res.msg)
            setTipoMsg(res.tipo)
            setTimeout(async()=>{
                const response=await requisitar()
                setLista(response?.contatos)
                setCardDelete(false)
                setIsLoading(false)
            },1500) 
        }else{
            setCardDelete(false)
        }
    }
    useEffect(()=>{
        async function chama(){
            setIsLoading(true)
            const data=await requisitar()
            setIsLoading(false)
            setLista(data?.contatos)
        }   
        chama()
    },[])
    return(
        <>
        {isLoading&&(
                <Loading/>
            )}
        {localStorage.getItem("token")&&localStorage.getItem("token")!=""&&(
            <>
            {cardDelete&&(
                <CardDelete confirmation={confirmation}/>
            )}
        <Menu selecionado="list"/>
            <div className="bg-blue-500 w-full h-[80dvh] pt-6 px-3">
                <h1 className="flex w-full font-semibold text-white items-center justify-center text-4xl">Lista de Contatos</h1>
                {lista&&lista.length>0&&(lista.map((valor)=>(
                    <div key={valor?._id} className="bg-white w-[90%] mx-auto flex flex-wrap justify-evenly py-4 rounded-2xl mt-6 sm:w-[70%] lg:w-[60%]">
                        <div className="flex flex-col">
                            <div className="text-xl font-bold">Nome:{valor?.nome}</div>
                            <div className="text-md font-semibold text-gray-600">Número:{valor?.numero}</div>
                        </div>
                        <button className="bg-red-500 text-md py-2 px-3 rounded-xl font-semibold text-white hover:cursor-pointer" onClick={()=>{apagar(valor?._id)}}>Apagar</button>
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