import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import {object, string} from 'yup'

export default function AddUser() {
 
    // validation
    let userValidationSchema = object(
        {
            name: string().required(),
            pic: string().url().required(),
            bio: string().min(10).required()
        }
    )

    // easier to package and manage all state (data) in one place
    let {handleBlur, handleChange, handleSubmit, errors, touched} = useFormik(
        {
            initialValues: {
            name: 'goes in here', 
            pic: '', 
            bio: ''
        },
         onSubmit: (values) => {
            addUser(values)
         },
         validationSchema: userValidationSchema
         })

    let navigate = useNavigate()

    const addUser = (newUser) => {

        console.log(newUser)

        fetch('https://6a4b6df8f5eab0bb6b62c19e.mockapi.io/users',
            {
            method:  'POST',
            body: JSON.stringify(newUser),
            headers: {"Content-Type": 'application/json'}
        })
        .then(() => navigate('/users') )

    }

    return (
        <div className="add-user-form">
            <h2>Add User</h2>

            <form onSubmit={handleSubmit} className="add-user-form">

            <input 
            // name prop is used with the initialValues
            name="name" 
            placeholder="Name"
            onChange={handleChange}
            onBlur={handleBlur} // touched property changes to true
             />
             <br />
             <br />
             {touched.name && errors.name ? <p>{errors.name}</p> : null}
            <input 
            name="pic"
            placeholder="pic"
            onChange={handleChange}
            onBlur={handleBlur}


             />
                       <br />
            {touched.pic && errors.pic ? <p>{ errors.pic}</p> : null}

            <input 
            name="bio"
            placeholder="Bio"
            onChange={ handleChange}
            onBlur={ handleBlur}
             />
             <br />
             <br />
            { touched.bio &&  errors.bio ? <p>{ errors.bio}</p> : null}
            <button type="submit" >Submit New User</button>

                {/* <p>errors</p>
                <pre>{JSON.stringify( errors)}</pre> */}
            </form>
        </div>
    )
}

let greet = 'hello'