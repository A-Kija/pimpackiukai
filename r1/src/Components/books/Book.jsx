function Book({ book, likeButtonPressed, like }) {


    return (
        <div className="kv big kv_3">
            <img src={book.img} />
            <small>{book.title}</small>
            <i>{book.author}</i>
            <svg className={like ? 'like' : ''} onClick={() => likeButtonPressed(book.id)}>
                <use xlinkHref="#heart"></use>
            </svg>
        </div>
    );
}

export default Book;