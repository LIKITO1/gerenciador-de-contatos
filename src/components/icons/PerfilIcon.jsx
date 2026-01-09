export default function PerfilIcon({className,onClick}){
    const initial="L"
    return(
        <div className={`${className} flex items-center justify-center`}>
            <div onClick={onClick} className="ring-2 ring-black w-full h-12 rounded-4xl flex items-center justify-center text-xl font-bold font-mono">{initial}</div>
        </div>
    )
}