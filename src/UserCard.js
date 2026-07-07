import {
    useNavigate,
} from 'react-router-dom';
import './App.css';

export default function UserCard({name, pic, id}) {
    
    let navigate = useNavigate()
    
    return (
        <section className="user-container" onClick={() => navigate(`/users/${id}`)}>
            <img src={pic} className='user-profile-pic'/>

            <h2 className='user-name'>
                Hello, <span className='user-first-name'>{name}</span>
            </h2>
        </section>
    )
}