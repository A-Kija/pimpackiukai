function Cart({showCart, setShowCart, cartView}) {

    if (!showCart) return null;

    return (

        <div className="nice-cart">
            <div className="close" onClick={() => setShowCart(false)}>X</div>
            {
                cartView.map(b => <div className="cart-line" key={b.id}><b>{b.title}</b><i>{b.count}</i><u>{b.count * b.price} eur</u></div>)
            }
        
        </div>
    )
}

export default Cart;