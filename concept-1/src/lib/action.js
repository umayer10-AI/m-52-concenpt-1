import { redirect } from "next/navigation"

export const deleteUser = async (id) => {
    const res = await fetch(`http://localhost:5000/user/${id}`,{
        method: "DELETE"
    })
    const data = await res.json()
    
    if(data.deletedCount > 0){
        alert("Delete Successfully")
        redirect('/all-product')
    }
    return data
}