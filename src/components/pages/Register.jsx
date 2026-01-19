import Menu from "../layouts/Menu"
function Register(){
    return(
        <>
        <Menu selecionado="register"/>
            <div className="bg-blue-500 w-full h-dvh">
                <form className="w-full p-[8%] flex flex-col gap-10">
                    <h1 className="text-4xl text-white flex items-center justify-center">Cadastrar Contato</h1>
                    <div className="flex flex-col items-center justify-center text-white">
                    <label className="mb-2 text-lg">Nome:</label>
                    <input type="text" className="border-white border-2 outline-none p-2 w-full rounded-xl"/>
                    </div>
                    <div className="flex flex-col items-center justify-center text-white">
                    <label className="mb-2 text-lg">Número:</label>
                    <input type="text" className="border-white border-2 outline-none p-2 w-full rounded-xl"/>
                    </div>
                    <button className="bg-black text-white p-3 rounded-2xl m-auto w-[60%]">Cadastrar</button>
                </form>
            </div>
        </>
    )
}
export default Register