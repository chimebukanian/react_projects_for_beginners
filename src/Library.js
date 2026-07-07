import BookCard from './BookCard'

export default function Library() {

    let booklist = [
        {
            pic: "https://example.com/book1.jpg",
            title: "The Two towers",
            rating: 4.9,
            Author: "J.R.R. Tolkien",
        },
        {
            pic: "https://example.com/book1.jpg",
            title: "How innovation...",
            rating: 4.0,
            Author: "Matt Ridley",
        },
    ]
    return (
        <section>
            {booklist.map((book, index) => {
               return <BookCard 
                    key={index}
                    pic={book.pic}
                    title={book.title}
                    rating={book.rating}
                    Author={book.Author}
                />
            })}
        </section>
    )
}