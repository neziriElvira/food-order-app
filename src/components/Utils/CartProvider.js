import CartContext from "./cart-context";

const CartProvider = props => {

    const addItemtoCartHandler = () => { };

    const removeItemFromCartHandler = () => { };

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemtoCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return <CartContext.Provider>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;