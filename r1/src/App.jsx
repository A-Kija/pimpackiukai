import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BooksList from './Components/books/BooksList';

function App() {

    const [books, setBooks] = useState([]);
    const [likes, setLikes] = useState(new Set());

    useEffect(() => {
        axios.get('https://in3.dev/knygos/')
            .then(res => setBooks(res.data));
    }, []);

    useEffect(() => {
        let l = localStorage.getItem('booksLikes');
        if (null === l) {
            l = JSON.stringify([]);
        }
        l = JSON.parse(l);
        setLikes(new Set(l));
    }, []);


    const likeButtonPressed = id => {
        if (likes.has(id)) {
            setLikes(l => {
                l.delete(id);
                return l;
            });
        } else {
            setLikes(l => {
                l.add(id);
                return l;
            });
        }
    }


    return (
        <div className="App">
            <h1>Books Store</h1>
            <BooksList likeButtonPressed={likeButtonPressed} books={books}></BooksList>

        </div>
    );
}

export default App;