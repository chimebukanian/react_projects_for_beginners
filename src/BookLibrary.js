import { useEffect, useState } from "react"
import axios from 'axios'
import "./book.css"

export default function Library() {
    console.log("Library componenet")
    let [books, setBooks] = useState([])
    let [loading, setLoading] = useState(false)
    
useEffect(() => {
    const fetchBooks = async () => {
        try {
            setLoading(true);

            const resp = await axios.get(
                "https://api.mockfly.dev/mocks/4e1b7a19-e93e-4283-83b6-4fa916da5f34/books"
            );

            console.log(resp.data);

            setBooks(resp.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    fetchBooks();
}, []);

    return (
        <div style={{display: 'flex', marginLeft: "25px"}}>
            {loading && <p>Books Loading</p>}
            
            {books && books.map((book, index) => (<BookCard 
            imageUrl={book.img} 
            title={book.title} 
            ratings={book.ratings}
            author={book.author}
            id={book.id}
            key={index}
            />))}

        </div>
    )
}


export const BookCard = ({imageUrl, title, ratings, author, id}) => {
    return (
        <div className="book-card">
            <div>
                <img className="book-image" src={imageUrl} />
            </div>

            <div>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <h2>{title}</h2>
                    <p>⭐ {ratings}</p>
                </div>
                <p style={{color: "green"}}>{author}</p>
            </div>
        </div>
    )
}