import { useFormik } from "formik"
import { useEffect } from "react"
import {object, string} from 'yup'
import { useParams } from "react-router-dom"
import { useState } from "react"

// parent
export default function EditUser() {
    let {id} =  useParams()

    let [user, setUser] = useState(null)

    useEffect(() => {
        fetch(`https://6a4b6df8f5eab0bb6b62c19e.mockapi.io/users/${id}`)
        .then((resp) => resp.json() )
        .then((data) => {
            setUser(data); 
            console.log(user)})

    }, [])


    return (
        user ? <EditUserForm user={user} /> : <p> Loading...</p>
    )
}


// child
function EditUserForm({user}) {
    
    let useValidationSchema = object({
        name: string().required(),
        pic: string().url().required(),
        bio: string().min(10).required()
    })

 
    // get all data into the useFormik hook
    let {handleBlur, handleChange, errors, handleSubmit, touched, values} = useFormik({
        initialValues: {
            name: user.name,
            pic: user.pic,
            bio: user.bio,
        },
        onSubmit: (updatedUser) => {
            console.log(updatedUser)

            fetch(`https://6a4b6df8f5eab0bb6b62c19e.mockapi.io/users/${user.id}`,
                {method: 'PUT', body: JSON.stringify(updatedUser), headers: {"Content-Type": "application/json"}}
            )
        },
        validationSchema: useValidationSchema
        
    })

    return (
        <div>
            <h2> Edit User</h2>

            <form onSubmit={handleSubmit}>
                <input 
                value={values.name}
                placeholder="name" 
                onChange={handleChange}
                name="name"
                />
                <br />
                <input 
                value={values.pic}
                placeholder="pic"
                onChange={handleChange}
                name="pic"
                 />
                <br />
                <input 
                value={values.bio}
                placeholder="bio"
                onChange={handleChange}
                name="bio"
                 />
                <br />

                <button type="submit">Update User</button>
            </form>
        </div>
    )
}