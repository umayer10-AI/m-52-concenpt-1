export const deleteUser = async (id) => {
    const res = await fetch(`http://localhost:5000/user/${id}`)
    const data = await res.json()
    console.log(id)
    return data
}