import Menu from "../layouts/Menu"
function Home(){
    return(
        <>
        <Menu/>
            <div className="bg-blue-500 w-dvw h-dvh flex justify-center items-center flex-col">
                <h1 className="text-4xl text-white">Gerenciador de Contatos</h1>
            </div>
        </>
    )
}
export default Home