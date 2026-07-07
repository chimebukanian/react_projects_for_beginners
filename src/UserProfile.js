import {useEffect, useState} from 'react'
import './App.css'

export function Welcome({name}) {

    return (
        <h1>Welcome <span className="user-name">{name}</span></h1>
    )
}

export function User({name, age}) {
    return (
        <h1>Welcome <span className="user-name">{name}</span>, age: {age}</h1>
    )
}

export default function UserProfile() {
    // hooks are functions
    // useState: a hook that allows us  add a state variable and a function to update it 
    // useEffect: a hook that is triggered after the component is rendered or when some updates happens to some set data
    let [error, setError] = useState(null)
    let [loading, setLoading] = useState(false)
    let [userData, setUserData] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
            if (!response.ok) {
                throw new Error("Something went wrong")
            }
            return response.json()
        })
        .then(data => {
            setUserData(data)
            setLoading(false)
        })
        .catch(err => {
            setError(err.message)
            setLoading(false)
        })
    }, [])  

    return (
        <section>
            <h2>User Profile</h2>

            {error && <p>Error: {error}</p>}
            {loading && <p>Loading...</p>}
            {userData && <p>user data: {userData.name}</p>}
        </section>
    )
}