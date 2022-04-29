import './App.css';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import BooksList from './Components/books/BooksList';


function App() {

    const [books, setBooks] = useState([]); // skirtas atvaizdavimui
    const [likes, setLikes] = useState(new Set());
    const [timer, setTimer] = useState(0);
    const change = useRef(false);
    const timerId = useRef();
    const loaded = useRef(false);
    const [sort, setSort] = useState('');
    const booksStore = useRef([]);

    useEffect(() => {

        timerId.current = setInterval(() => {
            if (change.current) {
                setTimer(t => t + 1);
                console.log('tik tak chage');
                change.current = false;
            } else {
                console.log('tik tak no');
            }
        }, 5000);
        return () => clearInterval(timerId.current);

    }, [])

    useEffect(() => {
        axios.get('https://in3.dev/knygos/')
            .then(res => {
                booksStore.current = res.data;
                setBooks([...booksStore.current])
            });
    }, []);

    useEffect(() => {
        let l = localStorage.getItem('booksLikes');
        if (null === l) {
            l = JSON.stringify([]);
        }
        l = JSON.parse(l);
        setLikes(new Set(l));
    }, []);

    useEffect(() => {
        if (loaded.current) {
            localStorage.setItem('booksLikes', JSON.stringify([...likes]));
        }
        loaded.current = true;
    }, [timer]);

    useEffect(() => {
        // isivaizduokit kad cia reduseris
        const booksCopy = [...booksStore.current];
        switch(sort) {
            case 'asc':
                booksCopy.sort((a, b) => a.price - b.price);
                break;
            case 'desc':
                booksCopy.sort((b, a) => a.price - b.price);
                break;
            default:
        }
        setBooks(booksCopy);
    }, [sort]);


    const likeButtonPressed = id => {
       // isivaizduokit kad cia reduseris
       change.current = true;
       const likesCopy = new Set(likes); // fancy kopija
       likesCopy.has(id) ? likesCopy.delete(id) : likesCopy.add(id);
       setLikes(likesCopy);
    }


    return (
        <div className="App">
            <h1>Books Store</h1>
            <div className="kvc">
            <svg className="arrow arrow-up" onClick={() => setSort('asc')}>
                <use xlinkHref="#arrow"></use>
            </svg>
            <svg className="arrow arrow-down" onClick={() => setSort('desc')}>
                <use xlinkHref="#arrow"></use>
            </svg>

            </div>
            <BooksList likeButtonPressed={likeButtonPressed} books={books} likes={likes}></BooksList>
        </div>
    );
}

export default App;