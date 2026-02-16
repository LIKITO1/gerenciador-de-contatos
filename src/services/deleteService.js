export async function deleteService(valor){
    const res=await fetch("https://backend-gerenciador-de-contatos-n58u.onrender.com/delete",{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
            authorization:"Bearer "+localStorage.getItem("token")
        },body:JSON.stringify({id_people:valor,id_user:localStorage.getItem("id_user")})
    })
    const data=await res.json()
    return data
}