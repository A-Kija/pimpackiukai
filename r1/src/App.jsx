import './App.css';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import axios from 'axios';
import BooksList from './Components/books/BooksList';
import Ranger from './Components/books/Ranger';
import Cart from './Components/books/Cart';
import Books from './Functions/Books';

// const cart = [
//     {id:2, count: 1},
//     {id:4, count: 2},
//     {id:7, count: 8},
// ];

function App() {

    const [books, setBooks] = useState([]); // skirtas atvaizdavimui
    const [likes, setLikes] = useState(new Set());
    const [timer, setTimer] = useState(0);
    const change = useRef(false);
    const timerId = useRef();
    const loaded = useRef(false);
    const [sort, setSort] = useState('');
    const [filter, setFilter] = useState(0);


    const [minMax, setMinMax] = useState([0, 0]);

    const [showCart, setShowCart] = useState(0);

    const [cartView, setCartView] = useState([]);

    const booksStore = useRef([]); // Master store
    const [dataReceived, setDataReceived] = useState(false); // duomenys gauti

    const [booksCartCount, setBooksCartCount] = useState(0);
    const [booksCartTotal, setBooksCartTotal] = useState(0);

    const [cart, setCart] = useState([]);

    // const cat = {big: 'ya', black: 'no'};

    const cat = useMemo(() => ({big: 'ya', black: 'no'}), []);

    useEffect(() => {
        if(!dataReceived) {
            return;
        }
        // setCartView(booksStore.current
        // .filter(b => cart.map(cb => cb.id).indexOf(b.id) !== -1)
        // .map(b => ({...b, count: cart[cart.map(cb => cb.id).indexOf(b.id)].count})));

        setCartView(Books.getCartView(cart, booksStore.current));

    }, [dataReceived, cart]);


    useEffect(() => {
        setBooksCartCount(Books.getCartCount(cart));
    }, [cart]);

    useEffect(() => {
        if(!dataReceived) {
            return;
        }
        setBooksCartTotal(Books.getCartTotal(cart, booksStore.current));
    },[dataReceived, cart]);


    useEffect(() => {

        timerId.current = setInterval(() => {
            if (change.current) {
                setTimer(t => t + 1);
                // console.log('tik tak chage');
                change.current = false;
            } else {
                // console.log('tik tak no');
            }
        }, 5000);
        return () => clearInterval(timerId.current);

    }, [])

    useEffect(() => {
        axios.get('https://in3.dev/knygos/')
            .then(res => {
                booksStore.current = res.data;
                setDataReceived(true);
                setBooks([...booksStore.current]);
                let min = booksStore.current[0].price;
                let max = min;
                booksStore.current.forEach(b => {
                    min = min > b.price ? b.price : min;
                    max = max < b.price ? b.price : max;
                });
                setMinMax([min, max]);
                setFilter(Math.floor(min));
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

    // useEffect(() => {
    //     // isivaizduokit kad cia reduseris
    //     const booksCopy = [...booksStore.current];
    //     switch(sort) {
    //         case 'asc':
    //             booksCopy.sort((a, b) => a.price - b.price);
    //             break;
    //         case 'desc':
    //             booksCopy.sort((b, a) => a.price - b.price);
    //             break;
    //         default:
    //     }
    //     setBooks(booksCopy);
    // }, [sort]);


    // useEffect(() => {
    //     setBooks(booksStore.current.filter(b => b.price > filter));
    // }, [filter]);


    useEffect(() => {
        const actionObject = {
            type: 'chage_list', // cia tik iliustracijai
            payload: {
                filter: filter,
                sort: sort
            }
        }
        doChangeList(actionObject);
    }, [filter, sort]);

    // const hello = () => {
    //     console.log('Hello');
    // }

    const hello = useCallback(() => {
        console.log('Hello', cat);
    }, [cat]);

    useEffect(() => {
        hello();
    }, [hello]);



    const addButtonClicked = id => {

        // console.log(id);
        
        setCart(Books.addToCart(id, cart));
    }

    const doChangeList = action => {
        // isivaizduokit kad cia reduseris
        const booksCopy = [...booksStore.current];
        switch(action.payload.sort) {
            case 'asc':
                booksCopy.sort((a, b) => a.price - b.price);
                break;
            case 'desc':
                booksCopy.sort((b, a) => a.price - b.price);
                break;
            default:
        }
        setBooks(booksCopy.filter(b => b.price > action.payload.filter));
    }


    const likeButtonPressed = id => {
       // isivaizduokit kad cia reduseris
       change.current = true;
       const likesCopy = new Set(likes); // fancy kopija
       likesCopy.has(id) ? likesCopy.delete(id) : likesCopy.add(id);
       setLikes(likesCopy);
    }

    const remove = id => {
        setCart(c => c.filter(b => b.id !== id));
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
            <Ranger minMax={minMax} filter={filter} setFilter={setFilter}></Ranger>
            </div>
            <BooksList addButtonClicked={addButtonClicked} likeButtonPressed={likeButtonPressed} books={books} likes={likes}></BooksList>
        
            <div className="cart">
            <div className="count">{booksCartCount}</div>
            <svg onClick={() => setShowCart(s => !s)}>
                <use xlinkHref="#cart"></use>
            </svg>
            <span>{booksCartTotal} eur</span>
            <div className="bin">
                <Cart remove={remove} showCart={showCart} setShowCart={setShowCart} cartView={cartView}></Cart>
            </div>
            </div>
        </div>
    );
}

export default App;