import { useState } from "react"

export default function LoginForm() {

    let [email, setEmail] = useState()
    let [password, setPassword] = useState()

    return (
        <div>
            <h2>Form with onSubmit (useState)</h2>

            <form onSubmit={(event) => {
                event.preventDefault() //prevents page refresh
                console.log(`your email is: ${email} and password is ${password}`)
            }}>
                <input 
                onChange={(event) => setEmail(event.target.value)}
                type="email" 
                placeholder="Email"/>
                <br />

                <input 
                onChange={(event) => setPassword(event.target.value)}
                type="password" 
                placeholder="password" />
                <br />

                <input type="submit" />
            </form>
        </div>
    )
}