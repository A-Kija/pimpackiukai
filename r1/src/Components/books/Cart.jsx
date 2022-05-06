function Cart({showCart, setShowCart, cartView, remove}) {

    if (!showCart) return null;

    return (

        <div className="nice-cart">
            <div className="close" onClick={() => setShowCart(false)}>X</div>
            {
                cartView.map(b => <div className="cart-line" key={b.id}><h2 onClick={() => remove(b.id)}>X</h2><b>{b.title}</b><i>{b.count}</i><u>{b.count * b.price} eur</u></div>)
            }
        </div>
    )
}

export default Cart;