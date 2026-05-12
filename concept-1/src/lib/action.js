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

export const createUser = async (v) => {
    const res = await fetch(`http://localhost:5000/user`,{
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify(v)
    })
    const data = await res.json()
    if(data.insertedId){
        redirect('/all-product')
    }
    return data
}

export const updateUser = async (id,v) => {
    const res = await fetch(`http://localhost:5000/user/${id}`,{
        method: "PATCH",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify(v)
    })
    const data = await res.json()
    if(data.matchedCount > 0){
        redirect('/all-product')
    }
    // console.log(data)
    return data
}