import Book from "./Book";
import Loader02 from "./Loader02";

function BooksList({books}) {

    return (
        <div className="kvc">
        {
           books.length ? books.map(b => <Book key={b.id} book={b}></Book>) : <Loader02></Loader02>
        }
        </div>
    )
}

export default BooksList;