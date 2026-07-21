import './App.css'
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'

export default function UserDetail() {

    let {id} = useParams()
    let [user, setUser] = useState({})
    
    // let user = userArr[id]
    useEffect(()=> {
        fetch(`https://6a4b6df8f5eab0bb6b62c19e.mockapi.io/users/${id}`)
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])

    return (
        <div className="user-detail-container">
            <img className='user-profile-pic' src={user.pic} alt={user.name} />

            <div>
                <h3 className="user-name">{user.name}</h3>
                <p>
                    {user.bio}
                </p>
            </div>
        </div>
    )


}