export async function requisitar(){
    const res=await fetch("https://backend-gerenciador-de-contatos-n58u.onrender.com/api",{
        method:"POST",
        headers:{
            authorization:"Bearer "+localStorage.getItem("token"),
            "Content-Type":"application/json"
        },body:JSON.stringify({id:localStorage.getItem("id_user")})
    })
    const data=await res.json()
    return data
}