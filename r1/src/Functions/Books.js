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
        // 
        return amount; // float eurais
    }

}
export default Books;