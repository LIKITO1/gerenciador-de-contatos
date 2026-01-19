import './App.css'
function App() {
  return (
    <>
      <div className="absolute w-full h-full bg-gradient-to-l from-blue-300 to-green-300 flex flex-col gap-10">
          <h1 className="mt-20 text-4xl flex items-center justify-center">Login</h1>
          <div className="flex flex-col">
          <label className="items-center justify-center flex">Email:</label>
          <input type="text" className="border w-[75%] mx-auto outline-none p-1"/>
          </div>
          <div className="flex flex-col">
          <label className="flex items-center justify-center">Senha:</label>
          <input type="text" className="border w-[75%] mx-auto outline-none p-1"/>
          </div>
          <button className="bg-blue-400 h-10 w-[60%] mx-auto rounded-xl font-semibold">Logar</button>
      </div>
    </>
  )
}
export default App