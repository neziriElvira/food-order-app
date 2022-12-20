import React from "react";
import style from './MealItem.module.css';
import MealItemFrom from "./MealItemForm";

const MealItem = (props) => {

    const price = `$${props.price.toFixed(2)}`;

    return (
        <li className={style.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={style.description}>{props.description}</div>
                <div className={style.price}>{price}</div>
            </div>
            <div>
                <MealItemFrom id={props.id} />
            </div>
        </li>
    );
}

export default MealItem;