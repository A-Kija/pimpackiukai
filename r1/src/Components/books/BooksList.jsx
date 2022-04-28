import Book from "./Book";
import Loader02 from "./Loader02";

function BooksList({books, likeButtonPressed, likes}) {

    return (
        <div className="kvc">
        {
           books.length ? books.map(b => <Book key={b.id} like={likes.has(b.id)} book={b} likeButtonPressed={likeButtonPressed}></Book>) : <Loader02></Loader02>
        }
        </div>
    )
}

export default BooksList;