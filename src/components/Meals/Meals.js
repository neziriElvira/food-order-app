import { useEffect, useState } from "react";
import { MEALS } from "../Utils/states";
import style from './Melas.module.css';
import Card from "../UI/Card";
import MealItem from "./MealItem";


const Meals = (props) => {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('https://food-order-87b00-default-rtdb.firebaseio.com/meals.json');
            const responseData = await response.json();

            const loadedMeals = [];

            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price
                })
            }

            setMeals(loadedMeals);
        }

        fetchMeals();
    }, []);


    const melasList = meals.map((meal) => (
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    return (
        <section className={style.meals}>
            <Card>
                <ul>
                    {melasList}
                </ul>
            </Card>
        </section>
    );
}

export default Meals;