function Card({msg,tipo}){
    return(
        <>
            <div className="absolute w-full h-[13%] text-black flex items-center justify-center mt-5">
                <p className="bg-emerald-400 p-2 w-[80%] h-full flex items-center justify-center">{msg}</p>
            </div>
        </>
    )
}
export default Card