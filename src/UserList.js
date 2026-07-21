import {useState, useEffect} from 'react'
import UserCard from './UserCard'
import './App.css'
import { useNavigate } from 'react-router-dom'

export default function UserList({userArr}) {
    let [usersFetched, setUsersFetched] = useState([])
    let navigate = useNavigate()

    function getUsers() {
            fetch("https://6a4b6df8f5eab0bb6b62c19e.mockapi.io/users")
            .then((res) => res.json())
            .then((usableData) => setUsersFetched(usableData))
    }
    useEffect(() => {
        getUsers()
    }, [])

    function delUser(id) {
        fetch(`https://6a4b6df8f5eab0bb6b62c19e.mockapi.io/users/${id}`, {
            method: 'DELETE'
        }).then((res) => res.json())
        .then(() => getUsers())
    }
    
    return (
        <div className="user-list-container">
            {usersFetched.map((user, index)=> {
                return <UserCard 
                key={index}
                name={user.name}
                pic={user.pic}
                id={user.id}
                delBtn={<button onClick={() => delUser(user.id)}>Delete button</button>}
                 />
            })}
        </div>
    )
}