import Menu from "../layouts/Menu"
function Home(){
    return(
        <>
        <Menu selecionado="home"/>
            <div className="bg-blue-500 w-full h-[80dvh] flex items-center text-center flex-col text-white font-semibold sm:p-10 lg:px-35">
                <h1 className="text-2xl mt-20 p-3">Gerencie seus contatos com facilidade</h1>
                <p className="p-5 mt-6 text-xl text-justify">Uma aplicação simples e eficiente para cadastrar, editar, buscar e excluir contatos em um só lugar. Com uma interface moderna e responsiva, o sistema foi desenvolvido para oferecer praticidade, organização e rapidez no dia a dia.</p>
            </div>
        </>
    )
}
export default Home