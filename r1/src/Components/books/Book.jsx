import { useState } from "react";

function Book({ book }) {

    const [like, setLike] = useState(false);

    return (
        <div className="kv big kv_3">
            <img src={book.img} />
            <small>{book.title}</small>
            <i>{book.author}</i>
            <svg className={like ? 'like' : ''} onClick={() => setLike(l => !l)}>
                <use xlinkHref="#heart"></use>
            </svg>
        </div>
    )
}

export default Book;