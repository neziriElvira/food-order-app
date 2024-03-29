import { useContext, useState } from 'react';
import Modal from '../UI/Modal';
import CartContext from '../Utils/cart-context';
import style from './Cart.module.css';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = (props) => {
    const [isCheckout, setIsCheckout] = useState(false);
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem(item);
    };

    const orderHandler = () => {
        setIsCheckout(true);
    }
    const cartItems = (
        <ul className={style['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );

    const modalActions = <div className={style.actions}>
        <button className={style['button--alt']} onClick={props.onClose}>Close</button>
        {hasItems && <button onClick={orderHandler} className={style.button}>Order</button>}
    </div>;

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={style.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onCancel={props.onClose} />}
            {!isCheckout && modalActions}
        </Modal>
    );
};

export default Cart;

