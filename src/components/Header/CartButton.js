import React, { useContext } from "react";
import CartContext from "../Utils/cart-context";
import style from './CartButton.module.css';
import CartIcon from "./CartIcon";

const CartButton = (props) => {

    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return (
        <button className={style.button} onClick={props.onClick}>
            <span className={style.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={style.badge}>{numberOfCartItems}</span>
        </button>
    );
}

export default CartButton;