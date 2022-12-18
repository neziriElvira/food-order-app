import React from "react";
import style from './Header.module.css';

const Header = (props) => {

    return (
        <div className={style.header}>
            <h2>ReactMeals</h2>
            <button>Button</button>
        </div>
    )
}

export default Header;