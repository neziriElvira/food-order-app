import React, { Fragment } from "react";
import style from './Header.module.css';
import mealsImg from '../../assets/meals.jpg';
import CartButton from "./CartButton";

const Header = (props) => {

    return (
        <Fragment>
            <header className={style.header}>
                <h2>ReactMeals</h2>
                <CartButton onClick={props.onShowCart} />
            </header>
            <div className={style['main-image']}>
                <img src={mealsImg} alt="meals on table" />
            </div>
        </Fragment>
    )
}

export default Header;