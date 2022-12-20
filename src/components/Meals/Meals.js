import React from "react";
import { MEALS } from "../Utils/states";
import style from './Melas.module.css';
import Card from "../UI/Card";
import MealItem from "./MealItem";


const Meals = (props) => {

    const melasList = MEALS;

    return (
        <section className={style.meals}>
            <Card>
                <ul>
                    {melasList.map((meal) =>
                        <MealItem
                            id={meal.id}
                            key={meal.id}
                            name={meal.name}
                            description={meal.description}
                            price={meal.price}
                        />
                    )}
                </ul>
            </Card>
        </section>
    );
}

export default Meals;