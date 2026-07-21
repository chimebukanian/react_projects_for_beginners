import {
    useNavigate,
} from 'react-router-dom';
import './App.css';

export default function UserCard({name, pic, id, delBtn}) {
    
    let navigate = useNavigate()
    
    return (
        <section className="user-container" >
            <img src={pic} className='user-profile-pic'/>

            <h2 className='user-name'>
                Hello, <span className='user-first-name'>{name}</span>
            </h2>
            <button onClick={() => navigate(`/users/${id}`)}>View Profile</button>
            {delBtn}
        </section>
    )
}