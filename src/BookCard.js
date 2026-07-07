import {
    useNavigate,
    useParams
} from 'react-router-dom'

export default function BookCard({pic, title, rating, Author}) { 
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate('/books/') }>
            <img src={pic} style={{borderRadius: "50%"}}/>
            <div>
                <h3>{title}</h3>
                <p>Rating: {rating}</p>
                <p>Author: {Author}</p>
            </div>
        </div>
    )
}