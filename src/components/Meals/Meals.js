import React from "react";
import { MEALS } from "../Utils/states";
import style from './Melas.module.css';
import Card from "../UI/Card";


const Meals = (props) => {

    const melasList = MEALS;

    return (
        <section className={style.meals}>
            <Card>
                <ul>
                    {melasList.map((meals) =>
                        <li>{meals.name}</li>
                    )}
                </ul>
            </Card>
        </section>
    );
}

export default Meals;