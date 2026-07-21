import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {useFormik} from 'formik'
import {object, string} from 'yup'

export default function AddUser() {
    // let [name, setName] = useState("")
    // let [bio, setBio] = useState("")
    // let [pic, setPic] = useState("")

    
    let addUser = (newUser) => {
            // let newUser = {
            //         name,
            //         bio,
            //         pic
            //     }
            
                console.log(newUser)

            fetch('https://6a4b6df8f5eab0bb6b62c19e.mockapi.io/users',
            {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(newUser)
        }
        ).then(() => navigate('/users'))
    }

    let navigate = useNavigate()

    let validationSchema = object({
        name: string().required(),
        pic: string().url().required(),
        bio: string().min(10).required()
    })

    const {handleBlur, handleChange, touched, errors, handleSubmit} = useFormik({
        initialValues: {
            name: "",
            bio: "",
            pic: ""
        },
        onSubmit: (values) => {
            addUser(values)

        },
        validationSchema,
    })

    return (
        <div>
            <h1>Add User</h1>

            <form onSubmit={handleSubmit} className="add-user-form">
                <input
                onChange={handleChange}
                onBlur={handleBlur}
                 placeholder="Name" 
                 required
                 name="name"
                 />

                 {touched.name && errors.name ? <p>{errors.name}</p> : <br />}
                    
                    
                <input
                 placeholder="Bio"
                onBlur={handleBlur}
                 onChange={handleChange}
                 required
                 name="bio"
                 />

                {touched.bio && errors.bio ? <p>{errors.bio}</p> : <br />}
        
                <input
                onBlur={handleBlur}
                onChange={handleChange}
                 placeholder="Pic" 
                 name="pic"
                 />

                {touched.pic && errors.pic ?<p>{errors.pic}</p> : <br />}


                {/* <button type="submit" onClick={addUser}>Add user</button> */}
                <button type="submit">Add user</button>
{/*  */}

   
            </form>
        </div>
    )
}