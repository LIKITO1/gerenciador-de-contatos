export async function addService(numero,idUser){
    const res=await fetch("https://backend-gerenciador-de-contatos-n58u.onrender.com/add",{
        method:"POST",
        headers:{
            authorization:"Bearer "+localStorage.getItem("token"),
            "Content-Type":"application/json"
        },
        body:JSON.stringify({numero,idUser})
    })
    const data=await res.json()
    return data
}