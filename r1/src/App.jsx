import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BooksList from './Components/books/BooksList';

function App() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('https://in3.dev/knygos/')
        .then(res => setBooks(res.data));
    }, []);

  return (
    <div className="App">
        <h1>Books Store</h1>
        <BooksList books={books}></BooksList>
    </div>
  );
}

export default App;