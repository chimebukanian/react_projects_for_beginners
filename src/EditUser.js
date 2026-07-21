import { useParams } from "react-router-dom"

export default function EditUser() {
    let {id} = useParams()
    
    return (
        <div>
            <h2>Edit User</h2>
        </div>
    )
}