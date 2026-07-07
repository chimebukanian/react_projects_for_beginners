import {useState, useEffect} from 'react'
import UserCard from './UserCard'
import './App.css'

export default function UserList({userArr}) {
    let [usersFetched, setUsersFetched] = useState([])

    useEffect(() => {
          fetch("https://6a4b6df8f5eab0bb6b62c19e.mockapi.io/users")
            .then((res) => res.json())
            .then((usableData) => setUsersFetched(usableData))
    }, [])

    return (
        <div className="user-list-container">
            {usersFetched.map((user, index)=> {
                return <UserCard 
                key={index}
                name={user.name}
                pic={user.pic}
                id={user.id} />
            })}
        </div>
    )
}