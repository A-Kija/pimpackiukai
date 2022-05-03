class Books {

    static getCartCount(cart) {
        let count = 0;
        cart.forEach(product => {
            count += product.count;
        });
        return count;
    }

    static getCartTotal(cart, booksStore) {
        let amount = 0;
        cart.forEach(c => {
            amount += this.getBookById(c.id, booksStore).price * c.count;
        });
        return amount; // float eurais
    }

    static getCartView(cart, booksStore) {
        const view = [];
        cart.forEach(c => {
            view.push({...this.getBookById(c.id, booksStore), count: c.count });
        });
        return view;
    }

    static getBookById(id, booksStore) {
        let index = -1;
        booksStore.forEach((b, i) => {
            if (id === b.id) {
                index = i;
            }
        });
        return booksStore[index];
    }

    static addToCart(id, cart) {

    }

}
export default Books;