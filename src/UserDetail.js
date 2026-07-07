import './App.css'
import { useParams } from "react-router-dom"

export default function UserDetail({userArr}) {

    let {id} = useParams()
    let user = userArr[id]

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