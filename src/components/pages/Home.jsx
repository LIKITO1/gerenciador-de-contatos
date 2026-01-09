import Menu from "../layouts/Menu"
function Home(){
    return(
        <>
        <Menu selecionado="home"/>
            <div className="bg-blue-500 w-full h-dvh flex items-center text-center flex-col text-white font-semibold">
                <h1 className="text-xl mt-20 mb-6">Gerencie seus contatos com facilidade</h1>
                <p className="p-2">Uma aplicação simples e eficiente para cadastrar, editar, buscar e excluir contatos em um só lugar. Com uma interface moderna e responsiva, o sistema foi desenvolvido para oferecer praticidade, organização e rapidez no dia a dia.</p>
            </div>
        </>
    )
}
export default Home