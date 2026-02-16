function CardDelete({contato,confirmation}){
    return(
        <div className="flex absolute w-full h-full backdrop-blur-lg items-center justify-center">
            <div className="flex flex-col w-[90%] h-[40%] bg-blue-300 rounded-3xl items-center justify-center gap-10 p-5">
                <h1 className="font-bold text-2xl text-center text-white">Tem certeza que deseja excluir o contato {contato}?</h1>
                <div className="flex gap-10">
                    <button className="font-semibold text-white bg-green-600 p-4 rounded-2xl text-xl" onClick={()=>{confirmation(true)}}>Excluir</button>
                    <button className="font-semibold text-white bg-red-600 p-4 rounded-2xl text-xl" onClick={()=>{confirmation(false)}}>Cancelar</button>
                </div>
            </div>        
        </div>
    )
}
export default CardDelete