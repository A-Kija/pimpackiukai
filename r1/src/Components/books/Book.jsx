function Book({ book, likeButtonPressed }) {


    return (
        <div className="kv big kv_3">
            <img src={book.img} />
            <small>{book.title}</small>
            <i>{book.author}</i>
            <svg className={1 ? 'like' : ''} onClick={() => likeButtonPressed(book.id)}>
                <use xlinkHref="#heart"></use>
            </svg>
        </div>
    );
}

export default Book;