function Book({ book, likeButtonPressed, like }) {


    return (
        <div className="kv big kv_3">
            <img src={book.img} />
            <small>{book.title}</small>
            <i>{book.author}</i>
            <div className="price">{book.price} Eur</div>
            <svg className={like ? 'like' : ''} onClick={() => likeButtonPressed(book.id)}>
                <use xlinkHref="#heart"></use>
            </svg>
            <button>Add</button>
        </div>
    );
}

export default Book;